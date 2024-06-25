import React from "react";
import "./TitleOfComponent.scss";
export const TitleOfComponent = ({ name, desc }) => {
  return (
    <div className="titleOfComponent">
      <p>{name}</p>
      <h2>{desc}</h2>
    </div>
  );
};
