import React from "react";
import { motion } from "framer-motion";

/**
 * Badge Component for labels and tags
 */
export default function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
  animate = true,
}) {
  const variants = {
    primary: "bg-blue-100 text-blue-700",
    secondary: "bg-gray-100 text-gray-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
    gradient: "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const badge = (
    <span
      className={`
      inline-flex items-center font-semibold rounded-full
      ${variants[variant]}
      ${sizes[size]}
      ${className}
    `}
    >
      {children}
    </span>
  );

  if (animate) {
    return (
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {badge}
      </motion.span>
    );
  }

  return badge;
}
