import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { blackPanelActions } from 'modules/blackPanel';
import { headersActions } from 'modules/headers';
import useIntersection from 'hooks/useIntersection';

const LinkedImage = ({
  src,
  title,
  setPosition,
  history,
  toggleSidesOpacity,
  toggleNavOpacity
}) => {
  const node = useRef(null);
  const isIntersecting = useIntersection(node, title === "BLOOM");

  const route = `/${title.replace(" ", "-").toLowerCase()}`;

  const goToRoute = e => {
    e.preventDefault();

    setPosition("-100%");
    toggleNavOpacity(0);
    setTimeout(toggleSidesOpacity, 500);
    setTimeout(() => history.push(route), 900);
  };

  return (
    <Link
      className={isIntersecting ? "" : "hide"}
      to={route}
      onClick={goToRoute}
    >
      <img ref={node} src={src} />
    </Link>
  );
};

LinkedImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setPosition: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  toggleSidesOpacity: PropTypes.func.isRequired,
  toggleNavOpacity: PropTypes.func.isRequired
}

const actionCreators = {
  setPosition: blackPanelActions.setPosition,
  toggleSidesOpacity: headersActions.toggleSidesOpacity,
  toggleNavOpacity: headersActions.toggleNavOpacity
};

export default withRouter(connect(null, actionCreators)(LinkedImage));