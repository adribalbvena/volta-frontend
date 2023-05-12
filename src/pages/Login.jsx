import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../helpers/auth";

export const Login = () => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    auth.login(email, password);
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {auth.errorMsg && <div>{auth.errorMsg}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};
