/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// components
import Layout from '../components/Layout';

const Contact = () => (
  <Layout>
    <form className="flex justify-center items-center max-w-screen-lg mx-auto p-6">
      <div className="flex flex-col w-full md:w-2/3 border-t-4 border-indigo-600 shadow-lg p-6">
        <span className="text-xl font-bold text-center mb-3">Contact Us</span>
        <div className="flex flex-col">
          <label
            className="w-64 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-business-name"
          >
            Name
          </label>
          <input
            className="w-full appearance-none block bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-business-name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="w-64 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-business-name"
          >
            Email
          </label>
          <input
            className="w-full appearance-none block bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-business-name"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="w-64 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-yelp"
          >
            Message
          </label>
          <textarea
            className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            placeholder="Message"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className="bg-indigo-600 shadow-lg hover:shadow-none hover:bg-gray-100 text-gray-100 hover:text-indigo-600 border-2 border-indigo-600 font-bold py-2 px-4 transition ease-in-out duration-300 focus:outline-none focus:shadow-outline mt-3"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </Layout>
);

export default Contact;
