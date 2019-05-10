import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import FirstImage from './section/FirstImage';
import Title from './section/Title';
import Details from './section/Details';
import withMovement from 'components/withMovement';

const FirstSection = ({ artwork, atIntro, displacement: {x, y}, displace }) => {
  const { src, orientation, title, colors, details } = artwork;
  const [zIndex, setZIndex] = useState(atIntro ? 15 : 1);

  useEffect(() => {
    !atIntro && zIndex !== 1 && setTimeout(() => setZIndex(1), 1000);
  })

  return (
    <section 
      className="section" 
      style={{ zIndex }}
      onMouseMove={displace}
    >
      <div className="content-wrapper">
        <FirstImage 
          src={src.main} 
          orientation={orientation} 
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
  displacement: PropTypes.object.isRequired,
  displace: PropTypes.func.isRequired
};

export default withMovement(FirstSection);