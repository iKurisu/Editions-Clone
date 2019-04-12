import React from 'react';
import { generate } from 'shortid';
import Section from './galery/Section';
import "./Galery.scss";

const Galery = ({ artworks, atIntro }) => (
  <div className={`galery ${atIntro ? 'no-scroll' : ''}`}>
    { artworks.map(artwork => <Section {...artwork} key={generate()} /> )}
    <Section {...artworks[0]} />
  </div>
);

export default Galery;