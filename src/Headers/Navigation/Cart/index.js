import React from 'react';
import "./styles.scss";

const Cart = ({ show, click }) => (
  <div 
    className="cart-button button top-right"
    onClick={click} 
    style={{ opacity: show ? 1 : 0 }}
  />
);

export default Cart;