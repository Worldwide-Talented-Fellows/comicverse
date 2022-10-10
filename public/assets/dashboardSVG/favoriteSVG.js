import * as React from "react";

function FavoriteSVG(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.5 2C19.538 2 22 4.87 22 8.41c0 6.408-6.5 12.235-10 13.59C8.5 20.645 2 14.818 2 8.41 2 4.87 4.463 2 7.5 2c1.86 0 3.505 1.076 4.5 2.723a5.853 5.853 0 011.964-2.003A4.878 4.878 0 0116.5 2z"
        stroke="#101111"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FavoriteSVG;