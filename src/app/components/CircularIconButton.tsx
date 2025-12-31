"use client";

import { ReactNode } from "react";

type ButtonProps = {
    onClick: () => void;
    children: ReactNode;
    className?: string; // Allow extending styles
    "aria-label": string;
};

function CircularIconButton({ onClick, children, className = "", "aria-label": ariaLabel }: ButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex justify-center items-center w-10 md:w-12 h-10 md:h-12 rounded-3xl bg-zinc-600 cursor-pointer hover:bg-zinc-500 transition-colors ${className}`}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}

export default CircularIconButton;
