import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { introActions } from 'modules/intro';
import { artworkActions } from 'modules/artwork';
import "./Artwork.scss";

const Artwork = ({ artwork, toggleIntro, toggleArtwork }) => {
  useEffect(() => {
    toggleIntro();
    toggleArtwork();
  }, []);

  return (
    <div className="artwork" style={{ background: artwork.colors.background }}>
      <div className="artwork-details">
        <div className="details-container">
          <h1 className="details-title">{artwork.title}</h1>
          <p>
            From <span>${artwork.details.price}.00</span>
            <span>—</span>
            <a>Buy Now</a>
          </p>
          <div>
            <img src={artwork.src} />
          </div>
        </div>
      </div>
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