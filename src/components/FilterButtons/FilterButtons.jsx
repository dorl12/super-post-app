/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const FilterButtons = ({ className }) => {
  return (
    <div className={`filter-buttons ${className}`}>
      <div className="car-button">
        <img
          className="img"
          alt="Car"
          src="https://generation-sessions.s3.amazonaws.com/22cd7392761006b09fe9c0427e90574f/img/car.png"
        />
      </div>
    </div>
  );
};
