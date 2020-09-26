import React from 'react';
import { Link } from '@reach/router';

// components
import Layout from '../components/Layout';

const TwitterFeed = () => (
  // const myHeaders = new Headers();
  // myHeaders.append(
  //   'Authorization',
  //   'OAuth oauth_consumer_key="WL2IKThsLUSiimJdlypwAiaGg",oauth_token="708024621145133056-7LLXIFr2wmooytpfkwl8IBiGRbnDpie",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1601144459",oauth_nonce="t2ikVZeGkcA",oauth_version="1.0",oauth_signature="AFI4LF2KFINPA%2F26QY3%2B2ljCy2c%3D"'
  // );
  // myHeaders.append(
  //   'Cookie',
  //   'personalization_id="v1_VtyL9vbKCXbLm39CmjSCYg=="; guest_id=v1%3A160113661107523521; lang=en'
  // );

  // const requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow',
  // };

  // fetch(
  //   'https://cors-anywhere.herokuapp.com/' +
  //     'https://api.twitter.com/1.1/statuses/home_timeline.json',
  //   requestOptions
  // )
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log('error', error));

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
