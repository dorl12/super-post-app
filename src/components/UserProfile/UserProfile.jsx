/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const UserProfile = ({ className }) => {
  return (
    <div className={`user-profile ${className}`}>
      <img
        className="avatar-rounded-image"
        alt="Avatar rounded image"
        src="https://generation-sessions.s3.amazonaws.com/bf8fb1a460406ac60f67d0ee21076541/img/avatar-rounded-image-1@2x.png"
      />
      <div className="text-wrapper">Dor Levy</div>
    </div>
  );
};
