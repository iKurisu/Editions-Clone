import React from 'react';
import './styles.scss';

const Details = ({ type, year, price}) => (
  <div className="Details">
    <span>{type}</span>
    <span className="Year">{year}</span>
    <span>{`From $${price}.00`}</span>
  </div>
)

export default Details;