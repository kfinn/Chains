import React from 'react';
import SvgChain from './svg/SvgChain';

export default function Chain() {
  return <SvgChain
    rotation={0.2 * Math.PI}
    roll={0.18 * Math.PI}
    radius={25}
    length={5}
  />
}
