import React from 'react';
import ReactDOM from 'react-dom';
import * as PIXI from 'pixi.js';
import { Provider } from 'react-redux';
import App from './App.js'
import store from './store';

let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) type = "canvas";

PIXI.utils.sayHello(type)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);