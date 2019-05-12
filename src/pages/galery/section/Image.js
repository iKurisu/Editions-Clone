import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./Image.scss";

const Image = ({ src, title, orientation }) => {
  return (
    <div className={`image-wrapper ${orientation}`}>
      <Link to={`/${title.toLowerCase()}`}>
        <img src={src} />
      </Link>
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired
}

export default Image;