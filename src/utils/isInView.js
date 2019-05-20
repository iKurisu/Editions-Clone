const { innerHeight, scrollY } = window;

const isInView = element => {
  const { offsetTop } = element.current;
  
  return innerHeight + scrollY > offsetTop;
}

export default isInView;