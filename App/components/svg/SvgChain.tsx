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
    length = 3,
    rotation = 0,
    radius = 25,
    roll = 0
  }: SvgChainProps
) {
  let thicknessPoints = radius * 3;
  let lengthPoints = radius * (3 * length + 2);

  let axisAlignedWidth = Math.abs(thicknessPoints * Math.sin(rotation)) + Math.abs(lengthPoints * Math.cos(rotation));
  let axisAlignedHeight = Math.abs(thicknessPoints * Math.cos(rotation)) + Math.abs(lengthPoints * Math.sin(rotation));

  return (
    <Svg
      height={axisAlignedHeight}
      width={axisAlignedWidth}
      viewBox={`${-radius} ${-radius} ${axisAlignedWidth} ${axisAlignedHeight}`}
    >
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
