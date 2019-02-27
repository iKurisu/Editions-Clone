import React from "react";
import Hamburger from "./Hamburger";
import Cross from "./Cross";
import Cart from "./Cart";
import "./styles.scss";

class Navigation extends React.Component {
  state = {
    showNavIcons: true,
    hamburgerIsActive: true,
    crossIsActive: false,
    lastToggle: null
  };

  componentDidMount() {
    window.addEventListener("wheel", this.wheel);
  }

  wheel = e => {
    const { showNavIcons } = this.state;

    if (e.deltaY > 0) {
      this.setState({ showNavIcons: false });
    } else if (e.deltaY < 0) {
      this.setState({ showNavIcons: true });
    }
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
    const { hamburgerIsActive, crossIsActive, showNavIcons } = this.state;

    return (
      <div className="Navigation">
        <Hamburger isActive={hamburgerIsActive} show={showNavIcons} click={this.click} />
        <Cross isActive={crossIsActive} click={this.click} />
        <Cart show={showNavIcons} />
      </div>
    );
  }
}

export default Navigation;
