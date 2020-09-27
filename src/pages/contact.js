/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// components
import Layout from '../components/Layout';

const Contact = () => (
  <Layout>
    <div className="flex justify-center items-center max-w-screen-lg mx-auto text-2xl font-bold mt-6 md:mt-0 mb-6">
      Contact Us
    </div>

    <form className="flex justify-center items-center max-w-screen-lg mx-auto content-evenly">
      <div className="flex flex-col w-2/3">
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
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-6"
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
