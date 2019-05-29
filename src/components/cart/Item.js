import React from 'react';
import PropTypes from 'prop-types';
import './Item.scss';

const Item = ({ artwork: { title, src, orientation, format, amount, colors } }) => (
  <div className="cart-item">
    <div className="cart-item-image">
      <img className={orientation} src={src.main_small} />
    </div>
    <div className="cart-item-details">
      <div className="details-grid">
        <p className="cart-item-title" style={{ color: colors.font }}>{title}</p>
        <span className="cart-item-remove" />
        <p className="cart-item-format">{format.dimensions} in</p>
        <p className="cart-item-amount">{amount}</p>
        <p className="cart-item-price">${format.price * amount}.00</p>
      </div>
    </div>
  </div>
);

Item.propTypes = {
  artwork: PropTypes.object.isRequired 
};

export default Item;