import React from 'react';
import "./styles.scss";

const Cart = ({ click }) => (
  <div 
    className="cart-button button top-right"
    onClick={click} 
  />
);

export default Cart;