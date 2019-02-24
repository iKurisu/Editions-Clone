import React from "react";
import Hamburger from "./Hamburger";
import Cross from "./Cross";
import Cart from "./Cart";
import "./styles.scss";

class Navigation extends React.Component {
  state = {
    hamburgerIsActive: true,
    crossIsActive: false,
    lastToggle: null
  };

  click = e => {
    const { hamburgerIsActive, crossIsActive, lastToggle } = this.state;
    const { showPanel, togglePanel } = this.props;

    const now = new Date().getTime();

    if (
      (showPanel && now - lastToggle < 600) ||
      (!showPanel && now - lastToggle < 1400)
    ) {
      return;
    }

    togglePanel();

    this.setState({
      hamburgerIsActive: !hamburgerIsActive,
      crossIsActive: !crossIsActive,
      lastToggle: now
    });
  };

  render() {
    const { hamburgerIsActive, crossIsActive } = this.state;

    return (
      <div className="Navigation">
        <Hamburger isActive={hamburgerIsActive} click={this.click} />
        <Cross isActive={crossIsActive} click={this.click} />
        <Cart />
      </div>
    );
  }
}

export default Navigation;
