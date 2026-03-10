import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Monitor,
  Smartphone,
  ExternalLink,
  Github,
  Layers,
} from "lucide-react";
import SEO from "@/components/SEO/SEO";
import { staticData } from "../../data/staticData";
import "./Portfolio.css";

// Import website project images
import web1 from "../../assets/images/it_solutions/web1.jpg";
import web2 from "../../assets/images/it_solutions/web2.png";
import web3 from "../../assets/images/it_solutions/web3.jpg";

// Import mobile app project images
import app1 from "../../assets/images/it_solutions/app1.jpg";
import app2 from "../../assets/images/it_solutions/app2.webp";
import app3 from "../../assets/images/it_solutions/app3.webp";

// Import other project images
import ec1 from "../../assets/images/it_solutions/ecommerce1.webp";
import sd1 from "../../assets/images/it_solutions/sd1.jpg";
import ba1 from "../../assets/images/it_solutions/ba1.jpg";
import u1 from "../../assets/images/it_solutions/uiux1.jpg";
import d1 from "../../assets/images/it_solutions/digital1.jpg";

// Image mapping
const imageMap = {
  "/src/assets/images/it_solutions/web1.jpg": web1,
  "/src/assets/images/it_solutions/web2.png": web2,
  "/src/assets/images/it_solutions/web3.jpg": web3,
  "/src/assets/images/it_solutions/app1.jpg": app1,
  "/src/assets/images/it_solutions/app2.webp": app2,
  "/src/assets/images/it_solutions/app3.webp": app3,
  "/src/assets/images/it_solutions/ecommerce1.webp": ec1,
  "/src/assets/images/it_solutions/sd1.jpg": sd1,
  "/src/assets/images/it_solutions/ba1.jpg": ba1,
  "/src/assets/images/it_solutions/uiux1.jpg": u1,
  "/src/assets/images/it_solutions/digital1.jpg": d1,
};

export default function Portfolio() {
  const [tab, setTab] = useState("website");

  // Use static data and map images
  const projects = staticData.projects.map(project => ({
    ...project,
    thumbnail: imageMap[project.image] || project.image,
    isActive: true,
  }));

  /* ===============================
        FILTER PROJECTS BY CATEGORY
  =============================== */
  const websiteProjects = projects.filter(
    (p) => p.isActive && (p.category === "Web Development" || p.category === "website" || p.category === "web")
  );

  const mobileProjects = projects.filter(
    (p) =>
      p.isActive && (p.category === "Mobile Development" || p.category === "mobile" || p.category === "mobile-app")
  );

  const headingText =
    tab === "website"
      ? "Our Website Projects"
      : "Our Mobile Application Projects";

  const headingSub =
    tab === "website"
      ? "Explore our modern, scalable, and user-friendly website solutions built for seamless performance."
      : "Discover beautifully crafted mobile apps designed for efficiency, smooth user experience, and fast performance across devices.";

  /* ===============================
        CARD COMPONENT
  =============================== */
  const Card = ({ item, index }) => {
    return (
      <motion.article
        className="project-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -8 }}
      >
        <div className="project-image-wrapper">
          <img
            src={
              item.thumbnail ||
              item.images?.[0]?.url ||
              `https://via.placeholder.com/600x400?text=${encodeURIComponent(
                item.title
              )}`
            }
            alt={item.title}
            className="project-image"
          />
          <div className="project-overlay">
            <div className="project-actions">
              {item.liveUrl && (
                <motion.a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              )}
              {item.githubUrl && (
                <motion.a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>
          {item.client?.logo && (
            <div className="project-badge">
              <img src={item.client.logo} alt="Client" />
            </div>
          )}
        </div>

        <div className="project-content">
          <h3 className="project-title">{item.title}</h3>
          <p className="project-desc">
            {item.shortDescription ||
              item.description?.substring(0, 120) + "..."}
          </p>

          {item.technologies && item.technologies.length > 0 && (
            <div className="project-tech">
              {item.technologies.slice(0, 4).map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.article>
    );
  };

  if (projects.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 animate-pulse"></div>
          <div className="relative animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-primary"></div>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio - Our Projects",
    description:
      "Explore TechnoVera's portfolio of successful web development and mobile application projects.",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: projects.length,
      itemListElement: projects.slice(0, 10).map((project, index) => ({
        "@type": "CreativeWork",
        position: index + 1,
        name: project.title,
        description: project.shortDescription || project.description,
        url: project.liveUrl,
      })),
    },
  };

  /* ===============================
        VIEW
  =============================== */
  return (
    <>
      <SEO
        title="Portfolio - Our Projects"
        description="Showcasing our best work and successful projects. Explore modern websites, mobile applications, and custom software solutions built by TechnoVera."
        keywords="portfolio, web projects, mobile apps, case studies, client work, website development, app development"
        url="https://www.technoveraservices.com/portfolio"
        structuredData={structuredData}
      />
      <main className="portfolio-page">
        {/* HERO SECTION */}
        <motion.div
          className="portfolio-hero"
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
          <h1 className="portfolio-title">
            <span className="text-gradient">Our Portfolio</span>
          </h1>
          <p className="portfolio-subtitle">
            Showcasing our best work and successful projects
          </p>

          {/* Stats */}
          <motion.div
            className="portfolio-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="stat-item">
              <Layers className="stat-icon" />
              <div className="stat-value">{projects.length}+</div>
              <div className="stat-label">Total Projects</div>
            </div>
            <div className="stat-item">
              <Monitor className="stat-icon" />
              <div className="stat-value">{websiteProjects.length}+</div>
              <div className="stat-label">Websites</div>
            </div>
            <div className="stat-item">
              <Smartphone className="stat-icon" />
              <div className="stat-value">{mobileProjects.length}+</div>
              <div className="stat-label">Mobile Apps</div>
            </div>
          </motion.div>
        </motion.div>

        {/* TABS */}
        <motion.div
          className="portfolio-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="tabs-wrapper">
            <button
              className={`tab-btn ${tab === "website" ? "active" : ""}`}
              onClick={() => setTab("website")}
            >
              <Monitor className="w-5 h-5" />
              <span>Websites</span>
            </button>
            <button
              className={`tab-btn ${tab === "mobile" ? "active" : ""}`}
              onClick={() => setTab("mobile")}
            >
              <Smartphone className="w-5 h-5" />
              <span>Mobile Apps</span>
            </button>
          </div>
        </motion.div>

        {/* INTRO */}
        <motion.section
          className="portfolio-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="intro-title">{headingText}</h2>
          <p className="intro-text">{headingSub}</p>
        </motion.section>

        {/* PROJECTS GRID */}
        {tab === "website" && (
          <section className="projects-grid">
            {websiteProjects.length > 0 ? (
              websiteProjects.map((project, index) => (
                <Card key={project._id} item={project} index={index} />
              ))
            ) : (
              <motion.div
                className="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Monitor className="empty-icon" />
                <p>No website projects available at the moment.</p>
              </motion.div>
            )}
          </section>
        )}

        {tab === "mobile" && (
          <section className="projects-grid">
            {mobileProjects.length > 0 ? (
              mobileProjects.map((project, index) => (
                <Card key={project._id} item={project} index={index} />
              ))
            ) : (
              <motion.div
                className="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Smartphone className="empty-icon" />
                <p>No mobile projects available at the moment.</p>
              </motion.div>
            )}
          </section>
        )}
      </main>
    </>
  );
}
