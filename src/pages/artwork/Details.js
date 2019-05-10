import React from 'react';
import PropTypes from 'prop-types';
import './Details.scss';

const Details = ({ title, price, src, orientation }) => (
  <div className={`artwork-details ${orientation}-hero`}>
    <div className="details-container">
      <h1 className="details-title">{title}</h1>
      <p>
        From <span>${price}.00</span>
        <span className="dash">—</span>
        <a>Buy Now</a>
      </p>
      <div className="details-artwork">
        <img src={src} />
      </div>
    </div>
  </div>
);

Details.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired
}

export default Details;