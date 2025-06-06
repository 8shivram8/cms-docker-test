import * as React from "react";
const Icon1 = (props) => (
    <svg
        width={40}
        height={40}
        viewBox="0 0 87 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#clip0_1848_11824)">
            <path
                d="M67 0H20C8.9543 0 0 8.9543 0 20V67C0 78.0457 8.9543 87 20 87H67C78.0457 87 87 78.0457 87 67V20C87 8.9543 78.0457 0 67 0Z"
                fill="#00142E"
            />
            <mask
                id="mask0_1848_11824"
                style={{
                    maskType: "luminance",
                }}
                maskUnits="userSpaceOnUse"
                x={15}
                y={14}
                width={58}
                height={58}
            >
                <path d="M73 14H15V72H73V14Z" fill="white" />
            </mask>
            <g mask="url(#mask0_1848_11824)">
                <path
                    d="M44 72C60.0167 72 73 59.0167 73 43C73 26.9833 60.0167 14 44 14C27.9833 14 15 26.9833 15 43C15 59.0167 27.9833 72 44 72Z"
                    fill="white"
                />
                <path
                    d="M30.877 44.8742L38.3764 52.3736L57.125 33.625"
                    stroke="#4457FF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </g>
        <defs>
            <clipPath id="clip0_1848_11824">
                <rect width={87} height={87} fill="white" />
            </clipPath>
        </defs>
    </svg>
);
export default Icon1;
