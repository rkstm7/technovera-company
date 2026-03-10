import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Tooltip Component
 */
export default function Tooltip({
  children,
  content,
  position = "top",
  delay = 200,
}) {
  const [isVisible, setIsVisible] = useState(false);
  let timeout;

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const handleMouseEnter = () => {
    timeout = setTimeout(() => setIsVisible(true), delay);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeout);
    setIsVisible(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className={`
              absolute ${positions[position]} z-50
              px-3 py-2 text-sm text-white bg-gray-900 rounded-lg
              whitespace-nowrap pointer-events-none
              shadow-lg
            `}
          >
            {content}
            <div
              className={`
              absolute w-2 h-2 bg-gray-900 transform rotate-45
              ${
                position === "top"
                  ? "bottom-[-4px] left-1/2 -translate-x-1/2"
                  : ""
              }
              ${
                position === "bottom"
                  ? "top-[-4px] left-1/2 -translate-x-1/2"
                  : ""
              }
              ${
                position === "left"
                  ? "right-[-4px] top-1/2 -translate-y-1/2"
                  : ""
              }
              ${
                position === "right"
                  ? "left-[-4px] top-1/2 -translate-y-1/2"
                  : ""
              }
            `}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
