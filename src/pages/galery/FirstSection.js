import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Section from './Section';
import FirstImage from './section/FirstImage';

const FirstSection = ({ artwork, introToggled, introImage }) => {
  const [zIndex, setZIndex] = useState(introToggled ? 70 : 1);

  useEffect(() => {
    !introToggled && zIndex !== 1 && setTimeout(() => setZIndex(1), 1000);
  }, [introToggled])

  return (
    <Section
      artwork={artwork}
      zIndex={zIndex}
      renderImage={props => <FirstImage {...props} node={introImage} />}
    />
  );
}

FirstSection.propTypes = {
  artwork: PropTypes.object.isRequired,
  introToggled: PropTypes.bool.isRequired,
  introImage: PropTypes.object.isRequired
};

const mapState = ({ intro }) => ({
  introToggled: intro.toggled,
})

export default connect(mapState)(FirstSection);