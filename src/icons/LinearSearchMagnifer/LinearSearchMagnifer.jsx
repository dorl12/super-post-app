/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const LinearSearchMagnifer = ({ className }) => {
  return (
    <svg
      className={`linear-search-magnifer ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="11.5" cy="11.5" r="9.5" stroke="#a2a2a2" strokeWidth="1.5" />
      <path className="path" d="M18.5 18.5L22 22" stroke="#a2a2a2" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
};
