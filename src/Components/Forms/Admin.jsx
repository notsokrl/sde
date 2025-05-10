import React, { useState, useEffect } from "react";
import logo from '../Assets/logo.png';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router-dom';
import './Admin.css';

function Admin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Registered credentials (simulated for this example)
  const registeredData = {
    username: "admin123",
    password: "password123"
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered username and password match the registered values
    if (formData.username === registeredData.username && formData.password === registeredData.password) {
      alert("Login Successful!");
      // Redirect or update UI accordingly
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  useEffect(() => {
    const handleScreenClick = (event) => {
      // If there's an error showing, clear it
      if (error) {
        setError("");
      }
    };
  
    // Add event listener
    document.addEventListener("click", handleScreenClick);
  
    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("click", handleScreenClick);
    };
  }, [error]);

  const handleForgotPassword = () => {
    alert("Forgot Password functionality is not implemented yet.");
    // You can navigate to a password recovery page or show a modal
  };

  return (
    <main className="admin-page">
      {/* Left section - Welcome */}
      <section className="admin-left">
        <h1 className="admin-heading">Hello Admin!</h1>
        <button className="admin-back-btn" onClick={() => window.history.back()}>Back</button>
      </section>

      {/* Right section - Login form */}
      <section className="admin-right">
        <Link to="/home">
          <img src={logo} alt="Logo" className="admin-logo" />
        </Link>
        <h2 className="admin-title">Admin</h2>

        <form onSubmit={handleSubmit}>
          <div className="admin-formFields">
            {/* Username input */}
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="admin-username"
              aria-label="Username"
            />

            {/* Password input with toggleable visibility */}
            <div className="admin-pass">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="admin-passwordInput"
                aria-label="Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="admin-eyeButton"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeSlashIcon className="admin-eyeIcon" />
                ) : (
                  <EyeIcon className="admin-eyeIcon" />
                )}
              </button>
            </div>
            
            {/* Error Message */}
            {error && (
              <p className="admin-errorMessage">
                {error}
              </p>
            )}

            {/* Forgot Password link */}
            <div className="admin-forgotPasswordContainer">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="admin-forgotPasswordLink">
                Forgot password?
              </button>
            </div>
          </div>

          <button type="submit" className="admin-login-btn">
            Login
          </button>
        </form>
      </section>
    </main>
  );
}

export default Admin;
