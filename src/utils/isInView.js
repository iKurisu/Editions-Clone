const isInView = element => {
  const { innerHeight, scrollY } = window;
  const { offsetTop } = element.current;

  return innerHeight + scrollY > offsetTop;
}

export default isInView;