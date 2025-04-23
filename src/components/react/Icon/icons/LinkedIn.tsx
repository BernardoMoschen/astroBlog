import React from 'react';
import type { FC } from "react";
import type { IconProps } from "./icon";

export const LinkedIn: FC<IconProps> = (props) => {
    return (
        <svg {...props} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.98h4v12H3v-12Zm7 0h3.8v1.7h.05a4.15 4.15 0 0 1 3.73-2c4 0 4.74 2.63 4.74 6v6.3h-4v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-4v-12Z" />
        </svg>
    );
};