import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import NavBarLogo from "../../assets/logo.png";
export const Navbar = () => {
  const [isUserSscroll, setIsUserScroll] = useState(false);
  

  useEffect(() => {
    window.onscroll = function () {
      console.log(isUserSscroll);
      if (window.scrollY > 80) {
        setIsUserScroll(true);
      } else {
        setIsUserScroll(false);
      }
    };
  },[]);
  return (
    <div className="">
      <div
        className={`navbar container ${
          isUserSscroll ? "blueColorNavbar" : "transparentNavber"
        }`}
      >
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
