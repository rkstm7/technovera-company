import React from "react";
import { motion } from "framer-motion";

/**
 * Enhanced Button Component with animations and variants
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  className = "",
  type = "button",
  fullWidth = false,
}) {
  const baseStyles =
    "font-semibold rounded-full transition-all duration-300 relative overflow-hidden";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    ghost: "text-blue-600 hover:bg-blue-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.button>
  );
}
