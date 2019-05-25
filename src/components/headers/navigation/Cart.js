import React from "react";
import './Cart.scss';

const Cart = () => <div className="cart-button button top-right" />;

const areEqual = () => true;

export default React.memo(Cart, areEqual);
