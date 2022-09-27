import * as React from "react";

function ReviewsSVG(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.4 0h19.2c1.32 0 2.388 1.08 2.388 2.4L24 24l-4.8-4.8H2.4c-1.32 0-2.4-1.08-2.4-2.4V2.4C0 1.08 1.08 0 2.4 0zm0 16.8h17.796l.708.708.696.696V2.4H2.4v14.4zm11.4-2.4h-9V12h6.6l2.4 2.4zM9.168 7.356a.594.594 0 010-.852l2.124-2.124c.24-.24.612-.24.852 0l7.056 7.056V14.4h-2.964L9.168 7.356z"
        fill="#000"
      />
    </svg>
  );
}

export default ReviewsSVG;