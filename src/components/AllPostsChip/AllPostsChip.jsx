/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const AllPostsChip = ({ property1, className }) => {
  return (
    <div className={`all-posts-chip ${property1} ${className}`}>
      <div className="text-wrapper-10">All Posts</div>
    </div>
  );
};

AllPostsChip.propTypes = {
  property1: PropTypes.oneOf(["hover", "default"]),
};
