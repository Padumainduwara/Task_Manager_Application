import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Login from "./Login";
import Register from './Register';
import Footer from './Footer';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';  // Navbar imported
import HomePage from './components/HomePage'; // HomePage imported
import FaqSection from './components/FaqSection';  // Import the FAQ Section
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Dashboard from './pages/Dashboard';

// Helper component to hide Navbar on certain pages
const Layout = ({ children }) => {
  const location = useLocation(); // Get current route

  // Do not render Navbar on Dashboard page
  const showNavbar = location.pathname !== "/dashboard";

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* Conditionally render Navbar */}
      {showNavbar && <Navbar />}
      
      {/* Main Content */}
      <div className="flex-grow">
        {children}
      </div>

      {/* Conditionally render Footer */}
      {showNavbar && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <StatsSection /> {/* Stats Section */}
                <FaqSection /> {/* FAQ Section */}
                <Testimonials /> {/* Testimonials */}
                <AboutUs /> {/* About Us */}
                <ContactSection /> {/* Contact Section */}
              </>
            }
          />

          {/* Login and Register Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard without Navbar */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
