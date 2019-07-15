import React from 'react';
import PropTypes from 'prop-types';
import "./Title.scss";

const Title = ({ style, title, node }) => (
  <div className="title">
    <p ref={node} style={style}>{title}</p>
  </div>
)

Title.propTypes = {
  style: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  node: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
}

export default Title;