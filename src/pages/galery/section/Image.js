import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { blackPanelActions } from 'modules/blackPanel';
import "./Image.scss"; 

const Image = ({ src, title, orientation, history, setPosition }) => {
  const route = `/${title.toLowerCase()}`;
  
  const goTo = e => {
    e.preventDefault();
    setPosition('-100%');
    setTimeout(() => history.push(route), 900);
  }
  
  return (
    <div className={`image-wrapper ${orientation}`}>
      <Link to={route} onClick={goTo}>
        <img src={src} />
      </Link>
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  setPosition: PropTypes.func.isRequired
}

const actionCreators = {
  setPosition: blackPanelActions.setPosition
}

export default withRouter(connect(null, actionCreators)(Image));