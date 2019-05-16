import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { blackPanelActions } from 'modules/blackPanel';

const LinkedImage = ({ src, title, setPosition, history }) => {
  const route = `/${title.toLowerCase()}`;

  const goToRoute = e => {
    e.preventDefault();
    setPosition("-100%");
    setTimeout(() => history.push(route), 900);
  };

  return (
    <Link to={route} onClick={goToRoute}>
      <img src={src} />
    </Link>
  );
}

LinkedImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setPosition: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

const actionCreators = {
  setPosition: blackPanelActions.setPosition
};

export default withRouter(connect(null, actionCreators)(LinkedImage));