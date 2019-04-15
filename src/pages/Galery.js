import React from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';
import Section from './galery/Section';
import "./Galery.scss";

const Galery = ({ artworks, atIntro }) => (
  <div className={`galery ${atIntro ? 'no-scroll' : ''}`}>
    { artworks.map(artwork => (
      <Section artwork={artwork} atIntro={atIntro} key={generate()} />
    ))}
    <Section artwork={artworks[0]} />
  </div>
);

Galery.propTypes = {
  artworks: PropTypes.array.isRequired,
  atIntro: PropTypes.bool
}

export default Galery;