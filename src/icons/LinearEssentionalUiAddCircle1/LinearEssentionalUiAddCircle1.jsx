/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LinearEssentionalUiAddCircle1 = ({ color = "#1C274C", className }) => {
  return (
    <svg
      className={`linear-essentional-ui-add-circle-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
      <path
        className="path"
        d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

LinearEssentionalUiAddCircle1.propTypes = {
  color: PropTypes.string,
};
