import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as PIXI from 'pixi.js';
import Headers from 'components/Headers';
import BlackPanel from 'components/BlackPanel';
import Galery from 'pages/Galery';
import Intro from 'pages/Intro';
import artworks from './artworks';
import "./styles.scss";

let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) type = "canvas";

PIXI.utils.sayHello(type)

const App = () => {
  const [atIntro, setIntro] = useState(true);
  const [panelPosition, setPanelPosition] = useState('0');
  
  const fadeIntro = () => {
    setIntro(false);
    setPanelPosition('-100%');
  }

  return (
    <main className={atIntro ? 'intro' : ''}>
      <Headers />
      <Intro showGalery={fadeIntro} atIntro={atIntro} />
      <Galery artworks={artworks} atIntro={atIntro} />
      <BlackPanel position={panelPosition} />
    </main>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));