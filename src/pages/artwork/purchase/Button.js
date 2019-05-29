import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cartOperations } from 'modules/cart';

const Button = ({ artwork, selectedFormat, addItem }) => {
  const addToCart = () => addItem({ 
    ...artwork, 
    format: selectedFormat,
    amount: 1
  });

  return (
    <button onClick={addToCart}>
      <span>
        <span>Add to Cart</span>
        <span className="dollar">$</span>
        <span>{selectedFormat.price}.00</span>
      </span>
    </button>
  );
}

Button.propTypes = {
  artwork: PropTypes.object.isRequired,
  selectedFormat: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired
}

const mapState = ({ artwork: { format }}) => ({ selectedFormat: format });

const actionCreators = {
  addItem: cartOperations.addItem
}

export default connect(mapState, actionCreators)(Button);