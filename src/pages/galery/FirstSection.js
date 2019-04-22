import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import FirstImage from './section/FirstImage';
import Title from './section/Title';
import Details from './section/Details';
import withMovement from './section/withMovement';

const FirstSection = ({ artwork, atIntro, x, y, mouseMove }) => {
  const { src, orientation, title, colors, details } = artwork;
  const [zIndex, setZIndex] = useState(15);

  useEffect(() => {
    !atIntro && setTimeout(() => setZIndex(1), 1000)
  })

  return (
    <section 
      className="section" 
      style={{ zIndex: zIndex }}
      onMouseMove={mouseMove}
    >
      <div className="content-wrapper">
        <FirstImage 
          src={src} 
          orientation={orientation} 
          atIntro={atIntro}
        />
        <Title
          title={title}
          style={{
            transform: `translate(${x}px, ${y}px)`,
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
  atIntro: PropTypes.bool,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  mouseMove: PropTypes.func.isRequired
};

export default withMovement(FirstSection);