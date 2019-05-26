import { useRef, useState, useEffect } from 'react';

const useIntersection = (node, initialValue = false) => {
  const observer = useRef(null);
  const [isIntersecting, setIntersect] = useState(initialValue);

  const onIntersect = ([entry]) => setIntersect(entry.isIntersecting);

  const getObserver = () => {
    if (observer.current === null) {
      observer.current = new IntersectionObserver(onIntersect, {
        threshold: 0.05
      });
    }

    return observer.current;
  };

  useEffect(() => {
    const observer = getObserver();
    if (node.current) observer.observe(node.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
};

export default useIntersection;