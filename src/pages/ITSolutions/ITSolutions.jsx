import { useEffect, useRef, useCallback, useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SEO from "@/components/SEO/SEO";
import { staticData } from "../../data/staticData";
import "./ITSolutions.css";

// Import images
import web1 from "../../assets/images/it_solutions/web1.jpg";
import app1 from "../../assets/images/it_solutions/app1.jpg";
import d1 from "../../assets/images/it_solutions/digital1.jpg";
import u1 from "../../assets/images/it_solutions/uiux1.jpg";
import sd1 from "../../assets/images/it_solutions/sd1.jpg";
import ba1 from "../../assets/images/it_solutions/ba1.jpg";
import gd1 from "../../assets/images/it_solutions/gd1.jpg";
import ec1 from "../../assets/images/it_solutions/ecommerce1.webp";

// Image mapping
const imageMap = {
  "/src/assets/images/it_solutions/web1.jpg": web1,
  "/src/assets/images/it_solutions/app1.jpg": app1,
  "/src/assets/images/it_solutions/digital1.jpg": d1,
  "/src/assets/images/it_solutions/uiux1.jpg": u1,
  "/src/assets/images/it_solutions/sd1.jpg": sd1,
  "/src/assets/images/it_solutions/ba1.jpg": ba1,
  "/src/assets/images/it_solutions/gd1.jpg": gd1,
  "/src/assets/images/it_solutions/ecommerce1.webp": ec1,
};

export default function ITSolutions() {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Use static data instead of API
  const activeServices = staticData.itSolutions
    .filter((s) => s.isActive)
    .sort((a, b) => a.order - b.order)
    .map(service => ({
      ...service,
      image: imageMap[service.images[0]] || service.images[0]
    }));

  /* AUTO SCROLL */
  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    if (isPaused) return;
    stopAutoScroll();

    intervalRef.current = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 5) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 260, behavior: "smooth" });
      }
    }, 3000);
  }, [stopAutoScroll, isPaused]);

  useEffect(() => {
    if (activeServices.length > 0) {
      startAutoScroll();
    }
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll, activeServices.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startAutoScroll();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const container = scrollRef.current;
      if (!container) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        container.scrollBy({ left: -300, behavior: "smooth" });
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        container.scrollBy({ left: 300, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "IT Solutions & Services",
    description:
      "Innovative IT solutions designed for growth including web development, software development, cloud solutions, and digital transformation services.",
    provider: {
      "@type": "Organization",
      name: "TechnoVera Solutions",
      url: "https://www.technovera.com",
    },
    areaServed: "IN",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: activeServices.slice(0, 10).map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  return (
    <>
      <SEO
        title="IT Solutions & Services"
        description="Innovative IT solutions designed for growth. TechnoVera delivers powerful, scalable, and future-ready IT solutions including web development, software development, cloud solutions, and digital transformation."
        keywords="IT solutions, IT services, web development services, software development, cloud solutions, digital transformation, enterprise IT, business technology"
        url="https://www.technovera.com/services"
        structuredData={structuredData}
      />
      <section className="its-section">
        <div className="its-container">
          {/* Header with Icons */}
          <motion.div
            className="its-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="its-badge">
              <Sparkles size={16} />
              <span>Smart IT Services</span>
            </div>

            <h2 className="its-title">
              Innovative IT Solutions Designed for Growth
            </h2>

            <p className="its-description">
              TechnoVera delivers powerful, scalable, and future-ready IT
              solutions tailored to your business goals. Our expert team
              leverages modern technology to streamline operations, enhance user
              experience, and accelerate your digital transformation journey.
            </p>
          </motion.div>

          {activeServices.length === 0 ? (
            <div className="its-empty">
              <p>No IT solutions available at the moment.</p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="its-scroll-wrapper"
                ref={scrollRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleMouseEnter}
                onTouchEnd={handleMouseLeave}
              >
                <div className="its-card-row">
                  {[...activeServices, ...activeServices].map((item, idx) => (
                    <motion.div
                      key={`${item._id || item.id}-${idx}`}
                      className="its-card"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{
                        y: -12,
                        scale: 1.02,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="card-border-glow"></div>

                      <img
                        src={item.image}
                        className="its-img"
                        alt={item.title}
                        loading="lazy"
                        onError={(e) => {
                          console.error("Image failed to load:", item.image);
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            item.title
                          )}&background=6366f1&color=fff&size=400`;
                        }}
                      />

                      <div className="its-overlay"></div>

                      <div className="its-card-content">
                        <div className="its-card-text">
                          <h3 className="its-card-titl">{item.title}</h3>
                          {item.description && (
                            <p className="its-card-dec">
                              {item.description.length > 100
                                ? `${item.description.substring(0, 100)}...`
                                : item.description}
                            </p>
                          )}
                        </div>
                        <motion.div
                          className="its-card-arrow"
                          whileHover={{ scale: 1.1, rotate: -45 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight size={20} />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeServices.length > 0 && (
            <motion.div
              className="its-scroll-indicator"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span>{isPaused ? "Paused" : "Auto-scrolling"}</span>
              <div className="its-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
