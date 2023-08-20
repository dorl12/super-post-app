import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import { LinearSearchMagnifer } from "../../icons/LinearSearchMagnifer";

export const SearchBar = ({
  className,
  divClassName,
  onChange, // Add the onChange prop for handling search input changes
}) => {
  return (
    <div className={`search-bar ${className}`}>
      <div className={`input-wrapper ${divClassName}`}>
        <input
          type="text"
          className="search-input"
          placeholder="Search by location..."
          onChange={onChange} // Attach the onChange event to the input element
        />
      </div>
      <div className="iconex-light-search">
        <div className="search">
          <LinearSearchMagnifer className="linear-search" color="#4C6FFF" />
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  line: PropTypes.string,
};

