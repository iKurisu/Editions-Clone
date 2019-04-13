import React from "react";
import PropTypes from 'prop-types';

const Cart = ({ show }) => (
  <div
    className="cart-button button top-right"
    style={{ opacity: show ? 1 : 0 }}
  />
);

Cart.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default Cart;
