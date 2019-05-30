import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cartActions } from "modules/cart";
import './Item.scss';

const Item = ({ artwork, removeItem, isLastItem, toggleCart }) => {
  const { title, src, orientation, format, amount, colors: {font} } = artwork;
  const [state, setState] = useState('');
  
  const handleClick = () => {
    const isLastOfItem = amount === 1; 
    setState(isLastOfItem ? 'remove-item' : 'update-item')

    setTimeout(() => {
      if (isLastItem) toggleCart()
      removeItem({ title, format })
      if (!isLastOfItem) setState('')
    }, isLastOfItem ? 900 : 500);
  }

  return (
    <div className={`cart-item ${state}`}>
    <div className="cart-item-image">
      <img className={orientation} src={src.main_small} />
    </div>
    <div className="cart-item-details">
      <div className="details-grid">
          <p className="cart-item-title" style={{ color: font }}>{title}</p>
          <span className="cart-item-remove" onClick={handleClick} />
        <p className="cart-item-format">{format.dimensions} in</p>
        <p className="cart-item-amount">{amount}</p>
        <p className="cart-item-price">${format.price * amount}.00</p>
      </div>
    </div>
  </div>
);
}

Item.propTypes = {
  artwork: PropTypes.object.isRequired,
  isLastItem: PropTypes.bool.isRequired,
  removeItem: PropTypes.func.isRequired,
  toggleCart: PropTypes.func.isRequired
};

const actionCreators = {
  removeItem: cartActions.removeItem,
  toggleCart: cartActions.toggle
};

export default connect(null, actionCreators)(Item);