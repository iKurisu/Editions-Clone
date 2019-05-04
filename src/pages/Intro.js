import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fontSize from 'utils/fontSize';
import mediaQuery from 'utils/mediaQuery';
import getDisplacement from 'utils/getDisplacement';
import { introActions } from 'modules/intro';
import "./Intro.scss";

const textSize = mediaQuery({
  "(max-width: 768px)": fontSize("23vw", "26vh"),
  "(min-width: 768px)": fontSize("20.5vw", "26vh"),
  "(min-width: 1000px)": fontSize("15.5vw", "26vh"),
  "(min-width: 1366px)": fontSize("15vw", "26vh"),
  "(min-width: 1920px)": fontSize("13vw", "26vh")
});

const Intro = ({ toggled, displacement: { x, y }, toggle, displaceImage, displaceAll }) => {
  const [display, setDisplay] = useState('block');
  const [offset, setOffset] = useState(20);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {    
    setOffset(opacity === 0 ? 0 : -20);
    setOpacity(opacity === 0 ? 1 : 0);

    return () => displaceImage({x: 0, y: 0});
  }, [toggled]);

  useEffect(() => {
    !toggled && setTimeout(() => setDisplay('none'), 900)
  });

  const handleMouseMove = e => displaceAll(getDisplacement(e, 64));
  
  return (
    <div 
      className="intro-container" 
      style={{ display }}
      onClick={toggle}
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
            <p style={{ 
              transform: `translate(${x}px, ${y}px)`, 
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
  displacement: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
  displaceImage: PropTypes.func.isRequired,
  displaceAll: PropTypes.func.isRequired
};

const mapState = ({ intro }) => ({ 
  toggled: intro.toggled, 
  displacement: intro.displacement.text
});
const actionCreators = {
  toggle: introActions.toggle,
  displaceImage: introActions.displaceImage,
  displaceAll: introActions.displaceAll
}

export default connect(mapState, actionCreators)(Intro);