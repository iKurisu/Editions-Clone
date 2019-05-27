import React from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { cartActions } from 'modules/cart';
import './Cart.scss';

const Cart = ({ toggle }) => <div 
  className="cart-button button top-right" 
  onClick={toggle}
/>;

Cart.propTypes = {
  toggle: PropTypes.func.isRequired
}

const areEqual = () => true;

const actionCreators = {
  toggle: cartActions.toggle
}

export default React.memo(connect(null, actionCreators)(Cart), areEqual);
