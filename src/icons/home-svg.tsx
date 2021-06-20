import * as React from "react"

function HomeSVG(props: React.SVGProps<SVGSVGElement & {color?: string}>) {
  return (
    <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        stroke={props.color || "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <path d="M41.99 59.95h11.992c.55 0 1-.45 1-1V34.014M17.058 34.013V58.95c0 .55.45 1 1 1h12.135" />
        <path d="M8.492 35.595L36.017 7.977l27.58 27.37M41.815 59.933V41.627h-11.59v18.306" />
      </g>
    </svg>
  )
}

export default HomeSVG
