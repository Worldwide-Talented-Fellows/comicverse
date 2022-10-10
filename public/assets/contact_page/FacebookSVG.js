function Icon(props) {
    return (
        <svg
            width={26}
            height={26}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M23.417 13C23.417 7.25 18.75 2.583 13 2.583S2.583 7.25 2.583 13c0 5.042 3.584 9.24 8.334 10.208v-7.083H8.833V13h2.084v-2.604a3.65 3.65 0 013.646-3.646h2.604v3.125h-2.084c-.572 0-1.041.469-1.041 1.042V13h3.125v3.125h-3.125v7.24c5.26-.521 9.375-4.959 9.375-10.365z"
                fill="#8D99AE"
            />
        </svg>
    );
}

export default Icon;
