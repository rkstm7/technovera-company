/**
 * Global navigation structure for TechnoVera.
 * Used in public site and (later) admin panels.
 */

export const publicNav = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Technologies", path: "/technologies" },
    { name: "Blogs", path: "/blogs" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact-us" },
];

// Admin panel navigation
export const adminNav = [
    { name: "Dashboard", path: "/admin/dashboard", icon: "layout-dashboard" },
    { name: "Manage Services", path: "/admin/services", icon: "briefcase" },
    { name: "Manage Projects", path: "/admin/projects", icon: "folder-open" },
    { name: "Manage Users", path: "/admin/users", icon: "users" },
    { name: "Inquiries", path: "/admin/inquiries", icon: "inbox" },
];

// Super admin panel navigation
export const superAdminNav = [
    { name: "Dashboard", path: "/super/dashboard", icon: "layout-dashboard" },
    { name: "Companies", path: "/super/companies", icon: "building" },
    { name: "System Logs", path: "/super/logs", icon: "activity" },
    { name: "Manage Admins", path: "/super/admins", icon: "shield" },
];
