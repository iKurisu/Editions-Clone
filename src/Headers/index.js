import React from 'react';
import Navigation from './Navigation';
import Panel from './Panel';
import "./styles.scss";

class Headers extends React.Component {  
  state = {
    showPanel: false
  }
  
  format(x) {
    return x < 10 ? `0${x}` : x;
  }

  togglePanel = e => {
    const { showPanel } = this.state;

    this.setState({
      showPanel: !showPanel
    })
  }
  
  render() {
    const { showPanel } = this.state;
    const { currentSection } = this.props; 
    
    return (
      <header>
        <Navigation togglePanel={this.togglePanel} />
        <div className="Side fixed fixed-left">Selected Artwork</div>
        <div className="Side fixed fixed-right">
          <span>2016 – P</span>
          <span className="margin-left">{`${this.format(currentSection)} / 12`}</span>
        </div>
        <Panel showPanel={showPanel} />
      </header>
    );
  }
}

export default Headers;