import React from "react";
import { Link, useLocation } from "react-router-dom";


function Navbar() {

  const location = useLocation();

  return (
    <ul className="nav nav-tabs">


 {/* bootstrap */}
        {/* Home link */}
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>

     {/* Contact link */}
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
        
        {/* Portfolio link */}
        <li className="nav-item">
        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
          Portfolio
        </Link>
      </li>

      {/* </li> */}
      {/* <li className="nav-item">
        <Link
          to="/contact/learn"
          className={location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
        >
          Learn
        </Link> */}

    </ul>
  );
}

export default Navbar;
