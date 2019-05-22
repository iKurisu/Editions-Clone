const { innerWidth, innerHeight } = window;

const getOffset = (position, size, range) => range * (position / size - 1 / 2);

const getDisplacement = (e, range) => {
  const { clientX, clientY } = e;

  const x = getOffset(clientX, innerWidth, innerWidth / range);
  const y = getOffset(clientY, innerHeight, innerHeight / range);

  return { x, y };
};

export default getDisplacement;
