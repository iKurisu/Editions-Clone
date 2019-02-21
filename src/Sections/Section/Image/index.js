import React from 'react';
import "./styles.scss";

const Image = ({ artwork, orientation }) => (
  <div className={`ImageWrapper ${orientation}`}>
    <img src={artwork} />
  </div>
)

export default Image;