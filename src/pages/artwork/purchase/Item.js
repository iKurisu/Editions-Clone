import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { artworkActions } from "modules/artwork";

const Item = ({ format, selectedFormat, setFormat }) => (
  <li
    className={format === selectedFormat ? "selected" : ""}  
    onClick={() => setFormat(format)}
  >
    {format.dimensions} in
  </li>
);

Item.propTypes = {
  format: PropTypes.object.isRequired,
  selectedFormat: PropTypes.object.isRequired,
  setFormat: PropTypes.func.isRequired
}

const mapState = ({ artwork }) => ({ selectedFormat: artwork.format });
const actionCreators = { setFormat: artworkActions.setFormat };

export default connect(mapState, actionCreators)(Item);

