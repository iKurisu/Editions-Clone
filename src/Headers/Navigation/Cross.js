import React from 'react';

const Cross = ({ isActive, click }) => (
  <div 
    className={`cross button top-left ${isActive ? 'active' : 'inactive'}`}
    onClick={click}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.335 18.335">
      <g transform="translate(-487.075 -425.575)">
        <line y2="23.929" transform="translate(487.782 426.283) rotate(-45)" />
        <line y2="23.929" transform="translate(504.703 426.282) rotate(45)" />
      </g>
    </svg>
  </div>
)

export default Cross;