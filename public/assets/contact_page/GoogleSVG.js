function Icon(props) {
    return (
        <svg
            width={25}
            height={26}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M12.5 2.063C6.46 2.063 1.562 6.96 1.562 13c0 6.04 4.898 10.938 10.938 10.938 6.04 0 10.938-4.898 10.938-10.938 0-6.04-4.898-10.938-10.938-10.938zm4.077 15.468c-.991.913-2.344 1.45-3.957 1.45A5.977 5.977 0 016.64 13c0-.967.233-1.88.638-2.688a5.975 5.975 0 015.342-3.296c1.611 0 2.964.593 4.001 1.558l-1.714 1.716c-.62-.593-1.409-.894-2.285-.894-1.557 0-2.876 1.053-3.347 2.466-.12.36-.188.742-.188 1.138 0 .396.068.779.188 1.138.471 1.413 1.79 2.466 3.345 2.466.805 0 1.489-.213 2.024-.572a2.75 2.75 0 001.193-1.806H12.62V11.91h5.632c.07.393.107.8.107 1.223 0 1.824-.652 3.355-1.782 4.397z"
                fill="#8D99AE"
            />
        </svg>
    );
}

export default Icon;
