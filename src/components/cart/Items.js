import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { generate } from 'shortid';
import Item from './Item';
import './Items.scss';

const Items = ({ items }) => (
  <div className="items-container">
    <p className="empty-text">Your cart is currently empty.</p>
    { items.map(item => <Item key={generate()} artwork={item} />)}
  </div>
)

Items.propTypes = {
  items: PropTypes.array.isRequired
}

const mapState = ({ cart }) => ({
  items: cart.items
})

export default connect(mapState)(Items);