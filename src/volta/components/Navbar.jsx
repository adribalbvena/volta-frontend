import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { MdAirplanemodeActive } from "react-icons/md";
import { useAuth } from "../../helpers/auth";
import { useEffect } from "react";

export const Navbar = () => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout()
  }

  return (
    <nav className="nav-items">
      <Link to="/" className="logo">
        Volta
      </Link>

      <ul>
        {auth.userId ? (
          <>
            <Link to="/mytrips" className="mytrips">
              <li>
                <MdAirplanemodeActive className="i-flight" /> My Trips{" "}
              </li>
            </Link>
            <Link to="/" className="login" onClick={handleLogout}>
              <li>Logout</li>
            </Link>
          </>
        ) : (
          <>
            <Link to="/register" className="signup">
              <li>Sign Up</li>
            </Link>
            <Link to="/login" className="login">
              <li>Login</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};
