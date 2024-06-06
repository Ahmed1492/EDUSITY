import React from "react";
import "./Navbar.scss";
import NavBarLogo from "../../assets/logo.png";
export const Navbar = () => {
  return (
    <div className="">
      <div className="navbar container">
        <div className="logo">
          <img src={NavBarLogo} alt="Logo" />
        </div>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li>
              <button className="btn">Contact Us</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
