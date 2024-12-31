"use client";

import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FiLoader } from "react-icons/fi";

export default function Button({
    label,
    onClick,
    href = null,
    variant = "primary",
    size = "medium",
    icon,
    loading = false,
    disabled = false,
}) {
    // Dynamic classes
    const baseStyles =
        "flex items-center justify-center font-semibold transition-all duration-300 ease-in-out tracking-wide";
    const variantStyles = {
        primary: "bg-yellow text-charcoal border-2 border-yellow hover:bg-yellow-600 text-satoshi",
        secondary: "bg-charcoal text-white border-2 border-charcoal hover:bg-charcoal-600 text-satoshi",
        outline: "bg-transparent text-white font-satoshi border-2 border-yellow hover:bg-yellow hover:text-charcoal",
    };
    const sizeStyles = {
        small: "px-6 py-3 text-md",
        medium: "px-8 py-4 text-lg",
        large: "px-10 py-5 text-xl",
    };

    const content = (
        <>
            {/* Loading Spinner */}
            {loading && <FiLoader className="animate-spin mr-2" />}
            {/* Icon and Label */}
            {icon && !loading && <span className="mr-2">{icon}</span>}
            {label}
        </>
    );

    if (href) {
        return (
            <a href={href}>
                <motion.a
                    whileHover={{ scale: !disabled && 1.05 }}
                    whileTap={{ scale: !disabled && 0.95 }}
                    className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
                        disabled ? "opacity-50 cursor-not-allowed" : ""
                    } rounded-none border-solid`}
                    aria-label={label}
                >
                    {content}
                </motion.a>
            </a>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: !disabled && 1.05 }}
            whileTap={{ scale: !disabled && 0.95 }}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
            } rounded-none border-solid`}
            aria-label={label}
        >
            {content}
        </motion.button>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    href: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    icon: PropTypes.element,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
};
