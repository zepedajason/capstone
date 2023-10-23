import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/saved">Saved Jobs</NavLink>

      <NavLink to="/salaryinfo">Salary Information</NavLink>
    </nav>
  );
}

export default NavigationBar;
