import React from "react";
import { motion } from "framer-motion";

/**
 * Animated Progress Bar Component
 */
export default function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = true,
  variant = "primary",
  size = "md",
  className = "",
}) {
  const percentage = Math.min((value / max) * 100, 100);

  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-blue-600",
    success: "bg-gradient-to-r from-green-500 to-green-600",
    warning: "bg-gradient-to-r from-yellow-500 to-yellow-600",
    danger: "bg-gradient-to-r from-red-500 to-red-600",
    gradient: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
  };

  const sizes = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
  };

  return (
    <div className={className}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700">{label}</span>
          {showValue && (
            <span className="text-sm font-semibold text-gray-600">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      <div
        className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizes[size]}`}
      >
        <motion.div
          className={`${sizes[size]} ${variants[variant]} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
