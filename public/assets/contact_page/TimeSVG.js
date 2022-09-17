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
                d="M11.143 19.803a8.879 8.879 0 100-17.757 8.879 8.879 0 000 17.757z"
                stroke="#fff"
                strokeWidth={1.776}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.143 5.597v5.327l3.551 1.776"
                stroke="#fff"
                strokeWidth={1.776}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Icon;
