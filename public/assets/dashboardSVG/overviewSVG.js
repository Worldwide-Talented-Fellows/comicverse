
import * as React from "react";

function OverviewSVG(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 2.25a.75.75 0 01.75.75v9a.75.75 0 01-.75.75h-7a.75.75 0 01-.75-.75V3a.75.75 0 01.75-.75h7zm-11 0a.75.75 0 01.75.75v5a.75.75 0 01-.75.75H3A.75.75 0 012.25 8V3A.75.75 0 013 2.25h7zm0 9a.75.75 0 01.75.75v9a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75h7zm11 4a.75.75 0 01.75.75v5a.75.75 0 01-.75.75h-7a.75.75 0 01-.75-.75v-5a.75.75 0 01.75-.75h7z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default OverviewSVG;