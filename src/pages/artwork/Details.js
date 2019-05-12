import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Details.scss';

const Details = ({ title, price, src, orientation }) => {
  const [heroOffset, setHeroOffset] = useState(5);
  const [containerOffset, setContainerOffset] = useState(22);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setHeroOffset(0);
    setContainerOffset(0);
    setOpacity(1);
  }, []);
  
  return (
    <div 
      className={`artwork-details ${orientation}-hero`}
      style={{ transform: `translateY(${heroOffset}vw)`}}
    >
      <div 
        className="details-container" 
        style={{ transform: `translateY(${containerOffset}px)`, opacity }}
      >
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
}

Details.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired
}

export default Details;