// WAFloat.jsx
import { FaWhatsapp } from "react-icons/fa";
import "./WAFloat.css";

export default function WAFloat() {
  const phone = "918208385551";

  const message = `Hello, I am looking for services.

Please provide details about the following:

• Website Development
• Mobile App Development
• UI/UX Design
• Digital Marketing
• Branding & Logo Design

My Requirement:
--------------
• Project Type:
• Budget Range:
• Timeline:

Please get back to me.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float-button"
    >
      <FaWhatsapp />
    </a>
  );
}
