import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cartActions } from 'modules/cart';
import Header from './cart/Header';
import Items from './cart/Items';
import Checkout from './cart/Checkout';
import './Cart.scss';

const Cart = ({ items, toggle }) => {
  return (
    <div className={`cart ${items.length > 0 ? '': 'empty'}`}>
      <div className="cart-overlay" onClick={toggle} />
      <section className="cart-container">
        <Header toggle={toggle} />
        <Items />
        <Checkout />
      </section>
    </div>
  )
}

Cart.propTypes = {
  items: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
}

const mapState = ({ cart }) => ({
  items: cart.items
})

const actionCreators = {
  toggle: cartActions.toggle
}

export default connect(mapState, actionCreators)(Cart);