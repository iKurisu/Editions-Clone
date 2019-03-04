import React from 'react';
import { connect } from 'react-redux';
import Section from './Section'
import "./styles.scss";

let key = 0;

const Sections = ({ artworks, atIntro }) => (
  <div className={`Sections ${atIntro ? 'no-scroll' : ''}`}>
    { artworks.map(artwork => <Section {...artwork} key={key++} />) }
    <Section {...artworks[0]} />
  </div>
)

const mapStateToProps = ({ atIntro }) => ({ atIntro });

export default connect(mapStateToProps)(Sections);