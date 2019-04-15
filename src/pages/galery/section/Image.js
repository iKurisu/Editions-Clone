import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./Image.scss";

const Image = ({ src, orientation, atIntro }) => {
  const [scale, setScale] = useState(atIntro ? 1.06 : 1.03);
  const [opacity, setOpacity] = useState(atIntro ? 0 : 1);

  useEffect(() => {
    setScale(atIntro ? 1.03 : 1);
  })

  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <div
      className={`image-wrapper ${orientation}`}
      style={{ transform: `scale(${scale})`, opacity: opacity }}
    >
      <img src={src} />
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  atIntro: PropTypes.bool
}

export default Image;