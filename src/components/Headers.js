import React, { useState, useRef } from 'react';
import Side from './headers/Side';
import Navigation from './headers/Navigation';
import Panel from './headers/Panel';

const Headers = () => {
  const [showPanel, setPanel] = useState(false);
  const lastToggle = useRef(0);

  const cantOpenPanel = now => !showPanel && now - lastToggle.current < 1400;
  const cantClosePanel = now => showPanel && now - lastToggle.current < 400;

  const togglePanel = () => {
    const now = Date.now();
    if (cantOpenPanel(now) || cantClosePanel(now)) return;

    setPanel(!showPanel);
    lastToggle.current = now;
  }

  return (
    <header>
      <Navigation showPanel={showPanel} togglePanel={togglePanel} />
      <Side />
      <Panel showPanel={showPanel} toggle={togglePanel} />
    </header>
  )
}

const areEqual = () => true;

export default React.memo(Headers, areEqual);