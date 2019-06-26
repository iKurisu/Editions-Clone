import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cartActions } from 'modules/cart';
import './Checkout.scss';

const Checkout = ({ items, toggle, emptyCart }) => {
  const subtotal = items.reduce((total, item) => {
    return total + item.format.price * item.amount;
  }, 0);
  
  return (
    <div className={`cart-checkout${items.length > 1 ? ' cart-border' : ''}`}>
      <div className="checkout-subtotal">
        <p>Subtotal</p>
        <p>${subtotal}.00</p>
      </div>
      <p className="checkout-details">Excluding tax + shipping</p>
      <button className="wide-button checkout-button" onClick={emptyCart}>Checkout</button>
      <button className="wide-button continue-shopping" onClick={toggle}>
        Continue Shopping
      </button>
    </div>
  )
}

Checkout.propTypes = { 
  items: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
  emptyCart: PropTypes.func.isRequired
};

const mapState = ({ cart }) => ({
  items: cart.items
})

const actionCreators = {
  toggle: cartActions.toggle,
  emptyCart: cartActions.emptyCart
}

export default connect(mapState, actionCreators)(Checkout);