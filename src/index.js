import React from 'react';
import ReactDOM from 'react-dom';
import Headers from 'components/Headers';
import Galery from 'pages/Galery';
import artworks from './artworks';
import "./styles.scss";

const App = () => (
  <>
    <Headers />
    <Galery artworks={artworks} />
  </>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
);