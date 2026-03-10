import React from "react";
import { motion } from "framer-motion";

/**
 * Enhanced Card Component with hover effects
 */
export default function Card({
  children,
  className = "",
  hover = true,
  gradient = false,
  onClick,
}) {
  const baseStyles =
    "bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300";
  const hoverStyles = hover ? "hover:shadow-2xl hover:-translate-y-2" : "";
  const gradientStyles = gradient
    ? "bg-gradient-to-br from-white to-blue-50"
    : "";

  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}
      onClick={onClick}
      whileHover={hover ? { y: -8 } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Card Header Component
 */
export function CardHeader({ children, className = "" }) {
  return (
    <div className={`p-6 border-b border-gray-100 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Card Body Component
 */
export function CardBody({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

/**
 * Card Footer Component
 */
export function CardFooter({ children, className = "" }) {
  return (
    <div className={`p-6 border-t border-gray-100 ${className}`}>
      {children}
    </div>
  );
}
