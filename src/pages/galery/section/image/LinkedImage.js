import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { headersOperations } from 'modules/headers';
import { appActions } from 'modules/app';
import useIntersection from 'hooks/useIntersection';

const LinkedImage = ({
  src,
  title,
  isClone,
  cloneIntersecting,
  initialValue,
  history,
  fadeGalery,
  toggleCloneIntersection
}) => {
  const node = useRef(null);
  const isIntersecting = useIntersection(node, initialValue);

  React.useEffect(() => {
    if (isClone) toggleCloneIntersection(isIntersecting);
  }, [isIntersecting])

  const route = `/${title.replace(" ", "-").toLowerCase()}`;

  const goToRoute = e => {
    e.preventDefault();
    fadeGalery(history, route);
  };

  return (
    <Link
      className={isIntersecting || cloneIntersecting ? "" : "hide"}
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
  isClone: PropTypes.bool,
  cloneIntersecting: PropTypes.bool,
  initialValue: PropTypes.bool,
  history: PropTypes.object.isRequired,
  fadeGalery: PropTypes.func.isRequired,
  toggleCloneIntersection: PropTypes.func
}

LinkedImage.defaultProps = {
  initialValue: false
}

const actionCreators = {
  fadeGalery: headersOperations.fadeGalery,
  toggleCloneIntersection: appActions.toggleCloneIntersection
};

export default withRouter(connect(null, actionCreators)(LinkedImage));