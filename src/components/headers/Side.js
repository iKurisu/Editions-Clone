import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import "./Side.scss";

const format = x => (x < 10 ? `0${x}` : x); 

const Side = ({ toggled, id }) => {
  const { scrollY, innerHeight } = window;
  const [opacity, setOpacity] = useState(0);
  const [currentSection, updateSection] = useState(scrollY / innerHeight + 1);

  const scroll = () => {
    const { scrollY, innerHeight } = window;

    // Infinite loop
    if (scrollY > innerHeight * 11.99) window.scrollTo(0, 0);

    // Side current section
    const position = Math.ceil((scrollY - innerHeight * 2 / 3) / innerHeight);
    updateSection(position % 12 + 1);
  }

  useEffect(() => {
    setTimeout(() => setOpacity(1), 650);
  }, []);

  useEffect(() => {
    if (!toggled) {
      window.addEventListener('scroll', scroll);
    } else {
      updateSection(id + 1);
    }

    return () => window.removeEventListener('scroll', scroll);
  }, [toggled])

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

Side.propTypes = {
  toggled: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
}

const mapState = ({ artwork }) => ({
  toggled: artwork.toggled,
  id: artwork.id
})

export default connect(mapState)(Side);