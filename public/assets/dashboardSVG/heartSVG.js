import * as React from "react";

function HeartSVG(props) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.5 0C17.538 0 20 2.87 20 6.41c0 6.408-6.5 12.235-10 13.59C6.5 18.645 0 12.818 0 6.41 0 2.87 2.462 0 5.5 0 7.36 0 9.005 1.076 10 2.723A5.853 5.853 0 0111.964.72 4.878 4.878 0 0114.5 0z"
        fill="#D90429"
      />
    </svg>
  );
}

export default HeartSVG;