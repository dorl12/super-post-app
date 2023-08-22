import PropTypes from "prop-types";
import React from "react";
import { FilterButtons } from "../FilterButtons";
import { MainFilterOptions } from "../MainFilterOptions";
import { SearchBar } from "../SearchBar";
import "./style.css";

export const FilterOptions = ({
  className,
  searchBarLine,
  onLocationFilter,
}) => {

  return (
    <div className={`filter-options ${className}`}>
      <SearchBar
        className="search-bar-instance"
        divClassName="design-component-instance-node"
        ellipseClassName="search-bar-3"
        line={searchBarLine}
        lineClassName="search-bar-4"
        overlapGroupClassName="search-bar-2"
        onLocationFilter={onLocationFilter}
      />
      <MainFilterOptions className="main-filter-options-instance" />
      <FilterButtons className="filter-buttons-instance" />
    </div>
  );
};

FilterOptions.propTypes = {
  searchBarLine: PropTypes.string,
};