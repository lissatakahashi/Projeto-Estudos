import React from 'react';

// Lightweight motion shim: if framer-motion is not installed, this provides
// basic passthrough components that accept animation props but render plain elements.
const create = <K extends keyof JSX.IntrinsicElements>(tag: K) => {
  const Component: React.FC<any> = ({ children, ...rest }) => React.createElement(tag as any, rest, children);
  return Component;
};

const motion = {
  div: create('div'),
  h1: create('h1'),
  p: create('p'),
};

export { motion };
