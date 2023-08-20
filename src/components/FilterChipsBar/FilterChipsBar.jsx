/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AllPostsChip } from "../AllPostsChip";
import { AppliancesChip } from "../AppliancesChip";
import { ElectronicsChip } from "../ElectronicsChip";
import { RentalsChip } from "../RentalsChip";
import { VehiclesChip } from "../VehiclesChip";
import "./style.css";

export const FilterChipsBar = ({ allPostsChipProperty1 = "default" }) => {
  return (
    <div className="filter-chips-bar">
      <AllPostsChip className="all-posts-chip-instance" property1={allPostsChipProperty1} />
      <VehiclesChip className="vehicles-chip-instance" property1="default" />
      <RentalsChip className="rentals-chip-instance" property1="default" />
      <ElectronicsChip className="electronics-chip-instance" property1="default" />
      <AppliancesChip className="appliances-chip-instance" property1="default" />
    </div>
  );
};

FilterChipsBar.propTypes = {
  allPostsChipProperty1: PropTypes.string,
};
