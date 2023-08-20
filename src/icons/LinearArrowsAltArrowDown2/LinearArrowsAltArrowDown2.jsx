/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LinearArrowsAltArrowDown2 = ({ color = "#4C6FFF", className }) => {
  return (
    <svg
      className={`linear-arrows-alt-arrow-down-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M19 9L12 15L5 9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

LinearArrowsAltArrowDown2.propTypes = {
  color: PropTypes.string,
};
