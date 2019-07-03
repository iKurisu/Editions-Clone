import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Headers from 'components/Headers';
import BlackPanel from 'components/BlackPanel';
import Cart from 'components/Cart';
import Artwork from 'pages/Artwork';
import Galery from 'pages/Galery';
import Intro from 'pages/Intro';
import artworks from 'assets/artworks';
import useIntersection from 'hooks/useIntersection';
import "./styles.scss";

const parseUrlIntoArtwork = url => {
  const title = url.slice(1);
  return artworks
    .filter(artwork => artwork.title === title.replace('-', ' ')
    .toUpperCase())[0];
};

const App = ({ location, cartToggled }) => {  
  const introImage = useRef(null);
  const purchaseSection = useRef(null);
  const intersectingPurchase = useIntersection(purchaseSection, false, {
    threshold: 0.87
  });

  const toggle = location === 'intro' || location === 'fading-intro';

  return (
    <div className={`app${cartToggled ? ' show-cart' : ''}`}>
      <main className={`${location}${intersectingPurchase ? ' purchase-section' : ''}`}>
        { toggle && <Intro imageNode={introImage} /> }
        <Router>
          <Headers />
          <Route exact path="/" render={props => {
            return <Galery {...props} introImage={introImage} />}
          } />
          <Route 
            path={artworks.map(artwork => `/${artwork.title.replace(' ', '-')}`)} 
            render={({ match: { url }}) => (
              <Artwork 
                artwork={parseUrlIntoArtwork(url)} 
                purchaseSection={purchaseSection} 
              />
            )}
          />
        </Router>
        <BlackPanel />
      </main>
      <Cart />
    </div>
  )
}

App.propTypes = {
  location: PropTypes.string.isRequired,
  cartToggled: PropTypes.bool.isRequired
}

const mapState = ({ app, cart }) => ({ 
  location: app.location,
  cartToggled: cart.toggled
});

export default connect(mapState)(App);