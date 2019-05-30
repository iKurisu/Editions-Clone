import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from './Item';
import './Items.scss';

const Items = ({ items }) => (
  <div className={`items-container ${items.length > 0 ? '': 'empty'}`}>
    <p className="empty-text">Your cart is currently empty.</p>
    { items.map(item => 
        <Item key={item.id} artwork={item} isLastItem={items.length === 1} />
    )}
  </div>
)

Items.propTypes = {
  items: PropTypes.array.isRequired
}

const mapState = ({ cart }) => ({
  items: cart.items
})

export default connect(mapState)(Items);