import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fontSize from 'utils/fontSize';
import getDisplacement from 'utils/getDisplacement';
import mediaQuery from 'utils/mediaQuery';
import { introActions, introOperations } from 'modules/intro';
import "./Intro.scss";

const textSize = mediaQuery({
  "(max-width: 768px)": fontSize("23vw", "26vh"),
  "(min-width: 768px)": fontSize("20.5vw", "26vh"),
  "(min-width: 1000px)": fontSize("15.5vw", "26vh"),
  "(min-width: 1366px)": fontSize("15vw", "26vh"),
  "(min-width: 1920px)": fontSize("13vw", "26vh")
});

const Intro = ({ toggled, imageNode, fadeIntro }) => {
  const [offset, setOffset] = useState(20);
  const [opacity, setOpacity] = useState(0);
  const displacement = useRef({ x: 0, y: 0 });
  const text = useRef(null);
  const animation = useRef(null);

  const updateText = () => {
    const { x, y } = displacement.current;

    if (!text.current || !imageNode.current) return;

    text.current.style.transform = `translate(${x}px, ${y}px)`;
    imageNode.current.style.transform = `translate(${x / 1.5}px, ${y / 1.5}px)`;
    animation.current = requestAnimationFrame(updateText);
  }

  useEffect(() => {    
    setOffset(opacity === 0 ? 0 : -20);
    setOpacity(opacity === 0 ? 1 : 0);

    return () => {
      cancelAnimationFrame(animation.current);
      imageNode.current.style.transform = `translate(0, 0)`;
    }
  }, [toggled]);

  useEffect(() => {
    updateText();
  }, []);

  const handleMouseMove = e => displacement.current = getDisplacement(e, 64);

  return (
    <div 
      className="intro-container" 
      onClick={fadeIntro}
      onMouseMove={handleMouseMove}
    >
      <div className="top text-center intro" style={{ opacity }}>
        <p>Selected Artwork</p>
      </div>
      <div className="vertical-container">
        <div className="headline-container">
          <div 
            className="headline" 
            style={{ transform: `translateY(${offset}px)`, opacity }}
          >
            <p ref={text} style={{ 
              fontSize: textSize 
            }}>Editions</p>
          </div>
        </div>
      </div>
      <div className="bottom text-center intro" style={{ opacity }}>
        <p>2016 – Present</p>
      </div>
    </div>
  )
}

Intro.propTypes = {
  toggled: PropTypes.bool.isRequired,
  imageNode: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  fadeIntro: PropTypes.func.isRequired,
};

const mapState = ({ intro }) => ({ 
  toggled: intro.toggled, 
  displacement: intro.displacement.text
});

const actionCreators = {
  fadeIntro: introOperations.fadeIntro,
  displaceAll: introActions.displaceAll,
  displaceImage: introActions.displaceImage
}

export default connect(mapState, actionCreators)(Intro);