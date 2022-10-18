import * as React from "react";

function Icon(props) {
  return (
    <svg
      width={58}
      height={55}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29 0l6.735 20.73h21.797L39.898 33.54l6.736 20.73L29 41.459 11.366 54.27l6.736-20.729L.468 20.73h21.797L29 0z"
        fill="#D9D9D9"
      />
    </svg>
  );
}

export default Icon;
