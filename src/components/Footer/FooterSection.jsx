import React from "react";
import { Link } from "react-router-dom";

/* FontAwesome React Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// Import logos
import logo1 from "../../assets/images/logo1.jpg";
import techLogo from "../../assets/images/TechLogo2.jpg";

/**
 * FooterSection — Reusable sub-component
 * Updated with:
 * ✔ Social icons (LinkedIn, Facebook, Instagram, Twitter, YouTube)
 * ✔ Quick links inline
 * ✔ Address in a wrapped box
 * ✔ Email left | Mobile right
 */

export default function FooterSection({
  title,
  type,
  description,
  links,
  contactInfo,
}) {
  return (
    <div className="footer-section">
      {/* TITLE - Only show if not brand type */}
      {type !== "brand" && (
        <h3 className="footer-heading">
          {title}
        </h3>
      )}

      {/* BRAND SECTION */}
      {type === "brand" && (
        <>
          {/* LOGO SECTION */}
          <div className="footer-logo-container" style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <img
              src={logo1}
              alt="TechnoVera Icon"
              style={{ width: "50px", height: "50px", marginRight: "12px" }}
            />
            <img
              src={techLogo}
              alt="TechnoVera Logo"
              style={{ width: "auto", height: "35px", maxWidth: "200px" }}
            />
          </div>

          {/* SOCIAL ICONS ROW - Icons only, no links */}
          <div className="footer-social-row">
            <div className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="social-icon">
              <FontAwesomeIcon icon={faXTwitter} />
            </div>
            <div className="social-icon">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>

          <p className="footer-desc">{description}</p>
        </>
      )}

      {/* INLINE QUICK LINKS */}
      {type === "links" && (
        <ul className="footer-links-inline">
          {links?.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="footer-link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* CONTACT SECTION */}
      {type === "contact" && contactInfo && (
        <div className="footer-contact-wrapper">
          {/* Address Block */}
          <div className="footer-address-box">
            <FontAwesomeIcon icon={faLocationDot} className="text-blue-400" />
            <span className="footer-address-text">{contactInfo.address}</span>
          </div>

          {/* Email Block */}
          <div className="footer-single-contact">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-400" />
            <a href={`mailto:${contactInfo.email}`} className="hover-link">
              {contactInfo.email}
            </a>
          </div>

          {/* Phone Block */}
          <div className="footer-single-contact">
            <FontAwesomeIcon icon={faPhone} className="text-blue-400" />
            <a href={`tel:${contactInfo.phone}`} className="hover-link">
              {contactInfo.phone}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
