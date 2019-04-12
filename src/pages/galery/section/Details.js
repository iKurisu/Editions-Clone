import React from 'react';
import "./Details.scss";

const Details = ({ type, year, price }) => (
  <div className="details">
    <span>{type}</span>
    <span className="details-year">{year}</span>
    <span>{`From $${price}.00`}</span>
  </div>
)

export default Details;