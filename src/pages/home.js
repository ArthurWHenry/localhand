import React from 'react';
import { Link } from '@reach/router';

// components
import Layout from '../components/Layout';
import Agreement from '../assets/undraw_agreement_aajr.svg';

// styling
import '../index.css';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center text-gray-900 p-6">
        <div className="flex flex-col justify-center items-center p-6">
          <img
            className="h-48 mb-6"
            src={Agreement}
            alt="Hands shaking in agreement."
          />
          <span className="text-5xl md:text-6xl font-bold text-indigo-600">
            localhand
          </span>
          <span className="font-bold text-gray-500 mb-6">
            Supporting small, local businesses.
          </span>
        </div>
        <div className="text-gray-900">
          <Link
            className="bg-indigo-600 shadow-lg hover:shadow-none hover:bg-gray-100 text-gray-100 hover:text-indigo-600 border-2 border-indigo-600 font-bold py-2 px-4 transition ease-in-out duration-300 focus:outline-none focus:shadow-outline"
            to="/register-business"
          >
            Register Your Business
          </Link>
        </div>
      </div>
    </Layout>
  );
}
