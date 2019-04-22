import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./Intro.scss";

const Intro = ({ showGalery, atIntro }) => {
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
    })
  }, [atIntro])

  useEffect(() => {
    !atIntro && setTimeout(() => setDisplay('none'), 900)
  });
  
  return (
    <div 
      className="intro-container" 
      style={{ display: display }}
      onClick={showGalery}
    >
      <div className="top text-center intro" style={detailsStyle}>
        <p>Selected Artwork</p>
      </div>
      <div className="vertical-container">
        <div className="headline-container">
          <div className="headline" style={hlStyle}>
            <span>Editions</span>
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
  showGalery: PropTypes.func.isRequired,
  atIntro: PropTypes.bool.isRequired
}

export default Intro;