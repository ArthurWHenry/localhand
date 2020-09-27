/* eslint-disable prefer-const */
import React from 'react';

// components
import Layout from '../components/Layout';

// twitter info
import tweets from '../assets/twitter-info';

const TwitterFeed = () => {
  console.log(tweets);

  window.twttr = (function (d, s, id) {
    let js;
    const fjs = d.getElementsByTagName(s)[0];
    const t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
      t._e.push(f);
    };

    return t;
  })(document, 'script', 'twitter-wjs');

  return (
    <Layout>
      <div className="bg-gray-300">
        <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto h-64 p-6">
          <span className="text-3xl md:text-5xl text-center font-bold">
            Share your tweet with <span className="underline">#localhand</span>
          </span>
          <div className="mt-6">
            {/* <Link
              className="font-bold border border-gray-900 py-2 px-4 bg-gray-900 text-gray-100 shadow-lg  transition ease-in-out duration-300 hover:bg-gray-100 hover:text-gray-900 hover:shadow-none"
              to="/businesses"
            >
              Tweet
            </Link> */}
            <a
              className="twitter-hashtag-button"
              href="https://twitter.com/intent/tweet?button_hashtag=localhand"
            >
              Tweet #TwitterStories
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto p-6">
        {tweets.statuses.map((tweet) => (
          <div
            key={tweet.id}
            className="flex flex-col justify-center items-center shadow-lg p-6 my-4 w-full border-t-4 border-gray-900 text-center"
          >
            <div className="flex flex-row justify-between items-center">
              <img
                className="rounded-full w-6 shadow"
                src={tweet.user.profile_image_url}
                alt={`${tweet.user.name} twitter profile icon.`}
              />
              <span className="font-bold ml-1">{tweet.user.name}</span>
            </div>
            <a
              href={`https://twitter.com/${tweet.user.screen_name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 hover:underline text-gray-600"
            >
              @{tweet.user.screen_name}
            </a>
            <p className="my-3">{tweet.text}</p>
            <p className="">
              <span className="font-bold">Favorites: </span>{' '}
              {tweet.favorite_count}{' '}
              <span className="font-bold">Retweets: </span>{' '}
              {tweet.retweet_count}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default TwitterFeed;
