/* eslint-disable react/prop-types */
import React from 'react';

// components
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
);

export default Layout;
