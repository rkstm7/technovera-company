import React from "react";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import Container from "../Container/Container";

/**
 * Reusable Section Component with consistent spacing and animations
 */
export default function Section({
  children,
  className = "",
  containerSize = "default",
  padding = "default",
  background = "white",
  animate = true,
  animation = "fadeUp",
}) {
  const paddingStyles = {
    none: "",
    sm: "py-8 sm:py-12",
    default: "py-12 sm:py-16 lg:py-20",
    lg: "py-16 sm:py-20 lg:py-28",
  };

  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    dark: "bg-gray-900 text-white",
    gradient: "bg-gradient-to-br from-blue-50 to-white",
    transparent: "bg-transparent",
  };

  const content = (
    <section
      className={`${paddingStyles[padding]} ${backgrounds[background]} ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );

  if (animate) {
    return <AnimatedSection animation={animation}>{content}</AnimatedSection>;
  }

  return content;
}

/**
 * Section Title Component
 */
export function SectionTitle({
  children,
  subtitle,
  centered = true,
  className = "",
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
      <div
        className={`h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mt-6 ${
          centered ? "mx-auto" : ""
        }`}
      ></div>
    </div>
  );
}
