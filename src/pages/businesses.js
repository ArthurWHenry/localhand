import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

// components
import Layout from '../components/Layout';

// small data set
const business = ['Leguminati', 'Lazy Moon', 'Krust'];

const Businesses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = business.filter((name) =>
      name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <Layout>
      <div className="flex justify-center items-center max-w-screen-lg mx-auto p-6">
        <div className="flex flex-row justify-between shadow-lg rounded py-2 px-6 w-full ">
          <input
            className="w-full focus:outline-none mr-2"
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search small businesses..."
          />
          <FaSearch size={20} />
        </div>
      </div>
      {/* section for listed businesses */}
      {/* <div className="flex flex-col justify-center items-center">
        <div className="bg-gray-200 w-full">
          <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-full max-w-screen-lg mx-auto p-6">
            <div className="flex justify-center items-center w-64 h-64 object-contain bg-gray-500">
              image here
            </div>
            <div className="flex flex-col justify-center items-center md:items-start text-left p-6">
              <span className="text-2xl font-bold mt-6 md:mt-0">
                Leguminati
              </span>
              <span className="text-gray-600 font-bold">Orlando, FL</span>
              <p className="text-center md:text-left my-6">
                Airy, counter-serve eatery inside Hourglass Social House
                offering a range of vegan comfort classics.
              </p>
              <button
                className="font-bold border border-gray-900 py-2 px-4 bg-gray-900 text-gray-100 shadow-lg  transition ease-in-out duration-300 hover:bg-gray-100 hover:text-gray-900 hover:shadow-none focus:outline-none"
                type="button"
              >
                Visit Our Website
              </button>
            </div>
          </div>
        </div> */}
      <div className="bg-gray-200 w-full">
        {searchResults.map((item) => (
          <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-full max-w-screen-lg mx-auto p-6">
            <div className="flex justify-center items-center w-64 h-64 object-contain bg-gray-500">
              image here
            </div>
            <div className="flex flex-col justify-center items-center md:items-start text-left p-6">
              <span className="text-2xl font-bold mt-6 md:mt-0">{item}</span>
              <span className="text-gray-600 font-bold">Orlando, FL</span>
              <p className="text-center md:text-left my-6">
                Airy, counter-serve eatery inside Hourglass Social House
                offering a range of vegan comfort classics.
              </p>
              <button
                className="font-bold border border-gray-900 py-2 px-4 bg-gray-900 text-gray-100 shadow-lg  transition ease-in-out duration-300 hover:bg-gray-100 hover:text-gray-900 hover:shadow-none focus:outline-none"
                type="button"
              >
                Visit Our Website
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Businesses;
