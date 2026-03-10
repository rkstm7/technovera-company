import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/**
 * Modal Component with smooth animations
 */
export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = "md",
  closeOnOverlay = true,
}) {
  const sizes = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    full: "max-w-full mx-4",
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOnOverlay ? onClose : undefined}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`
                bg-white rounded-2xl shadow-2xl w-full ${sizes[size]}
                max-h-[90vh] overflow-hidden pointer-events-auto
              `}
            >
              {/* Header */}
              {title && (
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </button>
                </div>
              )}

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

/**
 * Modal Body Component
 */
export function ModalBody({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

/**
 * Modal Footer Component
 */
export function ModalFooter({ children, className = "" }) {
  return (
    <div
      className={`p-6 border-t border-gray-200 flex justify-end gap-3 ${className}`}
    >
      {children}
    </div>
  );
}
