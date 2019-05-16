import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Hamburger from './navigation/Hamburger';
import Cart from "./navigation/Cart";
import Cross from "./common/Cross";
import "./Navigation.scss";

const Navigation = ({ togglePanel, artworkToggled }) => {
  const [showIcons, toggleIcons] = useState(true);

  const wheel = ({ deltaY }) => toggleIcons(deltaY < 0);

  useEffect(() => {
    window.addEventListener("wheel", wheel);
    return () => window.removeEventListener("wheel", wheel);
  }, []);

  return (
    <div className="navigation" style={{ opacity: showIcons ? 1 : 0 }}>
      <Hamburger 
        isActive={!artworkToggled} 
        click={togglePanel}
      />
      <Cross 
        isActive={artworkToggled} 
        click={() => console.log('TODO')} 
      />
      <Cart />
    </div>
  );
}

Navigation.propTypes = {
  togglePanel: PropTypes.func.isRequired,
  artworkToggled: PropTypes.bool.isRequired
}

const mapState = ({ artwork }) => ({
  artworkToggled: artwork.toggled
})

export default connect(mapState)(Navigation);