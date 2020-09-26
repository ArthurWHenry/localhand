import React from 'react';
import { Link } from '@reach/router';

// components
import Layout from '../components/Layout';

const TwitterFeed = () => (
  <Layout>
    <div className="bg-gray-300">
      <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto h-64 p-6">
        <span className="text-3xl md:text-5xl text-center font-bold">
          Share your tweet with <span className="underline">#localhands</span>
        </span>
        <div className="mt-6">
          <Link
            className="font-bold border border-gray-900 py-2 px-4 bg-gray-900 text-gray-100 shadow-lg  transition ease-in-out duration-300 hover:bg-gray-100 hover:text-gray-900 hover:shadow-none"
            to="/businesses"
          >
            Tweet
          </Link>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center max-w-screen-lg mx-auto p-6">
      Tweets go here, I guess.
    </div>
  </Layout>
);
export default TwitterFeed;
