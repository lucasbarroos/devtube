import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Routes';
import Navigation from './components/Navigation/index';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);
