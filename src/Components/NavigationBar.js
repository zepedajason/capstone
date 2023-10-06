import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/saved">Saved Jobs</NavLink>
    </nav>
  );
}

export default NavigationBar;
