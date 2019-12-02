import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import SvgChainLink from './SvgChainLink';

interface SvgChainProps {
  length?: number;
  rotation?: number;
  radius?: number;
  roll?: number;
}

export default function SvgChain(
  {
    length = 1,
    rotation = 0,
    radius = 25,
    roll = 0
  }: SvgChainProps
) {
  let rotatedHeight = radius * 3;
  let rotatedWidth = radius * (3 * length + 2);

  let axisAlignedHeight = rotatedHeight * Math.cos(rotation) + rotatedWidth * Math.sin(rotation);
  let axisAlignedWidth = rotatedHeight * Math.sin(rotation) + rotatedWidth * Math.cos(rotation);

  return (
    <Svg height={axisAlignedHeight} width={axisAlignedWidth}>
    {
      Array.from(Array(length).keys()).map(function (index) {
        let rollOffset = (index % 4) * (Math.PI / 2);
        return <SvgChainLink
          key={index}
          x={index * radius * 3 * Math.cos(rotation)}
          y={index * radius * 3 * Math.sin(rotation)}
          radius={radius}
          roll={roll + rollOffset}
          rotation={rotation}
        />
      })
    }
    </Svg>
  )
}
