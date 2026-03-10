import React from "react";

/**
 * SectionTitle Component — TechnoVera Solutions Pvt. Ltd.
 * 
 * Props:
 *  - title: string (required)
 *  - subtitle: string (optional short description)
 *  - align: 'left' | 'center' (default: center)
 * 
 * Used for section headers across pages to maintain design consistency.
 */

export default function SectionTitle({ title, subtitle, align = "center" }) {
    const alignment =
        align === "left" ? "text-left items-start" : "text-center items-center";

    return (
        <div className={`flex flex-col ${alignment} mb-10`}>
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">{title}</h2>
            {subtitle && (
                <p className="text-gray-600 max-w-2xl">
                    {subtitle}
                </p>
            )}
            <div className="mt-3 h-1 w-20 bg-brand rounded-full"></div>
        </div>
    );
}
