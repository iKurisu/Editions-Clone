import React, { useState, useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { headersActions } from 'modules/headers';
import "./Side.scss";

const format = x => (x < 10 ? `0${x}` : x); 

const Side = ({ toggled, id, opacity, toggleOpacity }) => {
  const { scrollY, innerHeight } = window;
  const [currentSection, updateSection] = useState(scrollY / innerHeight + 1);
  const timeoutId = useRef(null);

  const setTimeoutId = id => timeoutId.current = id;

  const scroll = () => {
    const { scrollY, innerHeight } = window;

    // Infinite loop
    if (scrollY > innerHeight * 11.99) window.scrollTo(0, 0);

    // Side current section
    const position = Math.ceil((scrollY - innerHeight * 2 / 3) / innerHeight);
    updateSection(position % 12 + 1);
  }

  useEffect(() => {
    const { current: currentTimeout } = timeoutId;
    
    if (!currentTimeout) {
      const timeoutId = setTimeout(() => {
        toggleOpacity();
        setTimeoutId(null)
      }, 650)
      
      setTimeoutId(timeoutId);
    }
  }, [toggled]);

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
  id: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  toggleOpacity: PropTypes.func.isRequired
}

const mapState = ({ artwork, headers }) => ({
  toggled: artwork.toggled,
  id: artwork.id,
  opacity: headers.sides.opacity
})

const actionCreators = {
  toggleOpacity: headersActions.toggleSidesOpacity
}

export default connect(mapState, actionCreators)(Side);