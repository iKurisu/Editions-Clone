import React from 'react';
import PropTypes from 'prop-types';
import Portfolio from './panel/Portfolio';
import Description from './panel/Description';
import Media from './panel/Media';
import Cross from './common/Cross';
import "./Panel.scss";

const Panel = ({ showPanel, toggle }) => (
  <div className={`panel ${showPanel ? "show" : "hide"}`}>
    <div className="panel-wrapper">
      <Cross isActive={showPanel} click={toggle} />
      <Portfolio />
      <Description />
      <Media />
    </div>
  </div>
);

Panel.propTypes = {
  showPanel: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

export default Panel;