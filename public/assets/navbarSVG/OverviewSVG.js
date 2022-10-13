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
                d="M20 1.25a.75.75 0 01.75.75v9a.75.75 0 01-.75.75h-7a.75.75 0 01-.75-.75V2a.75.75 0 01.75-.75h7zm-11 0a.75.75 0 01.75.75v5a.75.75 0 01-.75.75H2A.75.75 0 011.25 7V2A.75.75 0 012 1.25h7zm0 9a.75.75 0 01.75.75v9a.75.75 0 01-.75.75H2a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75h7zm11 4a.75.75 0 01.75.75v5a.75.75 0 01-.75.75h-7a.75.75 0 01-.75-.75v-5a.75.75 0 01.75-.75h7z"
                stroke="#2B2D42"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Icon;
