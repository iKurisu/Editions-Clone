import React, { useState } from 'react';
import Side from './headers/Side';
import Navigation from './headers/Navigation';
import Panel from './headers/Panel';

const Headers = () => {
  const [showPanel, setPanel] = useState(false);

  const togglePanel = () => setPanel(!showPanel);

  return (
    <header>
      <Navigation showPanel={showPanel} togglePanel={togglePanel} />
      <Side />
      <Panel showPanel={showPanel} />
    </header>
  )
}

export default Headers;