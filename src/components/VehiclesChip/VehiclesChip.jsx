/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const VehiclesChip = ({ property1, className }) => {
  return (
    <div className={`vehicles-chip property-1-0-${property1} ${className}`}>
      <div className="text-wrapper-11">Vehicles</div>
    </div>
  );
};

VehiclesChip.propTypes = {
  property1: PropTypes.oneOf(["hover", "default"]),
};
