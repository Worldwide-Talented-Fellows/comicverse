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
                d="M18.358 4.183H4.152c-.98 0-1.776.795-1.776 1.776v10.654c0 .98.795 1.776 1.776 1.776h14.206c.98 0 1.776-.795 1.776-1.776V5.96c0-.98-.795-1.776-1.776-1.776z"
                stroke="#fff"
                strokeWidth={1.776}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.134 6.847l-7.964 5.06a1.723 1.723 0 01-1.83 0l-7.964-5.06"
                stroke="#fff"
                strokeWidth={1.776}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Icon;
