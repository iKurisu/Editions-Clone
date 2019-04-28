import React from 'react';
import PropTypes from 'prop-types';
import "./Image.scss";

const Image = ({ src, orientation }) => {
  return (
    <div className={`image-wrapper ${orientation}`}>
      <img src={src} />
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired
}

export default Image;