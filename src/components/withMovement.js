import React, { useState } from 'react';
import PropTypes from 'prop-types';

const withMovement = Section => props => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getOffset = (position, size, range) => {
    const percent = (position * 100) / size;
    return (range * percent) / 100 - range / 2;
  };

  const mouseMove = e => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    setX(getOffset(clientX, innerWidth, innerWidth / 50));
    setY(getOffset(clientY, innerHeight, innerHeight / 50));
  };

  return <Section {...props} translate={{x, y}} mouseMove={mouseMove} />
}

withMovement.propTypes = {
  Section: PropTypes.element.isRequired
}

export default withMovement;