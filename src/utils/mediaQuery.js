const mediaQuery = style => {
  const keys = Object.keys(style);
  let query;

  keys.forEach(key => {
    const media = window.matchMedia(key);
    if (media.matches) query = style[key]
  })
  
  return query;
};

export default mediaQuery;