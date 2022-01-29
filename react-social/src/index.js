import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import state from './redux/state.js';

ReactDOM.render(
  <React.StrictMode>
    <App {...state} />
  </React.StrictMode>,
  document.getElementById('root')
);