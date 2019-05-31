import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Hamburger from './navigation/Hamburger';
import Cart from "./navigation/Cart";
import LinkedCross from './navigation/LinkedCross';
import { headersActions } from 'modules/headers';
import "./Navigation.scss";

const Navigation = ({togglePanel, artworkToggled, opacity, toggleOpacity}) => {
  const wheel = ({ deltaY }) => toggleOpacity(deltaY < 0);

  useEffect(() => {
    setTimeout(toggleOpacity, 800);
    window.addEventListener("wheel", wheel);
    return () => window.removeEventListener("wheel", wheel);
  }, []);

  return (
    <div className="navigation" style={{ opacity }}>
      <Hamburger isActive={!artworkToggled} click={togglePanel} />
      <LinkedCross isActive={artworkToggled} />
      <Cart />
    </div>
  );
}

Navigation.propTypes = {
  togglePanel: PropTypes.func.isRequired,
  artworkToggled: PropTypes.bool.isRequired,
  opacity: PropTypes.number.isRequired,
  toggleOpacity: PropTypes.func.isRequired
}

const mapState = ({ artwork, headers }) => ({
  artworkToggled: artwork.toggled,
  opacity: headers.nav.opacity
})

const actionCreators = {
  toggleOpacity: headersActions.toggleNavOpacity
}

export default connect(mapState, actionCreators)(Navigation);