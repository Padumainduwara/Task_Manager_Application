import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons';  // Import icons

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Form validations
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required";
    if (!formData.username.trim()) tempErrors.username = "Username is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.password) tempErrors.password = "Password is required";
    if (formData.password && formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters long";
    }
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleRegisterSuccess = (response) => {
    console.log('Register Success:', response);
  };

  const handleRegisterFailure = (error) => {
    console.log('Register Failed:', error);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("http://127.0.0.1:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('User registered successfully!');
        setTimeout(() => {
          navigate('/login');  // Redirect to login after success
        }, 2000);
      } else {
        toast.error(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <ToastContainer />
        <div className="bg-white shadow-lg rounded-lg flex overflow-hidden" style={{ maxWidth: '1000px', width: '100%' }}>
          {/* Left section for the registration form */}
          <div className="w-full md:w-1/2 p-8">
            <div className="flex justify-center mb-4">
              <img src="/images/logo.png" alt="TaskDo" className="w-24 h-24 object-contain" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">Create Your Account</h2>

            {/* Google Login */}
            <div className="text-center mb-6">
              <GoogleLogin
                onSuccess={handleRegisterSuccess}
                onError={handleRegisterFailure}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="flex justify-center items-center w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-gray-100"
                  >
                    <img src="/images/google-icon.png" alt="Google Icon" className="w-5 h-5 mr-2" />
                    Sign in with Google
                  </button>
                )}
              />
            </div>

            <div className="text-center text-gray-500 mb-6">OR REGISTER WITH EMAIL</div>

            <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="relative">
        <FontAwesomeIcon icon={faUserCircle} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className={`w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.fullName && 'border-red-500'}`}
          placeholder="Your Full Name"
          required
        />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
      </div>

      <div className="relative">
        <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          className={`w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.username && 'border-red-500'}`}
          placeholder="Your Username"
          required
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
      </div>

      <div className="relative">
        <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.email && 'border-red-500'}`}
          placeholder="Your Email"
          required
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="relative">
        <FontAwesomeIcon icon={faLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className={`w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.password && 'border-red-500'}`}
          placeholder="Your Password"
          required
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      <div className="relative">
        <FontAwesomeIcon icon={faLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className={`w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.confirmPassword && 'border-red-500'}`}
          placeholder="Confirm Password"
          required
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
      >
        Register
      </button>
    </form>
            <div className="text-center mt-6 text-gray-500">
              Already have an account? <Link to="/login" className="text-blue-600 hover:text-blue-500">Sign in</Link>
            </div>
          </div>

          {/* Right section for the image */}
          <div className="hidden md:block md:w-1/2 bg-blue-700 text-white p-8">
            <h3 className="text-xl font-bold mb-4">Welcome to TaskDo</h3>
            <p className="text-sm mb-6">
              Join our platform to streamline your task management and boost your productivity. 
            </p>
            <button className="bg-white text-blue-600 py-2 px-4 rounded-full font-semibold hover:bg-gray-100 transition duration-200">
              Learn More
            </button>

            <div className="mt-8">
              <img
                src="/images/task-login.jpg" // Replace this with your illustration image URL
                alt="Illustration"
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Register;
