import * as React from "react";

function Icon(props) {
  return (
    <svg
      width={22}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.417 11C21.417 5.25 16.75.583 11 .583S.583 5.25.583 11c0 5.042 3.584 9.24 8.334 10.208v-7.083H6.833V11h2.084V8.396a3.65 3.65 0 013.646-3.646h2.604v3.125h-2.084c-.572 0-1.041.469-1.041 1.042V11h3.125v3.125h-3.125v7.24c5.26-.521 9.375-4.959 9.375-10.365z"
        fill="#8D99AE"
      />
    </svg>
  );
}

export default Icon;