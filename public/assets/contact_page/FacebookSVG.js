function Icon(props) {
    return (
        <svg
            width={13}
            height={21}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#prefix__clip0_5_6)">
                <path
                    d="M11.184 1.386H8.521a4.44 4.44 0 00-4.44 4.439V8.49H1.419v3.551h2.664v7.103h3.551V12.04h2.664l.887-3.551H7.633V5.825a.888.888 0 01.888-.888h2.663V1.386z"
                    stroke="#000"
                    strokeWidth={1.776}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="prefix__clip0_5_6">
                    <path fill="#fff" d="M0 0h13v21H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default Icon;
