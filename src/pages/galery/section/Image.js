import React from 'react';
import PropTypes from 'prop-types';
import LinkedImage from './image/LinkedImage';
import "./Image.scss"; 

const Image = ({ src, title, orientation, isClone }) => (
  <div className={`image-wrapper ${orientation}`}>
    <LinkedImage src={src} title={title} isClone={isClone} />
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  isClone: PropTypes.bool
}

export default Image;