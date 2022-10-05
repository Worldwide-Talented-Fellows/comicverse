import * as React from "react";

function FriendsSVG(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 21v-2a4 4 0 014-4h6a4 4 0 014 4v2M15 11a4 4 0 110-8 4 4 0 010 8zM2 21v-2a4 4 0 013-3.87M8 3.13a4 4 0 000 7.75"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FriendsSVG;