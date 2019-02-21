import React from 'react';
import './styles.scss';

const Title = ({ style, title }) => (
  <div className="Title">
    <p style={style}>{title}</p>
  </div>
)

export default Title;