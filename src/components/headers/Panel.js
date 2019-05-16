import React from 'react';
import PropTypes from 'prop-types';
import Portfolio from './panel/Portfolio';
import Description from './panel/Description';
import Media from './panel/Media';
import "./Panel.scss";

const instagram = "https://www.instagram.com/jordansowers/";
const twitter = "https://twitter.com/hellojsowers";

const Panel = ({ showPanel }) => (
  <div className={`panel ${showPanel ? "show" : "hide"}`}>
    <div className="panel-wrapper">
      <Portfolio />
      <Description />
      <Media />
    </div>
  </div>
);

Panel.propTypes = {
  showPanel: PropTypes.bool.isRequired
}

export default Panel;