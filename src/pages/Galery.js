import React from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';
import Section from './galery/Section';
import FirstSection from './galery/FirstSection';
import artworks from "assets/artworks";
import "./Galery.scss";

const Galery = ({ atIntro }) => (
  <div className="galery">
    <FirstSection artwork={artworks[0]} atIntro={atIntro} />
    {!atIntro && (
      <>
        {artworks.slice(1).map(artwork => (
          <Section artwork={artwork} key={generate()} />
        ))}
        <Section artwork={artworks[0]} />
      </>
    )}
  </div>
);

Galery.propTypes = {
  atIntro: PropTypes.bool
}

export default Galery;