import React from 'react';
import "./Title.scss";

const Title = ({ style, title }) => (
  <div className="title">
    <p style={style}>{title}</p>
  </div>
)

export default Title;