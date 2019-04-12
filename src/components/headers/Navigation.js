import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Hamburger from './navigation/Hamburger';
import Cross from "./navigation/Cross";
import Cart from "./navigation/Cart";
import "./Navigation.scss";

const Navigation = ({ showPanel, togglePanel }) => {
  const [showIcons, toggleIcons] = useState(true);
  const [hamburgerIsActive, setHamburger] = useState(true);
  const [lastToggle, setLastToggle] = useState(0);

  const wheel = ({ deltaY }) => toggleIcons(deltaY < 0);

  const cantClosePanel = now => showPanel && now - lastToggle < 400;
  const cantOpenPanel = now => !showPanel && now - lastToggle < 1400;

  const click = () => {
    const now = Date.now();

    if (cantClosePanel(now) || cantOpenPanel(now)) return;

    togglePanel();
    setHamburger(!hamburgerIsActive);
    setLastToggle(now);
  }

  useEffect(() => {
    window.addEventListener("wheel", wheel);
    return () => window.removeEventListener("wheel", wheel);
  }, []);

  return (
    <div className="Navigation">
      <Hamburger 
        isActive={hamburgerIsActive} 
        show={showIcons}
        click={click}
      />
      <Cross isActive={!hamburgerIsActive} click={click} />
      <Cart show={showIcons} />
    </div>
  );
}

Navigation.propTypes = {
  showPanel: PropTypes.bool.isRequired,
  togglePanel: PropTypes.func.isRequired
}

export default Navigation;