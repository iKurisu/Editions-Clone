import React from 'react';
import "./styles.scss";

const CartButton = ({ click }) => (
  <div className="CartButton top-right" onClick={click}/>
);

export default CartButton;