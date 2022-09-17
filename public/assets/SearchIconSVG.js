function SearchIconSVG(props) {
    return (
        <svg
            width={20}
            height={20}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                clipPath="url(#prefix__clip0_1_2)"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M13.875 13.875l4.5 4.5M8.25 15.375a7.125 7.125 0 100-14.25 7.125 7.125 0 000 14.25z" />
            </g>
            <defs>
                <clipPath id="prefix__clip0_1_2">
                    <path fill="#fff" d="M0 0h20v20H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default SearchIconSVG;
