import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { easeInOutQuint } from 'utils/easing';
import "./Details.scss";

const Details = ({ title, price, src, orientation, section }) => {
  const [heroOffset, setHeroOffset] = useState(5);
  const [containerOffset, setContainerOffset] = useState(22);
  const [opacity, setOpacity] = useState(0);

  const handleClick = () => {
    scrollDown({ start: 0, max: section.current.offsetTop, duration: 1700 });
  };
  
  const scrollDown = ({ start, max, duration }) => {
    let time = 0;

    const move = () => {
      time += 1000 / 60;
      const position = easeInOutQuint(time, start, max, duration);

      window.scrollTo(0, position);

      if (position < section.current.offsetTop) requestAnimationFrame(move);
    }

    move();
  }

  useEffect(() => {
    setHeroOffset(0);
    setContainerOffset(0);
    setOpacity(1);
  }, []);

  return (
    <div
      className={`artwork-details ${orientation}-hero`}
      style={{ transform: `translateY(${heroOffset}vw)` }}
    >
      <div
        className="details-container"
        style={{ transform: `translateY(${containerOffset}px)`, opacity }}
      >
        <h1 className="details-title">{title}</h1>
        <p>
          From <span>${price}.00</span>
          <span className="dash">—</span>
          <a onClick={handleClick}>Buy Now</a>
        </p>
        <div className="details-artwork">
          <img src={src} />
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  section: PropTypes.object
};

export default Details;
