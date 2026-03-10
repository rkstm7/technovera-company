import { motion } from "framer-motion";
import SEO from "@/components/SEO/SEO";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blog from "../Blog/Blog";
import CTASection from "../../components/CTASection/CTASection";
import HowWeWork from "../../components/HowWeWork/HowWeWork";
import BusinessSolutions from "../../components/BusinessSolutions/BusinessSolutions";
import BusinessDevelopment from "../../components/BusinessDevelopment/BusinessDevelopment";
import VisionMission from "../../components/VisionMission/VisionMission";
import ITSolutions from "../ITSolutions/ITSolutions";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import "./Home.css";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechnoVera Solutions",
    url: "https://www.technovera.com",
    logo: "https://www.technovera.com/logo.png",
    description:
      "Leading IT solutions provider offering web development, software development, CRM systems, and mobile applications.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/technovera/",
      "https://www.instagram.com/technovera/",
      "https://twitter.com/technovera",
      "https://www.facebook.com/technovera",
    ],
  };

  return (
    <>
      <SEO
        title="TechnoVera Solutions – Web Development, Software, IT & CRM Services"
        description="TechnoVera Solutions provides modern website development, custom software, CRM systems, mobile apps, and IT solutions for businesses. Trusted IT partner for scalable digital growth."
        keywords="web development, software development, CRM solutions, mobile apps, IT services, custom software, digital transformation, business solutions, TechnoVera"
        url="https://www.technovera.com/"
        structuredData={structuredData}
      />
      <div className="home-page">
        {/* HERO SECTION */}
        <motion.section
          className="home-section hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Hero />
        </motion.section>

        {/* Business Development Section */}
        <motion.section
          className="home-section business-dev-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <BusinessDevelopment />
        </motion.section>

        {/* Vision & Mission Section */}
        <motion.section
          className="home-section vision-mission-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <VisionMission />
        </motion.section>

        {/* IT Solutions Section */}
        <motion.section
          className="home-section it-solutions-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ITSolutions />
        </motion.section>

        {/* Why choose us Section */}
        <motion.section
          className="home-section why-choose-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <WhyChooseUs />
        </motion.section>

        {/* Business Solutions Section */}
        <motion.section
          className="home-section business-solutions-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <BusinessSolutions />
        </motion.section>

        {/* How We Work Section */}
        <motion.section
          className="home-section how-we-work-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <HowWeWork />
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="home-section cta-section"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <CTASection />
        </motion.section>

        {/* Blog */}
        <motion.section
          className="home-section blog-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Blog />
        </motion.section>

        {/* TESTIMONIALS */}
        <motion.section
          className="home-section testimonials-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Testimonials />
        </motion.section>
      </div>
    </>
  );
}
