import React, { useState, useEffect } from 'react';
import "./Side.scss";

const Side = () => {
  const { scrollY, innerHeight } = window;
  const [opacity, setOpacity] = useState(0);
  const [currentSection, updateSection] = useState(scrollY / innerHeight + 1);

  const scroll = () => {
    const { scrollY, innerHeight } = window;
    if (scrollY > 12000) window.scrollTo(0, 0);

    const position = Math.ceil((scrollY - innerHeight * 2 / 3) / innerHeight);
    updateSection(position % 12 + 1);
  }

  useEffect(() => {
    window.addEventListener('scroll', scroll);
    setTimeout(() => setOpacity(1), 650);
    return () => window.removeEventListener('scroll', scroll);
  }, []);

  const format = x => x < 10 ? `0${x}` : x; 

  return (
    <React.Fragment>
      <div className="side fixed fixed-left" style={{ opacity }}>
        Selected Artwork
      </div>
      <div className="side fixed fixed-right" style={{ opacity }}>
        <span>2016 – P</span>
        <span className="margin-left">{`${format(currentSection)} / 12`}</span>
      </div>
    </React.Fragment>
  )
}

export default Side;