import React from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { cartActions } from 'modules/cart';
import './Cart.scss';

const Cart = ({ items, toggle }) => {
  const itemAmount = items.reduce((total, item) => {
    return total + item.amount
  }, 0); 

  return (
    <div 
      className={
        `cart-button button top-right ${itemAmount > 0 ? 'show-amount' : ''}`
      } 
      onClick={toggle}
    >
      <p className="cart-button-amount">{itemAmount ? itemAmount : ''}</p>
      <span />
    </div>
  );
}

Cart.propTypes = {
  items: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
}

const areEqual = (prevProps, nextProps) => {
  if (prevProps.hasOwnProperty('items')) {
    return prevProps.items.length === nextProps.items.length;
  }

  return true;
}

const mapState = ({ cart }) => ({
  items: cart.items
})

const actionCreators = {
  toggle: cartActions.toggle
}

export default React.memo(connect(mapState, actionCreators)(Cart), areEqual);
