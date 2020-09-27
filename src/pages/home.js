import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

// components
import Layout from '../components/Layout';

// small data set
import businesses from '../assets/business_details';

import Agreement from '../assets/undraw_agreement_aajr.svg';

const Business = () => {
  console.log(businesses);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = businesses.filter((business) =>
      business.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <Layout>
      <div>
        <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto p-6">
          <img
            className="h-64 w-64 object-contain p-6"
            src={Agreement}
            alt="The shaking of two hands."
          />
          <span className="text-xl md:text-3xl text-gray-900 text-center font-bold mb-6">
            Support small, local businesses.
          </span>
          <div className="flex flex-row justify-between items-center shadow-lg py-3 px-6 w-full border-t-4 bg-white mb-4">
            <input
              className="w-full focus:outline-none mr-2"
              type="text"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search local businesses"
            />
            <FaSearch className="text-indigo-600" size={20} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-screen-lg w-full mx-auto p-6">
        <div className="w-full">
          {searchResults.map((business) => (
            <div
              key={Math.random()}
              className="flex flex-col md:flex-row justify-center md:justify-around items-center w-full max-w-screen-lg mx-auto p-6 border-t-4 border-indigo-600 my-6 shadow-lg"
            >
              <img
                className="h-64 w-64 object-contain"
                src={business.image}
                alt={`Logo of ${business.name}.`}
              />
              <div className="flex flex-col justify-center items-center md:items-start text-left p-6">
                <span className="text-2xl font-bold text-indigo-600 mt-6 md:mt-0 text-center">
                  {business.name}
                </span>
                <span className="text-gray-600 font-bold text-center">
                  {business.address}
                </span>
                <p className="text-center md:text-left my-6">
                  Airy, counter-serve eatery inside Hourglass Social House
                  offering a range of vegan comfort classics.
                </p>
                <a
                  className="font-bold border border-indigo-600 py-2 px-4 text-indigo-600 transition ease-in-out duration-300 hover:bg-indigo-600 hover:text-gray-100 hover:shadow-none focus:outline-none"
                  href={`https://${business.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Our Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Business;
