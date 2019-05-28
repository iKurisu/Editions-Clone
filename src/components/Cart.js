import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cartActions } from 'modules/cart';
import Header from './cart/Header';
import Items from './cart/Items';
import './Cart.scss';

const Cart = ({ toggle }) => {
  return (
    <div className="cart">
      <div className="cart-overlay" onClick={toggle} />
      <section className="cart-container">
        <Header toggle={toggle} />
        <Items />
      </section>
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