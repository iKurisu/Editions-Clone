import React from 'react';
import PropTypes from 'prop-types';
import "./Details.scss";

const Details = ({ type, year, price }) => (
  <div className="details">
    <span>{type}</span>
    <span className="details-year">{year}</span>
    <span>{`From $${price}.00`}</span>
  </div>
)

Details.propTypes = {
  type: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
}

export default Details;