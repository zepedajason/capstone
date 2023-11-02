import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <NavLink to="/contact" className="nav-link">
        <strong>© 2023 JobFind</strong>
      </NavLink>
    </div>
  );
}

export default Footer;
