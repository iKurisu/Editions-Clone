import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { blackPanelActions } from 'modules/blackPanel';
import "./BlackPanel.scss";

const BlackPanel = ({ toggled, position, setPosition }) => {  
  useEffect(() => () => {
    setPosition('-100%')
  }, [toggled])
  
  return (
    <div className="black-pannel" style={{ top: position }} />
  )
}

BlackPanel.propTypes = {
  toggled: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired,
  setPosition: PropTypes.func.isRequired
}

const mapState = ({ intro, blackPanel }) => ({
  toggled: intro.toggled,
  position: blackPanel.position,

})
const actionCreators = {
  setPosition: blackPanelActions.setPosition
}

export default connect(mapState, actionCreators)(BlackPanel);