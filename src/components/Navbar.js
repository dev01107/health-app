import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          🏥 HealthCare
        </Link>
        <Link to="/profile" className="profile-link">
          <div className="profile-icon">👤</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
