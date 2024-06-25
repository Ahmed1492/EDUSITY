import React from "react";
import "./Offers.scss";
import off1 from "../../assets/program-1.png";
import off2 from "../../assets/program-2.png";
import off3 from "../../assets/program-3.png";
export const Offers = () => {
  const AllCards = [off1, off2, off3];
  return (
    <div className="offers">
      {/* <h2>What We Offer</h2> */}
      <div className="allCards container">
        {AllCards.map((card, index) => (
          <div key={index} className="card ">
            <div className="caption">icone</div>
            <img src={card} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
