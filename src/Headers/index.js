import React from 'react';
import HamburgerButton from './HamburgerButton';
import CrossButton from './CrossButton';
import CartButton from './CartButton';
import "./styles.scss";

class Headers extends React.Component {
  state = {
    hamburgerIsActive: true,
    crossIsActive: false
  }
  
  format(x) {
    return x < 10 ? `0${x}` : x;
  }
  
  click = e => {
    const { hamburgerIsActive, crossIsActive } = this.state;

    console.log('click')
    
    this.setState({
      hamburgerIsActive: !hamburgerIsActive,
      crossIsActive: !crossIsActive
    });
  };
  
  render() {
    const { hamburgerIsActive, crossIsActive } = this.state;
    const { currentSection } = this.props; 
    
    return (
      <header>
        <div className="Navigation">
          <div className="Button">
            <HamburgerButton isActive={hamburgerIsActive} click={this.click} />
            <CrossButton isActive={crossIsActive} click={this.click} />
          </div>
          <CartButton click={this.click} />
        </div>
        <div className="Side fixed fixed-left">Selected Artwork</div>
        <div className="Side fixed fixed-right">
          <span>2016 – P</span>
          <span className="margin-left">{`${this.format(currentSection)} / 12`}</span>
        </div>
      </header>
    );
  }
}

export default Headers;