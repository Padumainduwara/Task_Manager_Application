// src/pages/Login.jsx

import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';  // Import icons
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  // Submit login form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),  // Send the username and password
      });

      const data = await response.json();

      if (data.success) {
        // Save the JWT token to localStorage (or sessionStorage)
        localStorage.setItem('token', data.token);

        // Display success message and redirect to the dashboard
        toast.success('Login successful!');
        setTimeout(() => {
          navigate('/dashboard');  // Redirect to the dashboard
        }, 2000);
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  // Handle Google login success
  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    // Handle Google login response and send token to backend for verification if needed
  };

  const handleLoginFailure = (error) => {
    console.log('Login Failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <ToastContainer />
        <div className="bg-white shadow-lg rounded-lg flex overflow-hidden" style={{ maxWidth: '1000px', width: '100%' }}>
          {/* Left section for login form */}
          <div className="w-full md:w-1/2 p-8">
            <div className="flex justify-center mb-4">
              {/* Logo */}
              <img src="/images/logo.png" alt="TaskDo" className="w-24 h-24 object-contain" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">Welcome Back</h2>

            <div className="text-center mb-6">
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginFailure}
              />
            </div>

            <div className="text-center text-gray-500 mb-6">OR LOGIN WITH USERNAME</div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="relative">
                <FontAwesomeIcon icon={faLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Password"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
              >
                Log in
              </button>
            </form>

            <div className="text-center mt-6 text-gray-500">
              Don't have an account yet? <a href="/register" className="text-blue-600 hover:text-blue-500">Sign up</a>
            </div>
          </div>

          {/* Right section for the image */}
          <div className="hidden md:block md:w-1/2 bg-blue-700 text-white p-8">
            <h3 className="text-xl font-bold mb-4">New Update Available</h3>
            <p className="text-sm mb-6">
              We have added some new awesome features. Learn more about what's new.
            </p>
            <button className="bg-white text-blue-600 py-2 px-4 rounded-full font-semibold hover:bg-gray-100 transition duration-200">
              Learn More
            </button>

            <div className="mt-8">
              <img
                src="/images/task-login.jpg"
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

export default Login;
