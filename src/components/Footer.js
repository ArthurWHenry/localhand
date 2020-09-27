import React from 'react';
import { Link } from '@reach/router';

const Footer = () => (
  <footer className="flex flex-col justify-center items-center max-w-screen-lg mx-auto p-6 text-gray-900 h-32">
    <div>
      <Link
        className="font-bold transition ease-in-out duration-300 hover:underline"
        to="/contact-us"
      >
        Contact Us
      </Link>
    </div>
    <span>&copy; localhand 2020</span>
  </footer>
);

export default Footer;
