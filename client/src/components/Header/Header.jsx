import React from "react";
import "./Header.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="header">
      <h1 className="searchTitle">How can we help?</h1>
      <div className="searchContainer">
        <input
          type="text"
          className="searchInput"
          placeholder="Search"
          onChange={handleInputChange}
        />
        <FaArrowRightLong className="searchIcon" />
      </div>
    </div>
  );
};

export default Header;
