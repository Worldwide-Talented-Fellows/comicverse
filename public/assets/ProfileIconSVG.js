import React from 'react';

function ProfileIconSVG(props) {
    return (
        <svg
            width={32}
            height={32}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#prefix__clip0_2_5)">
                <path
                    d="M32 16c0-8.837-7.163-16-16-16S0 7.163 0 16s7.163 16 16 16 16-7.163 16-16z"
                    fill="#D9D9D9"
                />
                <path
                    d="M23 25v-2a4 4 0 00-4-4h-6a4 4 0 00-4 4v2M16 15a4 4 0 100-8 4 4 0 000 8z"
                    stroke="#000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="prefix__clip0_2_5">
                    <path fill="#fff" d="M0 0h32v32H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default ProfileIconSVG;
