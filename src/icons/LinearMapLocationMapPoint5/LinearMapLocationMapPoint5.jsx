/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LinearMapLocationMapPoint5 = ({ color = "#1C274C", className }) => {
  return (
    <svg
      className={`linear-map-location-map-point-5 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C6.55332 19.8124 4 14.6055 4 10.1433Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <circle className="circle" cx="12" cy="10" r="3" stroke={color} strokeWidth="1.5" />
    </svg>
  );
};

LinearMapLocationMapPoint5.propTypes = {
  color: PropTypes.string,
};
