import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Headers from 'components/Headers';
import BlackPanel from 'components/BlackPanel';
import Artwork from 'pages/Artwork';
import Galery from 'pages/Galery';
import Intro from 'pages/Intro';
import artworks from 'assets/artworks';
import "./styles.scss";

const parseUrlIntoArtwork = url => {
  const title = url.slice(1);
  return artworks
    .filter(artwork => artwork.title === title.replace('-', ' ')
    .toUpperCase())[0];
};

const App = ({ introToggled, artworkToggled }) => {
  const [fading, setFading] = useState(false);
  const intro = introToggled ? "intro" : "";
  const artwork = artworkToggled ? "artwork" : "";
  const fading_intro = fading ? "fading-intro" : "";

  const toggleFading = () => setFading(!fading);

  useEffect(() => {
    if (!introToggled && !artworkToggled) toggleFading();
  }, [introToggled]);
  
  useEffect(() => {
    if (fading) setTimeout(toggleFading, 900);
  }, [fading])
  
  return (
    <main className={`${intro}${artwork}${fading_intro}`}>
      <Headers />
      { introToggled && <Intro /> }
      <Router>
        <Route exact path="/" component={Galery} />
        <Route 
          path={artworks.map(artwork => `/${artwork.title.replace(' ', '-')}`)} 
          render={({ match: { url }}) => (
            <Artwork artwork={parseUrlIntoArtwork(url)} />
          )}
        />
      </Router>
      <BlackPanel />
    </main>
  )
}

App.propTypes = {
  introToggled: PropTypes.bool.isRequired,
  artworkToggled: PropTypes.bool.isRequired
}

const mapState = ({ intro, artwork }) => ({ 
  introToggled: intro.toggled,
  artworkToggled: artwork.toggled
});

export default connect(mapState)(App);