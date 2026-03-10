import React from "react";
import { motion } from "framer-motion";
import "./LoadingSpinner.css";

export default function LoadingSpinner({ size = "md", fullScreen = false }) {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  const spinner = (
    <motion.div
      className={`loading-spinner ${sizes[size]}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <div className="spinner-circle"></div>
    </motion.div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
}
