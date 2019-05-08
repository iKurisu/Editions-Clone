import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Button = ({ selectedFormat }) => (
  <button>
    <span>
      <span>Add to Cart</span>
      <span className="dollar">$</span>
      <span>{selectedFormat.price}.00</span>
    </span>
  </button>
);

Button.propTypes = {
  selectedFormat: PropTypes.object.isRequired
}

const mapState = ({ artwork: { format }}) => ({ selectedFormat: format });

export default connect(mapState)(Button);