import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { introActions } from 'modules/intro';
import { artworkActions } from 'modules/artwork';

const Artwork = ({ artwork, toggleIntro, toggleArtwork }) => {
  useEffect(() => {
    toggleIntro();
    toggleArtwork();
  }, []);

  return (
    <div className="artwork">
    </div>
  )
}

Artwork.propTypes = {
  artwork: PropTypes.object.isRequired,
  toggleIntro: PropTypes.func.isRequired,
  toggleArtwork: PropTypes.func.isRequired
}

const actionCreators = {
  toggleIntro: introActions.toggle,
  toggleArtwork: artworkActions.toggle
}

export default connect(null, actionCreators)(Artwork);