import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Headers from 'components/Headers';
import BlackPanel from 'components/BlackPanel';
import Galery from 'pages/Galery';
import Intro from 'pages/Intro';

import artworks from './artworks';
import "./styles.scss";

const App = ({ toggled }) => (
  <main className={toggled ? "intro" : ""}>
    <Headers />
    <Intro />
      <Galery atIntro={toggled} />
    <BlackPanel />
  </main>
);

App.propTypes = {
  toggled: PropTypes.bool.isRequired
}

const mapState = ({ intro }) => ({ toggled: intro.toggled });

export default connect(mapState)(App);