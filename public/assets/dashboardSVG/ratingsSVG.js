
import * as React from "react";

function RatingsSVG(props) {
  return (
    <svg
      width={11}
      height={11}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.88 8.2C8.2 9.64 10 5.5 10 5.5s-.36-1.26-2.16-2.34m-2.88-.72C2.44 2.8 1 5.5 1 5.5s.36.9 1.08 1.62l2.88-4.68z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.05 6.28a.9.9 0 001.029-1.47L5.5 5.5l-.45.78z"
        fill="#000"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.56 1l-6.12 9"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RatingsSVG;