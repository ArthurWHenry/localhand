/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// components
import Layout from '../components/Layout';

const RegisterBusiness = () => (
  <Layout>
    <div className="flex justify-center items-center max-w-screen-lg mx-auto text-2xl font-bold mt-6 md:mt-0 mb-6">
      Register your small business.
    </div>

    <form className="flex justify-center items-center max-w-screen-lg mx-auto content-evenly">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <label
            className="w-64 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-business-name"
          >
            Business Name
          </label>
          <input
            className=" w-64 appearance-none block bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-business-name"
            type="text"
            placeholder="Business Name"
          />
        </div>
        <div className="flex flex-row">
          <label
            className="w-64 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-type"
          >
            Business Type
          </label>
          <div className="relative w-64">
            <select
              className="appearance-none block bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-whiteblock w-full border-gray-200 pr-8 rounded focus:bg-white focus:border-gray-500"
              id="grid-type"
            >
              <option disabled selected hidden>
                Type
              </option>
              <option>Food</option>
              <option>Retail</option>
              <option>Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <label
            className="w-64 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-city"
          >
            City
          </label>
          <div className="relative w-64">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
            >
              <option disabled selected hidden>
                City
              </option>
              <option>Orlando</option>
              <option>Winter Park</option>
              <option>Oviedo</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-row my-4">
          <label
            className="w-64 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-type"
          >
            State
          </label>
          <div className="relative w-64">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-type"
            >
              <option disabled selected hidden>
                State
              </option>
              <option>FL</option>
              <option>GA</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <label
            className="w-64 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-yelp"
          >
            Yelp Link
          </label>
          <input
            className=" w-64 appearance-none block bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-yelp"
            type="text"
            placeholder="Yelp URL"
          />
        </div>
        <p className="text-gray-600 text-xs italic">
          If your business is not on Yelp, please contact us at
          localhand@gmail.com
        </p>
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

export default RegisterBusiness;
