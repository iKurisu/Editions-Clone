import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withMovement from 'components/withMovement';
import fontSize from 'utils/fontSize';
import mediaQuery from 'utils/mediaQuery';
import { introActions } from 'modules/intro';
import "./Intro.scss";

const textSize = mediaQuery({
  "(max-width: 768px)": fontSize("27vw", "31vh"),
  "(min-width: 768px)": fontSize("24vw", "30.5vh"),
  "(min-width: 1000px)": fontSize("18.4vw", "30.5vh"),
  "(min-width: 1366px)": fontSize("17.3vw", "30.8vh"),
  "(min-width: 1920px)": fontSize("15.3vw", "30.5vh")
});

const Intro = ({ toggled, translate, toggle, displace, mouseMove }) => {
  const [display, setDisplay] = useState('block');
  const [hlStyle, setHlStyle] = useState({ transform: 'translateY(10px)', opacity: 0 });
  const [detailsStyle, setDetailsStyle] = useState({ opacity: 0 });

  useEffect(() => {
    const { opacity } = hlStyle;
    
    setHlStyle({ 
      transform: `translateY(${opacity === 0 ? '0' : '-10px'})`, 
      opacity: opacity === 0 ? 1 : 0 
    });
    setDetailsStyle({
      opacity: opacity === 0 ? 1 : 0 
    });
  }, [toggled]);

  useEffect(() => {
    !toggled && setTimeout(() => setDisplay('none'), 900)
  });

  const handleMouseMove = e => {
    mouseMove(e);
    displace(translate.x, translate.y);
  }
  
  return (
    <div 
      className="intro-container" 
      style={{ display: display }}
      onClick={toggle}
      onMouseMove={handleMouseMove}
    >
      <div className="top text-center intro" style={detailsStyle}>
        <p>Selected Artwork</p>
      </div>
      <div className="vertical-container">
        <div className="headline-container">
          <div className="headline" style={hlStyle}>
            <span style={{ fontSize: textSize }}>Editions</span>
          </div>
        </div>
      </div>
      <div className="bottom text-center intro" style={detailsStyle}>
        <p>2016 – Present</p>
      </div>
    </div>
  )
}

Intro.propTypes = {
  toggled: PropTypes.bool.isRequired,
  translate: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
  displace: PropTypes.func.isRequired,
  mouseMove: PropTypes.func.isRequired
}

const mapState = ({ intro }) => ({ 
  toggled: intro.toggled, 
  displacement: intro.displacement 
});
const actionCreators = {
  toggle: introActions.toggle,
  displace: introActions.displace
}

export default connect(mapState, actionCreators)(withMovement(Intro));