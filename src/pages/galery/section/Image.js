import React from 'react';
import PropTypes from 'prop-types';
import "./Image.scss";

const Image = ({ artwork, orientation }) => (
  <div className={`image-wrapper ${orientation}`}>
    <img src={artwork} />
  </div>
)

Image.propTypes = {
  artwork: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired
}

export default Image;