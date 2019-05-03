import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { introActions } from 'modules/intro';

const Artwork = ({ toggle }) => {
  useEffect(() => {
    toggle();
  })

  return (
    <div className="artwork">
    </div>
  )
}

Artwork.propTypes = {
  toggle: PropTypes.func.isRequired
}

const actionCreators = {
  toggle: introActions.toggle
}

export default connect(null, actionCreators)(Artwork);