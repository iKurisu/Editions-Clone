import React from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';
import Section from './galery/Section';
import FirstSection from './galery/FirstSection';
import artworks from "assets/artworks";
import "./Galery.scss";

const Galery = ({ introImage }) => (
  <div className="galery cart-shift">
    <FirstSection artwork={artworks[0]} introImage={introImage} />
    { artworks.slice(1).map(artwork => (
      <Section artwork={artwork} key={generate()} />
    )) }
    <Section artwork={artworks[0]} isClone={true} />
  </div>
);

Galery.propTypes = {
  introImage: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
}

const areEqual = () => true;

export default React.memo(Galery, areEqual);