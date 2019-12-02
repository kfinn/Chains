import React from 'react';
import { Path } from 'react-native-svg';

interface SvgChainLinkProps {
  roll?: number;
}

export default function SvgChainLink({ roll = 0 }: SvgChainLinkProps) {
  let dy = Math.cos(roll) * 25;
  console.log(dy)

  if (Math.abs(dy) < 0.0001) {
    return <Path
      d="
        M 12.5 37.5
        h 50
      "
      stroke="black"
      strokeWidth="25"
      strokeLinecap="round"
    />
  }

  return <Path
      d={`
        M 12.5 37.5
        a 25 ${dy} 0 0 ${dy > 0 ? 1 : 0} 25 ${-dy}
        h 50
        a 25 ${dy} 0 0 ${dy > 0 ? 1 : 0} 0 ${2 * dy}
        h -50
        a 25 ${dy} 0 0 ${dy > 0 ? 1 : 0} -25 ${-dy}
        z
      `}
      stroke="black"
      strokeWidth="25"
      fill="transparent"
    />
}
