import React from 'react';
import Hamburger from './Hamburger';
import Cross from './Cross';
import Cart from './Cart';
import "./styles.scss";

class Navigation extends React.Component {
  state = { 
    hamburgerIsActive: true,
    crossIsActive: false
  }

  click = e => {
    const { hamburgerIsActive, crossIsActive } = this.state;
    const { togglePanel } = this.props;

    togglePanel();

    this.setState({
      hamburgerIsActive: !hamburgerIsActive,
      crossIsActive: !crossIsActive
    })
  }

  render() {
    const { hamburgerIsActive, crossIsActive } = this.state;
    
    return (
      <div className="Navigation">
        <Hamburger isActive={hamburgerIsActive} click={this.click} />
        <Cross isActive={crossIsActive} click={this.click} />
        <Cart />
      </div>
    )
  }
} 

export default Navigation;