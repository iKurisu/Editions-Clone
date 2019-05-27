import React, { useRef } from 'react';
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

const App = ({ location }) => {  
  const introImage = useRef(null);
  const toggle = location === 'intro' || location === 'fading-intro';

  return (
    <div className={`app${cartToggled ? ' show-cart' : ''}`}>
      { toggle && <Intro imageNode={introImage} /> }
      <Router>
        <Headers />
        <Route exact path="/" render={props => <Galery {...props} introImage={introImage} />} />
        <Route 
          path={artworks.map(artwork => `/${artwork.title.replace(' ', '-')}`)} 
          render={({ match: { url }}) => (
            <Artwork artwork={parseUrlIntoArtwork(url)} />
          )}
        />
      </Router>
      <BlackPanel />
    </main>
    </div>
  )
}

App.propTypes = {
  location: PropTypes.string.isRequired,
}

const mapState = ({ app }) => ({ 
  location: app.location
});

export default connect(mapState)(App);