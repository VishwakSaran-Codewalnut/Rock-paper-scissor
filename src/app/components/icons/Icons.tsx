
export const SunIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <title>Switch to dark mode</title>
            <path className="center" d="M12,7a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z" />
            <path className="left" d="M2,13H4a1,1,0,0,0,0-2H2a1,1,0,0,0,0,2Z" />
            <path className="right" d="M20,13h2a1,1,0,0,0,0-2H20a1,1,0,0,0,0,2Z" />
            <path className="top" d="M11,2V4a1,1,0,0,0,2,0V2a1,1,0,0,0-2,0Z" />
            <path className="bottom" d="M11,20v2a1,1,0,0,0,2,0V20a1,1,0,0,0-2,0Z" />
            <path
                className="top-left"
                d="M6,4.58A1,1,0,0,0,4.58,6L5.64,7.05A1,1,0,0,0,7.05,5.64Z"
            />
            <path
                className="bottom-right"
                d="M18.36,17A1,1,0,0,0,17,18.36L18,19.42A1,1,0,1,0,19.42,18Z"
            />
            <path
                className="top-right"
                d="M19.42,6A1,1,0,1,0,18,4.58L17,5.64a1,1,0,0,0,1.41,1.41Z"
            />
            <path
                className="bottom-left"
                d="M7.05,18.36A1,1,0,0,0,5.64,17L4.58,18A1,1,0,1,0,6,19.42Z"
            />
        </svg>
    );
};

export const MoonIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <title>Switch to light mode</title>
            <path
                className="center"
                d="M11,3.05A9,9,0,1,0,21,13a1,1,0,0,0-1.54-.95,5.4,5.4,0,0,1-7.47-7.44A1,1,0,0,0,11,3.05Z"
            />
        </svg>
    );
};

export const ResetIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
        </svg>
    );
};
