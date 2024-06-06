import React from "react";
import "./Offers.scss";
import off1 from "../../assets/program-1.png";
import off2 from "../../assets/program-2.png";
import off3 from "../../assets/program-3.png";
export const Offers = () => {
  return (
    <div className="offers">
      <h2>What We Offer</h2>
      <div className="allCards container">
        <div className="card">
          <img src={off1} alt="" />
        </div>
        <div className="card">
          <img src={off2} alt="" />
        </div>
        <div className="card">
          <img src={off3} alt="" />
        </div>
      </div>
    </div>
  );
};
