import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAPI } from "../../hooks/useAPI";
import "./Testimonials.css";

export default function Testimonials() {
  const { data: apiTestimonials, loading } = useAPI("testimonials");

  // Filter active testimonials and transform data
  const testimonials = apiTestimonials
    .filter((t) => t.isActive)
    .map((t) => ({
      quote: t.content,
      name: t.name,
      role: `${t.position || "Client"}${t.company ? `, ${t.company}` : ""}`,
      img: t.image
        ? t.image.startsWith("http")
          ? t.image
          : `${import.meta.env.VITE_BACKEND_URL}${t.image}`
        : `https://ui-avatars.com/api/?name=${encodeURIComponent(
            t.name
          )}&background=6366f1&color=fff&size=200`,
      rating: t.rating || 5,
    }));

  // === Group into slides of 3 cards ===
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    slides.push(testimonials.slice(i, i + 3));
  }

  const [index, setIndex] = useState(0);

  // Auto Slide every 6 seconds
  useEffect(() => {
    if (slides.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  if (loading) {
    return (
      <section className="testimonials-root">
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null; // Don't show section if no testimonials
  }

  return (
    <section className="testimonials-root">
      {/* Heading */}
      <div className="testimonials-header">
        <h2 className="testimonials-title">What Our Clients Say About Us</h2>
        <h3 className="testimonials-subtitle">
          Trusted Partners. Real Results.
        </h3>
      </div>

      {/* Slider */}
      <div className="testimonials-multi-slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="testimonials-row"
          >
            {slides[index].map((item, i) => (
              <div key={i} className="testimonial-card multi-card">
                <div className="testimonial-quote-icon">❝</div>

                <p className="testimonial-text">{item.quote}</p>

                <div className="testimonial-author">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="testimonial-avatar"
                  />
                  <div>
                    <h4 className="testimonial-name">{item.name}</h4>
                    <p className="testimonial-role">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="testimonials-dots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </section>
  );
}
