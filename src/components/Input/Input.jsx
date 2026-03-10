import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * Enhanced Input Component with animations and validation states
 */
export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  success,
  icon,
  className = "",
  required = false,
  disabled = false,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);

  const baseStyles =
    "w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 outline-none";
  const stateStyles = error
    ? "border-red-500 focus:border-red-600"
    : success
    ? "border-green-500 focus:border-green-600"
    : "border-gray-300 focus:border-blue-500";
  const disabledStyles = disabled
    ? "bg-gray-100 cursor-not-allowed"
    : "bg-white";

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}

        <motion.input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            ${baseStyles}
            ${stateStyles}
            ${disabledStyles}
            ${icon ? "pl-10" : ""}
          `}
          animate={{
            scale: isFocused ? 1.02 : 1,
          }}
          transition={{ duration: 0.2 }}
          {...props}
        />
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}

      {success && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-500 text-sm mt-1"
        >
          {success}
        </motion.p>
      )}
    </div>
  );
}

/**
 * Textarea Component
 */
export function Textarea({
  label,
  placeholder,
  value,
  onChange,
  error,
  rows = 4,
  className = "",
  required = false,
  ...props
}) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 transition-all duration-300 outline-none resize-none"
        {...props}
      />

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
