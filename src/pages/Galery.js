import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { generate } from 'shortid';
import Section from './galery/Section';
import FirstSection from './galery/FirstSection';
import artworks from "assets/artworks";
import "./Galery.scss";

const Galery = ({ toggled }) => (
  <div className="galery">
    <FirstSection artwork={artworks[0]} atIntro={toggled} />
    {!toggled && (
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
  toggled: PropTypes.bool.isRequired
}

const mapState = ({ intro }) => ({ toggled: intro.toggled });

export default connect(mapState)(Galery);