import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import LinkedImage from "./image/LinkedImage";
import mediaQuery from 'utils/mediaQuery';
import load from './canvas';
import "./Image.scss";

const preIntroScale = mediaQuery({
  "(max-width: 768px)": 0.94,
  "(min-width: 768px)": 1.06
});

const introScale = mediaQuery({
  "(max-width: 768px)": 0.89,
  "(min-width: 768px)": 1.03
});

const FirstImage = ({ src, title, orientation, atIntro, displacement: {x, y} }) => {
  const [scale, setScale] = useState(atIntro ? preIntroScale : introScale);
  const [opacity, setOpacity] = useState(atIntro ? 0 : 1);
  const canvas = useRef(null);

  useEffect(() => {
    setScale(atIntro ? introScale : 1);
  });

  useEffect(() => {
    setOpacity(1);
    if (atIntro) load(canvas, src);    
  }, []);

  return (
    <div
      className={`image-wrapper ${orientation}`}
      style={{ transform: `scale(${scale})`, opacity }}
    >
      <div 
        className="hero" 
        style={{ transform: `translate(${x / 1.5}px, ${y / 1.5}px)` }}
      >
        { atIntro && <div className="canvas" ref={canvas}></div> }
        <LinkedImage src={src} title={title} />
      </div>
    </div>
  );
};

FirstImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  atIntro: PropTypes.bool.isRequired,
  displacement: PropTypes.object.isRequired
};

const mapState = ({ intro }) => ({
  atIntro: intro.toggled,
  displacement: intro.displacement.image
})

export default connect(mapState)(FirstImage);
