import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import FirstLinkedImage from "./image/FirstLinkedImage";
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

const FirstImage = ({ src, title, orientation, atIntro, node }) => {
  const [scale, setScale] = useState(atIntro ? preIntroScale : introScale);
  const [opacity, setOpacity] = useState(atIntro ? 0 : 1);
  const canvas = useRef(null);

  useEffect(() => {
    setScale(atIntro ? introScale : 1);
  }, [atIntro]);

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
        ref={node}
      >
        { atIntro && <div className="canvas" ref={canvas}></div> }
        <FirstLinkedImage src={src} title={title} />
      </div>
    </div>
  );
};

FirstImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  node: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  orientation: PropTypes.string.isRequired,
  atIntro: PropTypes.bool.isRequired,
};

const mapState = ({ intro }) => ({
  atIntro: intro.toggled,
})

export default connect(mapState)(FirstImage);
