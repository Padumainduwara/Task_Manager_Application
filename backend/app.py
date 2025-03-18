from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_bcrypt import Bcrypt
import mysql.connector
from datetime import datetime  # Import datetime module

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests
bcrypt = Bcrypt(app)

# Configure the JWT secret key
app.config['JWT_SECRET_KEY'] = 'your_secret_key'  # Replace with your strong secret key
jwt = JWTManager(app)

# MySQL database configuration
db_config = {
    'host': 'localhost',  # Change if your database is hosted elsewhere
    'user': 'root',       # Your MySQL user
    'password': 'root',   # Your MySQL password
    'database': 'task'    # Your database name
}

# Function to connect to MySQL
def connect_to_db():
    return mysql.connector.connect(**db_config)

# Register route
@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    full_name = data.get('fullName')
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Hash the password using bcrypt
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    try:
        # Connect to the database
        conn = connect_to_db()
        cursor = conn.cursor()

        # Insert user data into the users table
        cursor.execute("""
            INSERT INTO users (full_name, username, email, password)
            VALUES (%s, %s, %s, %s)
        """, (full_name, username, email, hashed_password))

        conn.commit()  # Commit the transaction

        # Close the connection
        cursor.close()
        conn.close()

        return jsonify({"success": True, "message": "User registered successfully"}), 201
    except mysql.connector.Error as err:
        # Check for duplicate entry error (Error Code 1062)
        if err.errno == 1062:
            return jsonify({"success": False, "message": "Username already exists. Please try with another one."}), 400
        else:
            return jsonify({"success": False, "message": f"Error: {err}"}), 500

# Login route with JWT session handling
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    try:
        # Connect to the database
        conn = connect_to_db()
        cursor = conn.cursor(dictionary=True)

        # Query the user by username
        cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
        user = cursor.fetchone()

        # Check if user exists and password matches
        if user and bcrypt.check_password_hash(user['password'], password):
            # Generate JWT token
            access_token = create_access_token(identity={'id': user['id'], 'username': user['username']})
            cursor.close()
            conn.close()
            return jsonify({"success": True, "token": access_token, "message": "Login successful", "user_id": user['id']}), 200
        else:
            # Return error message if credentials are incorrect
            cursor.close()
            conn.close()
            return jsonify({"success": False, "message": "Invalid username or password"}), 401
    except mysql.connector.Error as err:
        return jsonify({"success": False, "message": f"Error: {err}"}), 500

# Example of a protected route that requires a valid JWT token
@app.route('/api/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify({"logged_in_as": current_user}), 200

# Fetch all tasks
@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    try:
        conn = connect_to_db()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM tasks")
        tasks = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify({"success": True, "tasks": tasks}), 200
    except mysql.connector.Error as err:
        return jsonify({"success": False, "message": f"Error: {err}"}), 500

# Add a new task
@app.route('/api/add-task', methods=['POST'])
def add_task():
    data = request.json
    task_name = data.get('taskName')
    description = data.get('description')
    status = data.get('status')
    
    # Handle task creation date if not provided
    task_created_on = data.get('taskCreatedOn') or datetime.now().strftime('%Y-%m-%d')
    
    start_date = data.get('startDate') if data.get('startDate') else None
    start_time = data.get('startTime') if data.get('startTime') else None
    end_date = data.get('endDate') if data.get('endDate') else None
    end_time = data.get('endTime') if data.get('endTime') else None

    try:
        conn = connect_to_db()
        cursor = conn.cursor()

        # Insert task into the database
        cursor.execute("""
            INSERT INTO tasks (task_name, description, status, task_created_on, start_date, start_time, end_date, end_time)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """, (task_name, description, status, task_created_on, start_date, start_time, end_date, end_time))

        conn.commit()  # Commit transaction
        cursor.close()
        conn.close()

        return jsonify({"success": True, "message": "Task added successfully!"}), 201
    except mysql.connector.Error as err:
        return jsonify({"success": False, "message": f"Error: {err}"}), 500

# DELETE task endpoint
@app.route('/api/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    try:
        conn = connect_to_db()
        cursor = conn.cursor()
        # Delete task with given task_id
        cursor.execute("DELETE FROM tasks WHERE id = %s", (task_id,))
        conn.commit()

        if cursor.rowcount == 0:
            return jsonify({"success": False, "message": "Task not found"}), 404

        cursor.close()
        conn.close()

        return jsonify({"success": True, "message": "Task deleted successfully"}), 200
    except mysql.connector.Error as err:
        return jsonify({"success": False, "message": f"Error: {err}"}), 500

@app.route('/api/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    data = request.json
    task_name = data.get('taskName')
    description = data.get('description')
    status = data.get('status')
    start_date = data.get('startDate')
    start_time = data.get('startTime')
    end_date = data.get('endDate')
    end_time = data.get('endTime')

    try:
        conn = connect_to_db()
        cursor = conn.cursor()

        cursor.execute("""
            UPDATE tasks
            SET task_name = %s, description = %s, status = %s, start_date = %s, start_time = %s, end_date = %s, end_time = %s
            WHERE id = %s
        """, (task_name, description, status, start_date, start_time, end_date, end_time, task_id))

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"success": True, "message": "Task updated successfully!"}), 200
    except mysql.connector.Error as err:
        return jsonify({"success": False, "message": f"Error: {err}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
