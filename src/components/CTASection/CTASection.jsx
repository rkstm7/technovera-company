import { Link } from "react-router-dom";
import "./CTASection.css";

export default function CTASection() {
  return (
    <section className="cta-root">
      {" "}
      <div className="cta-container">
        {" "}
        {/* LEFT HEADING */}
        <h2 className="cta-title">
          {" "}
          Want to <span className="highlight-orange">Discuss</span>{" "}
          <span className="highlight-blue">About A New Project?</span>{" "}
        </h2>{" "}
        {/* RIGHT TEXT */}
        <div className="cta-right">
          {" "}
          <p className="cta-subtext">
            {" "}
            Let’s bring your ideas to life ! Get in touch with us for tailored
            solutions and expert guidance to kickstart your project.{" "}
          </p>{" "}
          <Link to="/contact-us" className="cta-btn">
            {" "}
            Contact Us{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
