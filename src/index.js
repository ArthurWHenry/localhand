/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from '@reach/router';

// components
import Home from './pages/home';
import Businesses from './pages/businesses';
import TwitterFeed from './pages/twitter-feed';

// styling
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Home path="/" />
      <Businesses path="/businesses" />
      <TwitterFeed path="/twitter-feed" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
