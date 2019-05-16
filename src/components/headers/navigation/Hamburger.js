import React from "react";
import PropTypes from "prop-types";
import './Hamburger.scss';

const Hamburger = ({ isActive, artworkToggled, click }) => (
  <div
    className={`hamburger button top-left ${isActive && !artworkToggled ? "active" : "inactive"}`}
    onClick={click}
  >
    <div className="row" />
    <div className="row" />
  </div>
);

Hamburger.propTypes = {
  isActive: PropTypes.bool.isRequired,
  artworkToggled: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired
}

export default Hamburger;
