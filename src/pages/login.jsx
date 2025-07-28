import { useNavigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = (e) => {
    e.preventDefault();
    // Simple dummy validation (replace with real authentication)
    if (email === "admin@example.com" && password === "admin123") {
      navigate("/dashboard"); // Redirects to the dashboard route
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label className="input-label">
              Email <span className="required-asterisk">*</span>
            </label>
            <input
              type="email"
              className="form-input"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="input-label">
              Password <span className="required-asterisk">*</span>
            </label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
