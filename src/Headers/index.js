import React from 'react';
import Navigation from './Navigation';
import "./styles.scss";

class Headers extends React.Component {  
  format(x) {
    return x < 10 ? `0${x}` : x;
  }
  
  render() {
    const { currentSection } = this.props; 
    
    return (
      <header>
        <Navigation />
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