import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Checkout.scss';

const Checkout = ({ items }) => {
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
      <button className="wide-button checkout-button">Checkout</button>
      <button className="wide-button continue-shopping">
        Continue Shopping
      </button>
    </div>
  )
}

Checkout.propTypes = { 
  items: PropTypes.array.isRequired
};

const mapState = ({ cart }) => ({
  items: cart.items
})

export default connect(mapState)(Checkout);