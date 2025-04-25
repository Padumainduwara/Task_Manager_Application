# Task Manager

A full-stack task management web application built with a Python backend and a React + Vite + Tailwind CSS frontend.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- Create, update, and track tasks
- User authentication & authorization
- Responsive design

## Tech Stack
- **Backend**: Python (Flask/FastAPI)
- **Frontend**: React, Vite, Tailwind CSS
- **Styling**: PostCSS, Tailwind
- **Linting**: ESLint

## Prerequisites
- Node.js v14+ and npm
- Python 3.8+
- pip (or pipenv/poetry)

## Installation

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. (Optional) Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate   # Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Frontend
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration
- **Backend**: Rename `.env.example` to `.env` in `backend/` (if exists) and set your environment variables (e.g., `DATABASE_URL`, `SECRET_KEY`).
- **Frontend**: Rename `.env.example` to `.env` in `frontend/` and set `VITE_API_BASE_URL` to your backend URL (e.g., `http://localhost:5000`).

## Running the Application
1. Start the backend server:
   ```bash
   cd backend
   python app.py
   ```
2. In a new terminal, start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```
3. Open your browser to http://localhost:3000

## Building for Production
```bash
cd frontend
npm run build
```
The built files will be in `frontend/dist/`. Serve them with your favorite static server or integrate into the backend.

## Folder Structure
```
TASK_MANAGE/
├── backend/
│   ├── app.py
│   └── ...
└── frontend/
    ├── public/
    ├── src/
    └── ...
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

