import React from 'react';
import { Link } from '@reach/router';

// components
import Layout from '../components/Layout';

// styling
import '../index.css';

export default function Home() {
  return (
    <Layout>
      <div
        style={{ height: '570px' }}
        className="flex flex-col justify-center items-center text-gray-900 h-64"
      >
        <div className="flex flex-col justify-center items-center p-6">
          <span className="text-5xl md:text-6xl font-bold text-indigo-600">
            localhand
          </span>
          <span>Supporting small, local businesses.</span>
        </div>
        <div className="mt-3">
          <Link
            className="font-bold border border-indigo-600 py-2 px-4 bg-indigo-600 text-gray-100 shadow-lg  transition ease-in-out duration-300 hover:bg-gray-100 hover:text-indigo-600 hover:shadow-none"
            to="/register-business"
          >
            Register Your Business
          </Link>
        </div>
      </div>
    </Layout>
  );
}
