import React from 'react';
import { Route, Link } from 'react-router-dom';
import "./styles.scss";
import Artwork from '../../../Artwork';

const Image = ({ title, artwork, orientation }) => (
  <div className={`ImageWrapper ${orientation}`}>
    <Link to={`/${title.toLowerCase()}`}>
      <img src={artwork} />
    </Link>
    {/* <Route path="/bloom" component={Artwork} /> */}
  </div>
)

export default Image;