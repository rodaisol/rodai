import React from 'react'
import type { SVGProps } from 'react'

export function ProiconsCheckboxChecked(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <rect width={16.5} height={16.5} x={3.75} y={3.75} rx={4}></rect>
        <path d="m16.512 9.107l-5.787 5.786l-3.237-3.232"></path>
      </g>
    </svg>
  )
}
