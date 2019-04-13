import React from 'react';
import PropTypes from 'prop-types';
import "./BlackPanel.scss";

const BlackPanel = ({ position }) => (
  <div className="black-pannel" style={{ top: position }} />
)

BlackPanel.propTypes = {
  position: PropTypes.string
}

export default BlackPanel;