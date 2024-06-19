import React, { useState } from "react";
import "./Testimonials.scss";
import backArrow from "../../assets/back-icon.png";
import nextArrow from "../../assets/next-icon.png";
import User1 from "../../assets/user-1.png";
import User2 from "../../assets/user-2.png";
import User3 from "../../assets/user-3.png";
import User4 from "../../assets/user-4.png";

export const Testimonials = () => {
  const [currentSlidePostain, setCurrentSlidePostain] = useState(0);

  const handleToBack = () => {
    if (currentSlidePostain == 0) {
      // setCurrentSlidePostain(-50);
    } else {
      setCurrentSlidePostain(currentSlidePostain + 25);
    }
  };
  const handleToNext = () => {
    if (currentSlidePostain != -50) {
      setCurrentSlidePostain(currentSlidePostain - 25);
    } else {
      setCurrentSlidePostain(0);
    }
    console.log(currentSlidePostain);
    console.log("handleToBack");
    console.log(currentSlidePostain);
    console.log("handleToNext");
  };
  return (
    <div className="testimonial container">
      <div className="heading">
        <h3>Testimonials</h3>
        <h2>What Student Says</h2>
      </div>
      <div className="slider">
        <img
          onClick={handleToBack}
          className="backArrow"
          src={backArrow}
          alt=""
        />
        <img
          onClick={handleToNext}
          className="nextArrow"
          src={nextArrow}
          alt=""
        />
        <ul style={{ transform: `translateX(${currentSlidePostain}%)` }}>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={User1} alt="" />
                <div>
                  <h3>Emilly Wiliam</h3>
                  <span>Edusity , USA</span>
                </div>
              </div>

              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={User4} alt="" />
                <div>
                  <h3>William Jakson</h3>
                  <span>Edusity , USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={User2} alt="" />
                <div>
                  <h3>Solivan Jack</h3>
                  <span>Edusity , USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={User3} alt="" />
                <div>
                  <h3>Lenardo DeCapro</h3>
                  <span>Edusity , USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
