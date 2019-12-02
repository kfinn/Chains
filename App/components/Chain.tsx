import React from 'react';
import SvgChain from './svg/SvgChain';

export default function Chain() {
  return <SvgChain
    rotation={0.4 * Math.PI}
    radius={10}
    length={10}
  />
}
