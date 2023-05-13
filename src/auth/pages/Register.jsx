import { useState } from 'react';
import { useAuth } from '../../helpers/auth';
import './LayoutStyle.css'
export const Register = () => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    auth.register(email, password);
    if (auth.errorMsg) {
      setEmail("");
      setPassword("");
    }
  }


  return (
    <div className="register-page">
    <div className="layout-container">
      <div className="layout-card">
        <h2 className="layout-title">Sign Up</h2>
        <form onSubmit={handleRegister}>
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
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
