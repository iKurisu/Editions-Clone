import { useRef, useEffect } from 'react';
import getDisplacement from 'utils/getDisplacement';

const useDisplacement = (toggle, range, element) => {
  const node = element || useRef(element);
  const displacement = useRef({ x: 0, y: 0 });
  const animationId = useRef(null);

  const displace = e => displacement.current = getDisplacement(e, range);

  const updateElement = () => {
    const { x, y } = displacement.current;
    const { current: currentNode } = node;

    if (!currentNode) return;
    
    currentNode.style.transform = `translate(${x}px, ${y}px)`;
    animationId.current = requestAnimationFrame(updateElement);
  }

  useEffect(() => {
    if (toggle) updateElement();
    return () => cancelAnimationFrame(animationId.current);
  }, [toggle]);

  return [node, displace];
}

export default useDisplacement;