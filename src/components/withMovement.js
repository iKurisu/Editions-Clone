import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getDisplacement from 'utils/getDisplacement';

const withMovement = Section => props => {
  const [displacement, setDisplacement] = useState({ x: 0, y: 0 });
  
  const displace = e => setDisplacement(getDisplacement(e, 55));

  return <Section {...props} displacement={displacement} displace={displace} />
}

withMovement.propTypes = {
  Section: PropTypes.element.isRequired
}

export default withMovement;