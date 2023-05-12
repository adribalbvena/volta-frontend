import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { MdAirplanemodeActive } from "react-icons/md";
import { useAuth } from "../../helpers/auth";

export const Navbar = () => {
  const auth = useAuth();
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
            <Link to="/logout" className="login">
              <li>Logout</li>
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className="signup">
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
