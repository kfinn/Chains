import React from 'react';
import Svg, { Path } from 'react-native-svg';
import SvgChainLink from './SvgChainLink';

interface SvgChainProps {
  length?: number;
  radius?: number;
  roll?: number;
}

export default function SvgChain({ length = 1, radius = 25, roll = 0 }: SvgChainProps) {
  return (
    <Svg height="75" width={radius * (3 * length + 2)}>
      {
        Array.from(Array(length).keys()).map(function (index) {
          let rollOffset = (index % 4) * (Math.PI / 2);
          return <SvgChainLink
            key={index}
            x={index * radius * 3}
            y={0}
            radius={radius}
            roll={roll + rollOffset}
          />
        })
      }
    </Svg>
  )
}
