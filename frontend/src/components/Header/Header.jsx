import React from "react";
import "./Header.scss";
import HWLogo from "../../styles/assets/HWLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMap } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="top">
        <i className="fa-solid fa-map fa-lg"></i>
        <img src={HWLogo} alt="Health Weekly" />
        <i className="fa-solid fa-bag-shopping fa-lg"></i>
      </div>

      <div className="search">
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <input
          type="text"
          placeholder="Search for a dish."
          className="your-input-class"
        />
      </div>
    </div>
  );
};

export default Header;
