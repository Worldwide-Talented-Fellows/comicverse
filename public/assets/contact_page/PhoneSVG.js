function Icon(props) {
    return (
        <svg
            width={21}
            height={21}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#prefix__clip0_12_19)">
                <path
                    d="M19.358 15.123v2.664a1.775 1.775 0 01-1.935 1.775 17.571 17.571 0 01-7.663-2.726 17.313 17.313 0 01-5.327-5.327 17.571 17.571 0 01-2.726-7.697 1.776 1.776 0 011.767-1.936h2.664a1.776 1.776 0 011.776 1.527c.112.853.32 1.69.621 2.495a1.776 1.776 0 01-.4 1.873L7.009 8.9a14.205 14.205 0 005.327 5.327l1.128-1.127a1.776 1.776 0 011.873-.4c.806.3 1.643.51 2.495.622a1.775 1.775 0 011.527 1.802z"
                    stroke="#fff"
                    strokeWidth={1.776}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="prefix__clip0_12_19">
                    <path fill="#fff" d="M0 0h21v21H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default Icon;
