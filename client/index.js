import React from 'react';
import App from '/App.jsx';
import store from '/store.js';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('root')
);