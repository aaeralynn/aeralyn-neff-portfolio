import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Your Name</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              About Me
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/resume" className="nav-link">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
