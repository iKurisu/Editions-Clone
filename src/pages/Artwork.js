import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { generate } from 'shortid';
import { introActions } from 'modules/intro';
import { artworkActions } from 'modules/artwork';
import "./Artwork.scss";

const Artwork = ({
  artwork: { colors, title, details, src, formats },
  toggleIntro,
  toggleArtwork
}) => {
  const { innerWidth: width } = window;
  const [format, setFormat] = useState(formats[0]);
  
  const updateFormat = format => () => setFormat(format); 

  useEffect(() => {
    toggleIntro();
    toggleArtwork();
  }, []);

  return (
    <div className="artwork" style={{ background: colors.background }}>
      <div className="artwork-details">
        <div className="details-container">
          <h1 className="details-title">{title}</h1>
          <p>
            From <span>${format.price}.00</span>
            <span className="dash">—</span>
            <a>Buy Now</a>
          </p>
          <div className="details-artwork">
            <img src={src.main} />
          </div>
        </div>
      </div>
      <section className="artwork-preview">
        <figure>
          <img src={width < 768 ? src.details_small : src.details} />
        </figure>
      </section>
      <section className="artwork-purchase">
        <div className="artwork-purchase-container">
          <div className="artwork-framed flex">
            <img src={src.framed} />
          </div>
          <section className="flex">
            <div className="artwork-description">
              <h1 style={{ color: colors.background }}>{title}</h1>
              <p>{details.type} — Edition of 30</p>
              <p>
                Giclée fine art print on premium archival smooth paper, 290
                gsm, 21.5 mil. Print includes a white border for framing.
                Frame not included.
              </p>
              <ul>
                { formats.map(format => (
                  <li key={generate()} onClick={updateFormat(format)}>{format.dimensions} in</li>
                ))}
              </ul>
              <button>
                <span>
                  <span>Add to Cart</span>
                  <span className="dollar">$</span>
                  <span>{format.price}.00</span>
                </span>
              </button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

Artwork.propTypes = {
  artwork: PropTypes.object.isRequired,
  toggleIntro: PropTypes.func.isRequired,
  toggleArtwork: PropTypes.func.isRequired
}

const actionCreators = {
  toggleIntro: introActions.toggle,
  toggleArtwork: artworkActions.toggle
}

export default connect(null, actionCreators)(Artwork);