import React from 'react';

const Hamburger = ({ isActive, click }) => (
  <div className={`hamburger button top-left ${isActive ? 'active' : 'inactive'}`} onClick={click}>
    <div className="row" />
    <div className="row" />
  </div>
);

export default Hamburger;