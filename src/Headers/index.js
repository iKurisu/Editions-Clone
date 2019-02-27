import React from 'react';
import Side from './Side';
import Navigation from './Navigation';
import Panel from './Panel';
import "./styles.scss";

class Headers extends React.Component {  
  state = {
    showPanel: false
  }

  togglePanel = e => {
    const { showPanel } = this.state;
    
    this.setState({
      showPanel: !showPanel
    })
  }
  
  render() {
    const { showPanel } = this.state;
    
    return (
      <header>
        <Navigation showPanel={showPanel} togglePanel={this.togglePanel} />
        <Side />
        <Panel showPanel={showPanel} />
      </header>
    );
  }
}

export default Headers;