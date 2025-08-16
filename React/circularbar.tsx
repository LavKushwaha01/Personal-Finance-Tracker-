"use client"

import { FC , useEffect, useState } from 'react'

interface Props {
  strokeWidth?: number
  sqSize?: number
  percentage: number
  animationTime?: number
}

const CircularProgressBar: FC<Props> = (props) => {
  const { strokeWidth = 15, sqSize = 100, percentage,animationTime= 1 } = props
  const radius = (sqSize - strokeWidth) / 2
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  const dashArray = radius * Math.PI * 2 

  const [dashOffset, setDashOffset] = useState(dashArray)

 useEffect(() => {
    const targetOffset = dashArray - (dashArray * percentage) / 100;
    requestAnimationFrame(() => {
      setDashOffset(targetOffset);
    });
  }, [percentage, dashArray]);

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        className="fill-none stroke-green-500"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="fill-none stroke-red-800"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeLinecap="round"
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
          transition: `stroke-dashoffset ${animationTime}s ease-in-out`,
        }}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        color="red"
        fill="#e2e8f0"
        className="text-2xl font-semibold"
      >
        {percentage}%
      </text>
    </svg>
  )
}

export default CircularProgressBar;

