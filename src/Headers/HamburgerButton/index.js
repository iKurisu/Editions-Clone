import React from 'react';
import "./styles.scss";

const HamburgerButton = ({ isActive, click }) => (
  <div className={`HamburgerButton top-left ${isActive ? 'active' : 'inactive'}`} onClick={click}>
    <div className="row" />
    <div className="row" />
  </div>
);

export default HamburgerButton;