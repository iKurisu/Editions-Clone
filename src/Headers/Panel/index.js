import React from 'react';
import PortfolioLink from './PortfolioLink';
import Description from './Description';
import MediaLink from './MediaLink';
import "./styles.scss";

const Panel = ({ showPanel }) => (
  <div className={`Panel ${showPanel ? 'show' : 'hide'}`}>
    <div className="PanelWrapper">
      <PortfolioLink />
      <Description />
      <MediaLink />
    </div>
  </div>
)

export default Panel;