import React from "react";
import "./Campus.scss";
import Pic1 from "../../assets/gallery-1.png";
import Pic2 from "../../assets/gallery-2.png";
import Pic3 from "../../assets/gallery-3.png";
import Pic4 from "../../assets/gallery-4.png";
export const Campus = () => {
  return (
    <div className="gallery container">
      <div className="content">
        <h4>Gallery</h4>
        <h1>Campus Photo</h1>
      </div>
      <div className="allCards">
        <div className="card">
          <img src={Pic1} alt="Pic1" />
        </div>
        <div className="card">
          <img src={Pic2} alt="Pic1" />
        </div>
        <div className="card">
          <img src={Pic3} alt="Pic1" />
        </div>
        <div className="card">
          <img src={Pic4} alt="Pic1" />
        </div>
      </div>
      <div className="myBtn">
        <button>Show More Here</button>
      </div>
    </div>
  );
};
