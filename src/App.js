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

const App = ({ toggled }) => (
  <main className={toggled ? "intro" : ""}>
    <Headers />
    { toggled && <Intro /> }
    <Router>
      <Route exact path="/" component={Galery} />
      <Route path={artworks.map(artwork => `/${artwork.title.replace(' ', '-')}`)} component={Artwork} />
    </Router>
    <BlackPanel />
  </main>
);

App.propTypes = {
  toggled: PropTypes.bool.isRequired
}

const mapState = ({ intro }) => ({ toggled: intro.toggled });

export default connect(mapState)(App);