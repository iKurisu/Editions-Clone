import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { introActions } from 'modules/intro';
import { artworkActions } from 'modules/artwork';
import "./Artwork.scss";

const Artwork = ({
  artwork: { colors, title, details, src },
  toggleIntro,
  toggleArtwork
}) => {
  const { innerWidth: width } = window;
  
  useEffect(() => {
    toggleIntro();
    toggleArtwork();
  }, []);

  return (
    <div className="artwork" style={{ background: colors.background }}>
      <div className="artwork-details">
        <div className="details-container">
          <h1 className="details-title">{title}</h1>
          <p>
            From <span>${details.price}.00</span>
            <span className="dash">—</span>
            <a>Buy Now</a>
          </p>
          <div className="details-artwork">
            <img src={src.main} />
          </div>
        </div>
      </div>
      <section>
        <figure>
          <img
            src={width < 768 ? src.details_small : src.details}
          />
        </figure>
      </section>
    </div>
  );
};

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