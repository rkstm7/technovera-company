import React, { useEffect } from "react";
import "./PageOverlay.css";

export default function PageOverlay({ show }) {
  useEffect(() => {
    // disable scroll when overlay is active
    document.body.style.overflow = show ? "hidden" : "auto";
  }, [show]);

  return (
    <div className={`page-overlay ${show ? "show" : ""}`}>
      <div className="page-loader">
        <span>Loading...</span>
      </div>
    </div>
  );
}
