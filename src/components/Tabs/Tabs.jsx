import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * Tabs Component
 */
export default function Tabs({ tabs, defaultTab = 0, className = "" }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className={className}>
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              relative px-6 py-3 font-semibold transition-colors whitespace-nowrap
              ${
                activeTab === index
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }
            `}
          >
            {tab.label}
            {activeTab === index && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {tabs[activeTab].content}
      </motion.div>
    </div>
  );
}
