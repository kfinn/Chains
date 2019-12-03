import React from 'react';
import { Path } from 'react-native-svg';
import Vector from '../../models/Vector';

interface SvgChainLinkProps {
  radius?: number;
  roll?: number;
  rotation?: number;
  x?: number;
  y?: number;
}

function radiansToDegrees(radians: number): number {
  return (radians / (2 * Math.PI)) * 360
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
  let rolledY = radius * Math.cos(roll)

  let normalizedOriginOffset = new Vector(radius / 2, radius * 1.5)
  let originOffset = normalizedOriginOffset.rotateBy(rotation)
  let origin = new Vector(x, y) //.add(originOffset)

  if (Math.abs(rolledY) < 0.001) {
    let normalizedVector = new Vector(radius * 4, 0)
    let vector = normalizedVector.rotateBy(rotation);

    return <Path
      d={`
        M ${origin.toSvgPath()}
        l ${vector.toSvgPath()}
      `}
      stroke="black"
      strokeWidth={radius}
      strokeLinecap="round"
    />
  }

  let normalizedStraightSegmentVector = new Vector(radius * 2, 0)
  let normalizedCurvedSegmentVectors = [
    new Vector(radius, -rolledY),
    new Vector(radius, rolledY),
    new Vector(-radius, rolledY),
    new Vector(-radius, -rolledY)
  ]

  let arcRadii = new Vector(radius, rolledY)
  let radiiRotation = radiansToDegrees(rotation)
  let straightSegmentVector = normalizedStraightSegmentVector.rotateBy(rotation)
  let curvedSegmentVectors = normalizedCurvedSegmentVectors.map((vector) => vector.rotateBy(rotation))

  let sweepFlag = rolledY > 0 ? "1" : "0"

  return <Path
      d={`
        M ${origin.toSvgPath()}
        a ${arcRadii.toSvgPath()} ${radiiRotation} 0 ${sweepFlag} ${curvedSegmentVectors[0].toSvgPath()}
        l ${straightSegmentVector.toSvgPath()}
        a ${arcRadii.toSvgPath()} ${radiiRotation} 0 ${sweepFlag} ${curvedSegmentVectors[1].toSvgPath()}
        a ${arcRadii.toSvgPath()} ${radiiRotation} 0 ${sweepFlag} ${curvedSegmentVectors[2].toSvgPath()}
        l ${straightSegmentVector.rotateBy(1 * Math.PI).toSvgPath()}
        a ${arcRadii.toSvgPath()} ${radiiRotation} 0 ${sweepFlag} ${curvedSegmentVectors[3].toSvgPath()}
        z
      `}
      stroke="black"
      strokeWidth={radius}
      fill="transparent"
    />
}
