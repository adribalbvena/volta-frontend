import { Link } from 'react-router-dom'
import './NavbarStyles.css'
import {MdAirplanemodeActive} from 'react-icons/md'

export const Navbar = () => {
  return (
    <nav className="nav-items">
      <Link to="/" className="logo">
          Volta
      </Link>
      
      <ul>
        <Link to="/mytrips" className="mytrips">
          <li><MdAirplanemodeActive className='i-flight'/> My Trips </li>
        </Link>
        <Link to="/" className="signup">
          <li>Sign Up</li>
        </Link>
        <Link to="/" className="login">
          <li>Login</li>
        </Link>
      </ul>

    </nav>
  )
}
