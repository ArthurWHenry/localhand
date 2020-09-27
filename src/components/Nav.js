import React, { useState } from 'react';
import { Link } from '@reach/router';
import classNames from 'classnames';

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  const dropdownMobile = classNames('w-full', 'block', 'md:hidden', {
    hidden: !isOpen,
    block: isOpen,
  });

  const hamburgerIconClasses = classNames({
    hidden: isOpen,
    'inline-flex': !isOpen,
  });

  const closeIconClasses = classNames({
    'inline-flex': isOpen,
    hidden: !isOpen,
  });

  return (
    <nav className="flex flex-wrap justify-between items-center max-w-screen-lg mx-auto p-6 text-indigo-600">
      <div>
        <Link className="font-bold text-2xl" to="/">
          localhand
        </Link>
      </div>
      <div className="block md:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-red-garnet focus:outline-none"
          onClick={() => setOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              className={hamburgerIconClasses}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              className={closeIconClasses}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className={dropdownMobile}>
        <Link
          className="font-bold text-gray-600 transition ease-in-out duration-300 hover:text-gray-900 block p-1 mt-3"
          to="/business"
        >
          Businesses
        </Link>
        <Link
          className="font-bold text-gray-600 transition ease-in-out duration-300 hover:text-gray-900 block p-1 mt-3"
          to="/twitter-feed"
        >
          Twitter Feed
        </Link>
      </div>
      <div className="w-full hidden md:flex md:items-center md:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            className="font-bold text-gray-600 transition ease-in-out duration-300 hover:text-gray-900 px-2 py-1 mr-2"
            to="/business"
          >
            Businesses
          </Link>
          <Link
            className="font-bold text-gray-600 transition ease-in-out duration-300 hover:text-gray-900 px-2 py-1"
            to="/twitter-feed"
          >
            Twitter Feed
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
