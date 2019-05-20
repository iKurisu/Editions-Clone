import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FirstImage from './section/FirstImage';
import Title from './section/Title';
import Details from './section/Details';
import useDisplacement from 'hooks/useDisplacement';

const FirstSection = ({ artwork, introToggled, introImage }) => {
  const { src, orientation, title, colors, details } = artwork;
  
  const [zIndex, setZIndex] = useState(introToggled ? 70 : 1);
  const hovering = useRef(false);
  const [titleNode, displace] = useDisplacement(hovering);

  const toggleHover = () => hovering.current = !hovering.current;

  useEffect(() => {
    !introToggled && zIndex !== 1 && setTimeout(() => setZIndex(1), 1000);
  }, [introToggled])

  return (
    <section 
      className="section" 
      style={{ zIndex }}
      onMouseMove={displace}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="content-wrapper">
        <FirstImage 
          node={introImage}
          src={src.main} 
          title={title}
          orientation={orientation} 
        />
        <Title
          title={title}
          node={titleNode}
          style={{
            color: colors.font
          }}
        />
        <Details {...details} />
      </div>
    </section>
  );
}

FirstSection.propTypes = {
  artwork: PropTypes.object.isRequired,
  introToggled: PropTypes.bool.isRequired,
  introImage: PropTypes.object.isRequired
};

const mapState = ({ intro }) => ({
  introToggled: intro.toggled
})

export default connect(mapState)(FirstSection);