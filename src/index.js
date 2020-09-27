/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

// components
import Home from './pages/home';
import Businesses from './pages/business';
import TwitterFeed from './pages/twitter-feed';
import RegisterBusiness from './pages/register-business';
import Contact from './pages/contact';

// styling
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Home path="/" />
      <Businesses path="/business" />
      <TwitterFeed path="/twitter-feed" />
      <RegisterBusiness path="/register-business" />
      <Contact path="/contact-us" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
