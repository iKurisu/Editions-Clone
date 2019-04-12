import React from 'react';
import "./Image.scss";

const Image = ({ title, artwork, orientation }) => (
  <div className={`image-wrapper ${orientation}`}>
    <img src={artwork} />
  </div>
)

export default Image;