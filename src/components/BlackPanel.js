import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { blackPanelActions, blackPanelOperations } from 'modules/blackPanel';
import "./BlackPanel.scss";

const BlackPanel = ({ 
  introToggled, 
  artworkToggled,
  position, 
  canTransition, 
  setPosition, 
  relocate 
}) => {
  useEffect(() => {
    if (!introToggled && !artworkToggled) setTimeout(relocate, 900);
    return () => setPosition('-100%');
  }, [introToggled]);

  return (
    <div 
      className={`black-pannel ${canTransition ? '' : 'no-transition'}`} 
      style={{ transform: `translateY(${position})` }} 
    />
  )
}

BlackPanel.propTypes = {
  introToggled: PropTypes.bool.isRequired,
  artworkToggled: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired,
  canTransition: PropTypes.bool.isRequired,
  setPosition: PropTypes.func.isRequired,
  relocate: PropTypes.func.isRequired
}

const mapState = ({ intro, artwork, blackPanel }) => ({
  introToggled: intro.toggled,
  artworkToggled: artwork.toggled,
  position: blackPanel.position,
  canTransition: blackPanel.canTransition
})

const actionCreators = {
  setPosition: blackPanelActions.setPosition,
  relocate: blackPanelOperations.relocate
}

export default connect(mapState, actionCreators)(BlackPanel);