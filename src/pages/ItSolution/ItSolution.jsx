import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Layers,
} from "lucide-react";
import "./ItSolution.css";
import web1 from "../../assets/images/it_solutions/web1.jpg";
import web2 from "../../assets/images/it_solutions/web2.png";
import web3 from "../../assets/images/it_solutions/web3.jpg";
import app1 from "../../assets/images/it_solutions/app1.jpg";
import app2 from "../../assets/images/it_solutions/app2.webp";
import app3 from "../../assets/images/it_solutions/app3.webp";
import d1 from "../../assets/images/it_solutions/digital1.jpg";
import d2 from "../../assets/images/it_solutions/digital2.webp";
import d3 from "../../assets/images/it_solutions/digital3.jpg";
import u1 from "../../assets/images/it_solutions/uiux1.jpg";
import u2 from "../../assets/images/it_solutions/uiux2.jpg";
import u3 from "../../assets/images/it_solutions/uiux3.jpg";
import sd1 from "../../assets/images/it_solutions/sd1.jpg";
import sd2 from "../../assets/images/it_solutions/sd2.jpg";
import sd3 from "../../assets/images/it_solutions/sd3.jpg";
import ba1 from "../../assets/images/it_solutions/ba1.jpg";
import ba2 from "../../assets/images/it_solutions/ba2.png";
import ba3 from "../../assets/images/it_solutions/ba3.webp";
import gd1 from "../../assets/images/it_solutions/gd1.jpg";
import gd2 from "../../assets/images/it_solutions/gd2.jpg";
import gd3 from "../../assets/images/it_solutions/gd3.jpg";
import ec1 from "../../assets/images/it_solutions/ecommerce1.webp";
import ec2 from "../../assets/images/it_solutions/ecommerce2.webp";
import ec3 from "../../assets/images/it_solutions/ecommerce3.jpg";

export default function ItSolution() {
  const [active, setActive] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const services = [
    {
      title: "Website Development",
      images: [web1, web2, web3],
      desc: "We build modern, responsive, SEO-ready websites designed for performance, conversions, and branding.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "App Development",
      images: [app1, app2, app3],
      desc: "Native & hybrid apps for iOS and Android — optimized for speed, UI/UX, and business workflows.",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Digital Marketing",
      images: [d1, d2, d3],
      desc: "Grow your business visibility with SEO, social ads, branding, content marketing, and analytics.",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "UI/UX Design",
      images: [u1, u2, u3],
      desc: "Exceptional UI/UX crafted using modern design principles, user flows, and interaction psychology.",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Software Development",
      images: [sd1, sd2, sd3],
      desc: "Custom software tailored for automation, scaling, and high-performance enterprise operations.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Brand Awareness",
      images: [ba1, ba2, ba3],
      desc: "Promote your brand identity across social, digital, and offline channels with effective strategies.",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Graphics Designing",
      images: [gd1, gd2, gd3],
      desc: "High-quality creatives — posters, logos, social media posts, banners, and marketing designs.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "E-commerce Development",
      images: [ec1, ec2, ec3],
      desc: "Modern, secure, product-focused eCommerce stores with admin dashboards and payment systems.",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  // Debug: Log first image to check if imports are working
  useEffect(() => {
    console.log("First service image:", services[0].images[0]);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const nextSlide = () => {
    if (active) {
      setSlideIndex((prev) => (prev + 1) % active.images.length);
    }
  };

  const prevSlide = () => {
    if (active) {
      setSlideIndex((prev) =>
        prev === 0 ? active.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <main className="services-page">
        <motion.div
          className="services-hero"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-primary opacity-60" />
          </motion.div>
          <h1 className="services-title">
            <span className="text-gradient">Our Services</span>
          </h1>
          <p className="services-subtitle">
            Comprehensive IT solutions tailored to your business needs
          </p>

          <motion.div
            className="services-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="stat-item">
              <Layers className="stat-icon" />
              <div className="stat-value">{services.length}+</div>
              <div className="stat-label">Services</div>
            </div>
            <div className="stat-item">
              <Sparkles className="stat-icon" />
              <div className="stat-value">100%</div>
              <div className="stat-label">Quality</div>
            </div>
          </motion.div>
        </motion.div>

        <div className="services-container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => {
                  setActive(service);
                  setSlideIndex(0);
                }}
              >
                <div className="service-image-wrapper">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="service-image"
                    onError={(e) => {
                      console.error("Image failed to load:", service.images[0]);
                      e.target.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                    }}
                  />
                  <div className="service-overlay">
                    <div
                      className={`service-icon bg-gradient-to-br ${service.color}`}
                    >
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">
                    {service.desc.substring(0, 80)}...
                  </p>

                  <motion.button className="service-btn" whileHover={{ x: 5 }}>
                    <span>Explore Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {active && (
          <motion.div
            className="service-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.button
              className="modal-close"
              onClick={() => setActive(null)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              className="service-modal"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-slider">
                <motion.button
                  className="slider-btn left"
                  onClick={prevSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.img
                  key={slideIndex}
                  src={active.images[slideIndex]}
                  className="modal-image"
                  alt={active.title}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.button
                  className="slider-btn right"
                  onClick={nextSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>

                <div className="slider-indicators">
                  {active.images.map((_, idx) => (
                    <button
                      key={idx}
                      className={`indicator ${
                        idx === slideIndex ? "active" : ""
                      }`}
                      onClick={() => setSlideIndex(idx)}
                    />
                  ))}
                </div>
              </div>

              <div className="modal-content">
                <h2 className="modal-title">{active.title}</h2>
                <p className="modal-desc">{active.desc}</p>

                <motion.button
                  className="modal-cta"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
