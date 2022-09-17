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
                d="M15.345 2.386H6.466a4.44 4.44 0 00-4.44 4.439v8.879a4.44 4.44 0 004.44 4.439h8.879a4.44 4.44 0 004.44-4.44V6.826a4.44 4.44 0 00-4.44-4.44z"
                stroke="#000"
                strokeWidth={1.776}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.457 10.705a3.553 3.553 0 11-7.028 1.041 3.553 3.553 0 017.028-1.041zM15.789 6.38h.008"
                stroke="#000"
                strokeWidth={1.776}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Icon;
