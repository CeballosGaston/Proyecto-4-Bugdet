import { Link } from "react-router-dom";
import "./navBar.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Budget App</div>
      <div className="navbar-links">
        <Link to="/history">History</Link>
        <Link to="/services">Services</Link>
      </div>
    </nav>
  );
};
