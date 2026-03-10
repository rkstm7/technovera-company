import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AdminPanel.css";

export default function AdminPanel() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the admin route path (everything after /admin)
  const adminPath = location.pathname.replace("/admin", "") || "/login";

  // Admin panel URL - direct to admin panel with login as default
  const ADMIN_PANEL_URL =
    import.meta.env.NODE_ENV === "production"
      ? "https://your-admin-panel-url.vercel.app" // Replace with your actual admin panel URL
      : "http://localhost:5174"; // Local admin panel dev server

  useEffect(() => {
    // Always redirect to login page if no specific path
    const targetPath =
      adminPath === "/" ? "/admin/login" : `/admin${adminPath}`;
    const fullAdminUrl = `${ADMIN_PANEL_URL}${targetPath}`;

    // Redirect to external admin panel
    window.location.href = fullAdminUrl;
  }, [adminPath, ADMIN_PANEL_URL]);

  return (
    <div className="admin-panel-container">
      <div className="admin-redirect-loading">
        <div className="loading-spinner"></div>
        <h2>Redirecting to Admin Login...</h2>
        <p>You will be redirected to the admin login page in a moment.</p>
        <button onClick={() => navigate("/")} className="back-to-home-btn">
          Back to Home
        </button>
      </div>
    </div>
  );
}
