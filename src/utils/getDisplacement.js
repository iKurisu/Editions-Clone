const getOffset = (position, size, range) => {
  const percent = (position * 100) / size;
  return (range * percent) / 100 - range / 2;
};

const getDisplacement = e => {
  const { clientX, clientY } = e;
  const { innerWidth, innerHeight } = window;

  const x = getOffset(clientX, innerWidth, innerWidth / 50);
  const y = getOffset(clientY, innerHeight, innerHeight / 50);

  return { x, y };
};

export default getDisplacement;
