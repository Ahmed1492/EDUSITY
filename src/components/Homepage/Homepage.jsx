import React from "react";
import "./Homepage.scss";
import LeftArrow from "../../assets/dark-arrow.png";
export const Homepage = () => {
  return (
    <div className="homePage">
      <div>
        <h1>
          We Ensure Better Education <br />
          For Better World
        </h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education.
        </p>
        <button className="btn mt">
          Explore More <img src={LeftArrow} alt="LeftArrow" />
        </button>
      </div>
    </div>
  );
};
