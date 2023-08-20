/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { FilterButtons } from "../FilterButtons";
import { MainFilterOptions } from "../MainFilterOptions";
import { SearchBar } from "../SearchBar";
import "./style.css";

export const FilterOptions = ({
  className,
  searchBarLine,
  onLocationFilter, // Add the onLocationFilter prop
}) => {
  const handleLocationChange = (event) => {
    const location = event.target.value;
    onLocationFilter(location); // Call the location filter function with the input value
  };
  return (
    <div className={`filter-options ${className}`}>
      <SearchBar
        className="search-bar-instance"
        divClassName="design-component-instance-node"
        ellipseClassName="search-bar-3"
        line={searchBarLine}
        lineClassName="search-bar-4"
        overlapGroupClassName="search-bar-2"
        onChange={handleLocationChange} // Pass the location change handler to SearchBar
      />
      <MainFilterOptions className="main-filter-options-instance" />
      <FilterButtons className="filter-buttons-instance" />
    </div>
  );
};

FilterOptions.propTypes = {
  searchBarLine: PropTypes.string,
};
