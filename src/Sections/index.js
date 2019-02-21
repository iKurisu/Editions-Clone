import React from 'react';
import Section from './Section'

let key = 0;

const Sections = ({ artworks }) => (
  <div className="Sections">
    { artworks.map(artwork => <Section {...artwork} key={key++} />) }
    <Section {...artworks[0]} />
  </div>
)

export default Sections;