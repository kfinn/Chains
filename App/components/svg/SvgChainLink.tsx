import React from 'react';
import { Path } from 'react-native-svg';

interface SvgChainLinkProps {
  radius?: number;
  roll?: number;
  rotation?: number;
  x?: number;
  y?: number;
}


export default function SvgChainLink(
  {
    radius = 25,
    roll = 0,
    rotation = 0,
    x = 0,
    y = 0
  }: SvgChainLinkProps
) {
  let rotatedDy = Math.cos(roll) * radius;
  let rotatedDx = Math.sin(roll) * radius;

  

  if (Math.abs(dy) < 0.0001) {
    return <Path
      d={`
        M ${x + radius / 2} ${y + radius * 1.5}
        h ${radius * 4}
      `}
      stroke="black"
      strokeWidth={radius}
      strokeLinecap="round"
    />
  }

  return <Path
      d={`
        M ${x + radius / 2} ${y + radius * 1.5}
        a ${radius} ${dy} 0 0 ${dy > 0 ? 1 : 0} ${radius} ${-dy}
        h ${radius * 2}
        a ${radius} ${dy} 0 0 ${dy > 0 ? 1 : 0} 0 ${2 * dy}
        h ${-radius * 2}
        a ${radius} ${dy} 0 0 ${dy > 0 ? 1 : 0} ${-radius} ${-dy}
        z
      `}
      stroke="black"
      strokeWidth={radius}
      fill="transparent"
    />
}
