import React from 'react';
import PropTypes from 'prop-types';
import "./Intro.scss";

const Intro = ({ showGalery }) => (
  <div className="intro-container" onClick={showGalery}>
    <div className="top text-center intro">
      <p>Selected Artwork</p>
    </div>
    <div className="vertical-container">
      <div className="headline-container">
        <div className="headline">
          <span>Editions</span>
        </div>
      </div>
    </div>
    <div className="bottom text-center intro">
      <p>2016 – Present</p>
    </div>
  </div>
);

Intro.propTypes = {
  showGalery: PropTypes.func.isRequired
}

export default Intro;