import { NavLink } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>

      <NavLink to="/saved" className="nav-link">
        Saved Jobs
      </NavLink>

      <NavLink to="/salaryinfo" className="nav-link">
        Salary Information
      </NavLink>
    </nav>
  );
}

export default NavigationBar;
