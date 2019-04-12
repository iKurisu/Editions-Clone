import React from 'react';
import PropTypes from 'prop-types';
import "./Title.scss";

const Title = ({ style, title }) => (
  <div className="title">
    <p style={style}>{title}</p>
  </div>
)

Title.propTypes = {
  style: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default Title;