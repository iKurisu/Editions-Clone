import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cartActions } from 'modules/cart';
import './Cart.scss';

const Cart = ({ toggle }) => {
  return (
    <div className="cart" onClick={toggle}>
      <div className="cart-overlay" />
      <section className="cart-container"></section>
    </div>
  )
}

Cart.propTypes = {
  toggle: PropTypes.func.isRequired
}

const actionCreators = {
  toggle: cartActions.toggle
}

export default connect(null, actionCreators)(Cart);