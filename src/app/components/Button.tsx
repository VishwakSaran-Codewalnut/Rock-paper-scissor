import { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ternary" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
}

function Button({
    children,
    variant = "primary",
    leadingIcon,
    trailingIcon,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = "flex items-center justify-center transition-colors cursor-pointer";

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md gap-2",
        secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md gap-2",
        ternary: "bg-transparent text-gray-600 hover:text-gray-800 gap-2",
        icon: "w-10 md:w-12 h-10 md:h-12 rounded-3xl bg-zinc-600 hover:bg-zinc-500 text-white",
    };

    return (
        <button
            type="button"
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {leadingIcon && <span className="flex items-center">{leadingIcon}</span>}
            {children}
            {trailingIcon && <span className="flex items-center">{trailingIcon}</span>}
        </button>
    );
}

export default Button;
