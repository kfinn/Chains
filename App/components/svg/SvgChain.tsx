import React from 'react';
import Svg, { Path } from 'react-native-svg';
import SvgChainLink from './SvgChainLink';

interface SvgChainProps {
  roll?: number;
}

export default function SvgChain({ roll = 0 }: SvgChainProps) {
  return (
    <Svg height="75" width="125">
      <SvgChainLink roll={roll} />
    </Svg>
  )
}
