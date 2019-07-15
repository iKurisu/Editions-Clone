import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinkedImage from './LinkedImage';

const FirstLinkedImage = ({ src, title, cloneIntersecting, introToggled }) => (
  <LinkedImage 
    src={src} 
    title={title} 
    cloneIntersecting={cloneIntersecting}
    initialValue={introToggled}
  />
)

FirstLinkedImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cloneIntersecting: PropTypes.bool.isRequired,
  introToggled: PropTypes.bool.isRequired
}

const mapState = ({ app, intro }) => ({
  cloneIntersecting: app.cloneIntersecting,
  introToggled: intro.toggled
})

export default connect(mapState)(FirstLinkedImage);