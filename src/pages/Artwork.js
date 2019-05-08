import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Details from './artwork/Details';
import Preview from './artwork/Preview';
import Purchase from './artwork/Purchase';
import { introActions } from 'modules/intro';
import { artworkActions } from 'modules/artwork';

const Artwork = ({
  artwork,
  toggleIntro,
  toggleArtwork,
  setFormat
}) => {
  const { innerWidth: width } = window;
  const { title, colors: { background }, formats, src, orientation } = artwork;

  useEffect(() => {
    toggleIntro();
    toggleArtwork();
    setFormat(formats[0]);
  }, []);

  return (
    <div style={{ background }}>
      <Details 
        title={title} 
        price={formats[0].price} 
        src={src.main} 
        orientation={orientation}
      />
      <Preview width={width} src={src} />
      <Purchase artwork={artwork} />
    </div>
  );
};

Artwork.propTypes = {
  artwork: PropTypes.object.isRequired,
  toggleIntro: PropTypes.func.isRequired,
  toggleArtwork: PropTypes.func.isRequired,
  setFormat: PropTypes.func.isRequired
}

const actionCreators = {
  toggleIntro: introActions.toggle,
  toggleArtwork: artworkActions.toggle,
  setFormat: artworkActions.setFormat
}

export default connect(null, actionCreators)(Artwork);