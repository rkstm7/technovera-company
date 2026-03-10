import React from "react";

/**
 * ServiceCard Component — TechnoVera Solutions Pvt. Ltd.
 * Props:
 *  - title: string (service title)
 *  - description: string (service details)
 *  - icon: JSX element or string (optional icon)
 * 
 * Responsive Tailwind design with hover animation.
 */

export default function ServiceCard({ title, description, icon }) {
    return (
        <div className="bg-light p-6 rounded-xl shadow hover:shadow-md transition border border-gray-100 hover:border-brand">
            {/* ICON (optional) */}
            {icon && (
                <div className="text-brand mb-3 text-3xl flex items-center justify-center">
                    {icon}
                </div>
            )}

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-brand mb-2">{title}</h3>

            {/* DESCRIPTION */}
            <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
        </div>
    );
}
