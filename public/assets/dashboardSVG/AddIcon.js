import * as React from "react";

function AddIcon(props) {
  return (
    <svg
      width={46}
      height={46}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23 43C11.954 43 3 34.046 3 23S11.954 3 23 3s20 8.954 20 20-8.954 20-20 20z"
        fill="#D9D9D9"
      />
      <path
        d="M23 15v16m8-8H15M3 23c0 11.046 8.954 20 20 20s20-8.954 20-20S34.046 3 23 3 3 11.954 3 23z"
        stroke="#fff"
        strokeWidth={4.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AddIcon;