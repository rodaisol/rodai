import React from 'react'
import type { SVGProps } from 'react'

export function ProiconsCheckboxUnchecked(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <rect
        width={16.5}
        height={16.5}
        x={3.75}
        y={3.75}
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={4}
      ></rect>
    </svg>
  )
}
