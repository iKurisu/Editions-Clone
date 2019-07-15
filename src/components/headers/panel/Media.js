import React from 'react';
import './Media.scss';

const instagram = "https://www.instagram.com/jordansowers/";
const twitter = "https://twitter.com/hellojsowers";

const Media = () => (
  <div className="text-center bottom reveal">
    <p>Say Hello</p>
    <div className="media">
      <a href="javascript:void(0)">Email</a>
      <a href={instagram} target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
      <a href={twitter} target="_blank" rel="noopener noreferrer">
        Twitter
      </a>
    </div>
  </div>
);

export default Media;