import React from 'react';
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

const App = ({ introToggled, artworkToggled }) => (
  <main className={introToggled ? "intro" : artworkToggled ? "artwork" : ""}>
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
);

App.propTypes = {
  introToggled: PropTypes.bool.isRequired,
  artworkToggled: PropTypes.bool.isRequired
}

const mapState = ({ intro, artwork }) => ({ 
  introToggled: intro.toggled,
  artworkToggled: artwork.toggled
});

export default connect(mapState)(App);