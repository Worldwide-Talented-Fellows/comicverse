import * as React from "react";

function StorySVG(props) {
  return (
    <svg
      width={26}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.235 22.882L1 6.647 6.647 1l16.235 16.235L25 25l-7.765-2.118z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default StorySVG;