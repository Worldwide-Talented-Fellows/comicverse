import * as React from 'react';

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
                d="M15.5 1C18.538 1 21 3.87 21 7.41c0 6.408-6.5 12.235-10 13.59C7.5 19.645 1 13.818 1 7.41 1 3.87 3.462 1 6.5 1c1.86 0 3.505 1.076 4.5 2.723a5.853 5.853 0 011.964-2.003A4.878 4.878 0 0115.5 1z"
                stroke="#101111"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Icon;
