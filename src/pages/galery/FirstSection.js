import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FirstImage from './section/FirstImage';
import Title from './section/Title';
import Details from './section/Details';
import withMovement from 'components/withMovement';

const FirstSection = ({ artwork, introToggled, introImage }) => {
  const { src, orientation, title, colors, details } = artwork;
  const [zIndex, setZIndex] = useState(atIntro ? 70 : 1);

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
          node={introImage}
          src={src.main} 
          title={title}
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
  introToggled: PropTypes.bool.isRequired,
  introImage: PropTypes.object.isRequired
};

const mapState = ({ intro }) => ({
  introToggled: intro.toggled
})

export default connect(mapState)(FirstSection);