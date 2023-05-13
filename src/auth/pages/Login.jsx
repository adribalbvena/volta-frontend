import React, { useState } from "react";
import { useAuth } from "../../helpers/auth";
import "./LayoutStyle.css";

export const Login = () => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    auth.login(email, password);
    if (auth.errorMsg) {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login-page">
      <div className="layout-container">
        <div className="layout-card">
          <h2 className="layout-title">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-container">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {auth.errorMsg && (
              <div className="error-div">Error: {auth.errorMsg} !!!</div>
            )}
            <div className="submit-btn-container">
              <button className="submit-btn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
