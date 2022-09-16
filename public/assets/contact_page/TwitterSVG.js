function Icon(props) {
    return (
        <svg
            width={20}
            height={17}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#prefix__clip0_6_13)">
                <path
                    d="M18.831.937s-.621 1.865-1.775 3.019c1.42 8.879-8.346 15.36-15.982 10.3 1.954.088 3.907-.534 5.327-1.777C1.962 11.148-.258 5.91 1.962 1.825c1.953 2.308 4.972 3.64 7.99 3.551-.798-3.729 3.552-5.86 6.216-3.373.977 0 2.663-1.066 2.663-1.066z"
                    stroke="#000"
                    strokeWidth={1.776}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="prefix__clip0_6_13">
                    <path fill="#fff" d="M0 0h20v17H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default Icon;
