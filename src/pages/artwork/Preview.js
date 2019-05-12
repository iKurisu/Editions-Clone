import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import isInView from 'utils/isInView';
import './Preview.scss';

const Preview = ({ width, src }) => {
  const [offset, setOffset] = useState(30);
  const [opacity, setOpacity] = useState(0);
  const section = useRef(null);
  
  const handleScroll = () => {
    const hasClass = section.current.classList.contains("show");

    if (isInView(section)) {
      !hasClass && section.current.classList.add("show");
    } else {
      hasClass && section.current.classList.remove("show");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setOffset(0);
    setOpacity(1);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  
  return (
    <section 
      className="artwork-preview" 
      ref={section}
      style={{ transform: `translateY(${offset}px)`, opacity }}
    >
      <figure>
        <img src={width < 700 ? src.details_small : src.details} />
      </figure>
    </section>
  )
}

Preview.propTypes = {
  width: PropTypes.number.isRequired,
  src: PropTypes.object.isRequired
}

export default Preview;