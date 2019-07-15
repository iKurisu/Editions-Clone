import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ toggle }) => (
  <header className="cart-header">
    <span className="cart-close" onClick={toggle}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 20">
        <path
          fillRule="evenodd"
          d="M31.2662428,40.9785534 L39.3979708,32.8468254 L40.4586309,
            33.9074856 L32.326903,42.0392136 L40.4586309,50.1709415 L39.3979708,
            51.2316017 L30.2055826,42.0392136 L31.2662428,40.9785534 Z"
          transform="translate(-30, -32)"
        />
      </svg>
    </span>
    <p>Cart</p>
  </header>
);

Header.propTypes = {
  toggle: PropTypes.func.isRequired
}

export default Header;