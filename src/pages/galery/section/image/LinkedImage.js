import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { blackPanelActions } from 'modules/blackPanel';
import useIntersection from 'hooks/useIntersection';

const LinkedImage = ({ src, title, setPosition, history }) => {
  const node = useRef(null);
  const isIntersecting = useIntersection(node, title === 'BLOOM');
  
  const route = `/${title.replace(' ', '-').toLowerCase()}`;

  const goToRoute = e => {
    e.preventDefault();
    setPosition("-100%");
    setTimeout(() => history.push(route), 900);
  };

  return (
    <Link 
      className={isIntersecting ? '' : 'hide'} 
      to={route} 
      onClick={goToRoute}
    >
      <img ref={node} src={src} />
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