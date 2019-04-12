import React from 'react';
import PropTypes from 'prop-types';
import "./Panel.scss";

const instagram = "https://www.instagram.com/jordansowers/";
const twitter = "https://twitter.com/hellojsowers";

const Panel = ({ showPanel }) => (
  <div className={`panel ${showPanel ? "show" : "hide"}`}>
    <div className="panel-wrapper">
      <div className="text-center top">
        <a href="http://jordansowers.com">View Portfolio</a>
      </div>
      <div className="description">
        <div className="text-wrapper">
          <p>
            Editions is the selected artwork of Jordan Sowers, a
            multidisciplinary artist living in Portland, OR.
          </p>
        </div>
      </div>
      <div className="text-center bottom reveal">
        <p>Say Hello</p>
        <div className="media">
          <a href="javascript:void(0)">Email</a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </div>
  </div>
);

Panel.propTypes = {
  showPanel: PropTypes.bool.isRequired
}

export default Panel;