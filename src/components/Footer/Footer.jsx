import { publicNav } from "../../_nav";
import FooterSection from "./FooterSection";
import "./Footer.css";
import footerImg from "@/assets/images/footer/footer1.jpg";

/**
 * Footer — TechnoVera Solutions Pvt. Ltd.
 * Modern, responsive, with image background + modular sections.
 */

export default function Footer() {
  return (
    <footer className="footer-root">
      {/* Background Image */}
      <div className="footer-bg">
        <img src={footerImg} alt="Footer Background" className="footer-img" />
        <div className="footer-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="footer-container">
        {/* Social Icons + Branding */}
        <FooterSection
          title="TechnoVera"
          type="brand"
          description="TechnoVera empowers innovation through intelligent design and next-gen technology. We create scalable, secure, and smart digital solutions for businesses worldwide."
        />

        {/* Inline Quick Links */}
        <FooterSection
          className="quick-link"
          title="Quick Links"
          type="links"
          links={publicNav}
        />

        {/* Contact Block */}
        <FooterSection
          title="Contact"
          type="contact"
          contactInfo={{
            address: "248, SICOF Flatted Building, MIDC, Satpur Colony, Nashik, Maharashtra, Pin Code- 422007",
            email: "info@technoveraservices.com",
            phone: "+91 9762263417",
          }}
        />
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <a href="/">
          <p>
            © 2013-{new Date().getFullYear()} TechnoVera — All Rights
            Reserved.
          </p>
        </a>
      </div>
    </footer>
  );
}
