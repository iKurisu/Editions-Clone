const getPixels = x => {
  const { innerWidth, innerHeight } = window;
  const value = x.slice(0, x.length - 2);
  const unit = x.slice(x.length - 2);

  switch (unit) {
    case 'vw': 
      return value * innerWidth / 100;
    case 'vh':
      return value * innerHeight / 100;
    default:
      return value;
  }
}

export default getPixels;