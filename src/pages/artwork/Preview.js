import React from 'react';
import PropTypes from 'prop-types';
import './Preview.scss';

const Preview = ({ width, src }) => (
  <section className="artwork-preview">
    <figure>
      <img src={width < 768 ? src.details_small : src.details} />
    </figure>
  </section>
);

Preview.propTypes = {
  width: PropTypes.number.isRequired,
  src: PropTypes.object.isRequired
}

export default Preview;