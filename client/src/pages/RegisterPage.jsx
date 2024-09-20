import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AuthPage.css"; // Assuming you have shared CSS for auth pages
import axios from "axios";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    // Password validation: at least one uppercase letter and at least 8 characters long
    // const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
    // if (!passwordRegex.test(password)) {
    //   setError(
    //     "Password must be at least 8 characters long and contain at least one uppercase letter."
    //   );
    //   return;
    // }
    const userData = {
      userName: username,
      email,
      password,
      confirmPassword,
    };
    try {
      const response = await axios.post("/api/v1/user/register", userData);
      toast.success(response.data.message);
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  // Handle registration logic here
  // Clear any previous error messages
  const handleGoogleSuccess = async (token) => {
    try {
      const response = await axios.post("/api/v1/user/register/google", {
        token,
      });
      toast(response.data.message);
      navigate("/login");
    } catch (error) {
      toast(error.response.data.message);
    }
  };

  return (
    <div className="auth-page container-fluid d-flex align-items-center justify-content-center">
      <div className="auth-container card shadow-lg p-4">
        <h1 className="text-center mb-4">Register</h1>
        <form onSubmit={handleRegister}>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <div className="form-group mb-3 position-relative">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3 position-relative">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="position-absolute eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
            </span>
          </div>
          <div className="form-group mb-3 position-relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="form-control"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              className="position-absolute eye-icon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <i
                className={`fa ${
                  showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                }`}
              />
            </span>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </form>
        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
