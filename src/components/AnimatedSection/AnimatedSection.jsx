import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Reusable animated section component
 * Automatically animates when scrolled into view
 */
export default function AnimatedSection({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };

  const selectedAnimation = animations[animation] || animations.fadeUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={selectedAnimation}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
