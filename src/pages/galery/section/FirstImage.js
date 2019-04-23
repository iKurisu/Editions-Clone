import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import mediaQuery from 'utils/mediaQuery';
import "./Image.scss";

const preIntroScale = mediaQuery({
  "(max-width: 768px)": 0.94
});

const introScale = mediaQuery({
  "(max-width: 768px)": 0.89
});

const FirstImage = ({ src, orientation, atIntro }) => {
  const [scale, setScale] = useState(atIntro ? preIntroScale : introScale);
  const [opacity, setOpacity] = useState(atIntro ? 0 : 1);

  useEffect(() => {
    setScale(atIntro ? introScale : 1);
  });

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
};

FirstImage.propTypes = {
  src: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  atIntro: PropTypes.bool.isRequired
};

export default FirstImage;
