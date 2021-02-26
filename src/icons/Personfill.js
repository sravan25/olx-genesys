import * as React from "react";

function FilePersonIcon(props) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M12 1H4a1 1 0 00-1 1v10.755S4 11 8 11s5 1.755 5 1.755V2a1 1 0 00-1-1zM4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4z"
            />
            <path fillRule="evenodd" d="M8 10a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
    );
}

export default FilePersonIcon;
