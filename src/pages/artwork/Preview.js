import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import isInView from 'utils/isInView';
import './Preview.scss';

const Preview = ({ width, src }) => {
  const section = useRef(null)
  
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
    return () => window.removeEventListener('scroll', handleScroll);
  })
  
  return (
    <section className="artwork-preview" ref={section}>
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