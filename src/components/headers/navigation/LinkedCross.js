import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { blackPanelActions } from 'modules/blackPanel';
import { artworkOperations } from 'modules/artwork';
import Cross from '../common/Cross';

const LinkedCross = ({ isActive, setPosition, closeArtwork, history }) => {
  const goBack = e => {
    e.preventDefault();
    setPosition('0');
    closeArtwork();
    setTimeout(() => {
      history.push('/');
      setPosition('100%')
    }, 900);
  }

  return (
    <Link to={'/'} onClick={goBack}>
      <Cross isActive={isActive} />
    </Link>
  )
}

LinkedCross.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setPosition: PropTypes.func.isRequired,
  closeArtwork: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

// const mapState = ({}) => ({

// })

const actionCreators = {
  setPosition: blackPanelActions.setPosition,
  closeArtwork: artworkOperations.closeArtwork
}

export default withRouter(connect(null, actionCreators)(LinkedCross));