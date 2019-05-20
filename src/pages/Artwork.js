import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Details from './artwork/Details';
import Preview from './artwork/Preview';
import Purchase from './artwork/Purchase';
import { introActions } from 'modules/intro';
import { artworkActions, artworkOperations } from 'modules/artwork';

const Artwork = ({ 
  artwork, 
  wasAtGalery, 
  toggleIntro, 
  openArtwork, 
  setFormat 
}) => {
  const { innerWidth: width } = window;
  const { title, colors: { background }, formats, src, orientation, id } = artwork;

  useEffect(() => {
    wasAtGalery ? window.scrollTo(0, 0) : toggleIntro();
    openArtwork(id);
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
      <Purchase artwork={artwork} width={width} />
    </div>
  );
};

Artwork.propTypes = {
  artwork: PropTypes.object.isRequired,
  wasAtGalery: PropTypes.bool.isRequired,
  toggleIntro: PropTypes.func.isRequired,
  openArtwork: PropTypes.func.isRequired,
  setFormat: PropTypes.func.isRequired
}

const mapState = ({ intro }) => ({
  wasAtGalery: !intro.toggled
})

const actionCreators = {
  toggleIntro: introActions.toggle,
  openArtwork: artworkOperations.openArtwork,
  setFormat: artworkActions.setFormat
}

export default connect(mapState, actionCreators)(Artwork);