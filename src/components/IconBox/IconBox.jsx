import React from "react";
import { motion } from "framer-motion";

/**
 * Icon Box Component - Perfect for feature highlights
 */
export default function IconBox({
  icon,
  title,
  description,
  variant = "primary",
  className = "",
}) {
  const variants = {
    primary: "bg-blue-100 text-blue-600",
    secondary: "bg-purple-100 text-purple-600",
    success: "bg-green-100 text-green-600",
    gradient: "bg-gradient-to-br from-blue-500 to-purple-500 text-white",
  };

  return (
    <motion.div
      className={`text-center ${className}`}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`
          w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center
          ${variants[variant]}
          shadow-lg
        `}
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-3xl">{icon}</div>
      </motion.div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

      {description && <p className="text-gray-600">{description}</p>}
    </motion.div>
  );
}
