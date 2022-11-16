import React from 'react';
import App from './App.jsx';
import store from './store.js';
import { Provider } from 'react-redux';
import { render } from 'react-dom';



const rooted = document.getElementById('root');

render(
  <div>
  <Provider store = { store }>
    <App />
  </Provider>
  </div>,
  //document.getElementById('root')
  rooted
);