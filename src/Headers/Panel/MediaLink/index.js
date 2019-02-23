import React from 'react';
import "./styles.scss";

const instagram = "https://www.instagram.com/jordansowers/";
const twitter = "https://twitter.com/hellojsowers";

const MediaLink = () => (
  <div className="text-center bottom reveal">
    <p>Say Hello</p>
    <div className="media">
      <a href="javascript:void(0)">Email</a>
      <a href={instagram} target="_blank">Instagram</a>
      <a href={twitter} target="_blank">Twitter</a>
    </div>
  </div>
)

export default MediaLink;