import React from "react";

// import logo from "../../img/logoFinal.png"
// import logo from "../../img/logoSuperFinal.png"
import logo from "../../img/navLogoFinal.png";
import onCampusLogo from "../../img/onCampusLogo.png";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="dFlexSB">
        <div className="navLeft">
          <Link to="/">
            <img src={logo} alt="" />
            <img src={onCampusLogo} alt="" />
          </Link>
        </div>
        <div className="navRight">
          <ul>
            <Link to="/">
              <li>
                About Us &nbsp; &nbsp;<span className="colorPink"> |</span>
              </li>
            </Link>
            <Link to="/register">
              <li>
                Register &nbsp; &nbsp;<span className="colorPink"> |</span>
              </li>
            </Link>
            <Link to="/resources">
              <li>
                Resources &nbsp; &nbsp;<span className="colorPink"> |</span>
              </li>
            </Link>
            <Link to="/">
              <li>
                Upcoming Events &nbsp; &nbsp;
                <span className="colorPink"> |</span>
              </li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
