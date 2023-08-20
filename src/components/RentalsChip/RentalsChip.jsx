/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const RentalsChip = ({ property1, className }) => {
  return (
    <div className={`rentals-chip property-1-2-${property1} ${className}`}>
      <div className="text-wrapper-12">Rentals</div>
    </div>
  );
};

RentalsChip.propTypes = {
  property1: PropTypes.oneOf(["hover", "default"]),
};
