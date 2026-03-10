import React from "react";

/**
 * Responsive Container Component
 */
export default function Container({
  children,
  className = "",
  size = "default",
  padding = true,
}) {
  const sizes = {
    sm: "max-w-4xl",
    default: "max-w-7xl",
    lg: "max-w-[1400px]",
    full: "max-w-full",
  };

  const paddingStyles = padding ? "px-4 sm:px-6 lg:px-8" : "";

  return (
    <div className={`mx-auto ${sizes[size]} ${paddingStyles} ${className}`}>
      {children}
    </div>
  );
}
