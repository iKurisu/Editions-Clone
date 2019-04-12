import React from "react";

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

export default Hamburger;
