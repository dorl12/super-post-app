import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";
import { LinearSearchMagnifer } from "../../icons/LinearSearchMagnifer";

export const SearchBar = ({
  className,
  divClassName,
  onLocationFilter,
}) => {
  
  const [searchValue, setSearchValue] = useState("");

  const handleLocationChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onLocationFilter(searchValue);
    }
  };

  return (
    <div className={`search-bar ${className}`}>
      <div className={`input-wrapper ${divClassName}`}>
        <input
          type="text"
          className="search-input"
          placeholder="Search by location..."
          onChange={handleLocationChange}
          onKeyPress={handleKeyPress}
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