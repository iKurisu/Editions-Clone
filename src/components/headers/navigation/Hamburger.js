import React from "react";
import PropTypes from "prop-types";

const Hamburger = ({ isActive, show, click }) => (
  <div
    className={`hamburger button top-left ${isActive ? "active" : "inactive"}`}
    onClick={click}
    style={{ opacity: show ? 1 : 0 }}
  >
    <div className="row" />
    <div className="row" />
  </div>
);

Hamburger.propTypes = {
  isActive: PropTypes.bool.isRequired,
  show: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired
}

export default Hamburger;
