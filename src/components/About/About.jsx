import React from "react";
import "./About.scss";
import aboutImage from "../../assets/about.png";
import playIcone from "../../assets/play-icon.png";
export const About = () => {
  return (
    <div className="about container">
      <div className="left">
        <div className="image">
          <img className="aboutImage" src={aboutImage} alt="aboutImage" />
          <img className="playIcone" src={playIcone} alt="playIcone" />
        </div>
      </div>
      <div className="right">
        <div className="content">
          <h4>ABOUT UNIVERSITY</h4>
          <h1>
            Nurturing Tomorrow’s <br /> Leaders
          </h1>
          <p>
            Embark on a transformative educational journey with our university’s
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of Education.
          </p>

          <p>
            With a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities.
          </p>

          <p>
            Whether you aspire to become a teacher, administrator, counselor or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your potential in shaping
            the future of education.
          </p>
        </div>
      </div>
    </div>
  );
};
