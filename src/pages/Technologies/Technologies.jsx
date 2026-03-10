import React from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO/SEO";
import { useAPI } from "../../hooks/useAPI";
import "./Technologies.css";
import {
  Code2,
  Database,
  Server,
  Cloud,
  Smartphone,
  Sparkles,
  Zap,
  Layers,
  Box,
} from "lucide-react";

// Icon mapping with colors
const iconMap = {
  frontend: { icon: Code2, color: "from-blue-500 to-cyan-500" },
  backend: { icon: Server, color: "from-green-500 to-emerald-500" },
  database: { icon: Database, color: "from-purple-500 to-pink-500" },
  cloud: { icon: Cloud, color: "from-orange-500 to-red-500" },
  mobile: { icon: Smartphone, color: "from-indigo-500 to-blue-500" },
  devops: { icon: Zap, color: "from-yellow-500 to-orange-500" },
  other: { icon: Box, color: "from-gray-500 to-slate-500" },
};

export default function Technologies() {
  const { data: technologies, loading, error } = useAPI("technologies");

  // Debug logging
  console.log("Technologies Data:", technologies);
  console.log("Loading:", loading);
  console.log("Error:", error);

  // Group by category
  const groupedTech = technologies.reduce((acc, tech) => {
    if (!tech.isActive) return acc;

    const category = tech.category || "other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tech);
    return acc;
  }, {});

  // Category titles
  const categoryTitles = {
    frontend: "Front-End & Mobile Technologies",
    backend: "Backend Technologies",
    database: "Database",
    cloud: "Server Cloud",
    devops: "DevOps & CI/CD",
    mobile: "Mobile Technologies",
    other: "Other Technologies",
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="relative">
          <div className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-r from-primary to-secondary blur-xl animate-pulse"></div>
          <div className="relative w-16 h-16 border-4 border-gray-200 rounded-full animate-spin border-t-primary"></div>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Technologies We Use",
    description:
      "Comprehensive list of technologies and tools used by TechnoVera Solutions",
    itemListElement: technologies.slice(0, 20).map((tech, index) => ({
      "@type": "SoftwareApplication",
      position: index + 1,
      name: tech.name,
      applicationCategory: tech.category,
    })),
  };

  return (
    <>
      <SEO
        title="Technologies - Our Tech Stack"
        description="Explore the cutting-edge technologies we use at TechnoVera Solutions including React, Node.js, Python, AWS, MongoDB, and more. Expert proficiency in frontend, backend, database, and cloud technologies."
        keywords="technologies, tech stack, React, Node.js, Python, MongoDB, AWS, frontend technologies, backend technologies, database, cloud computing, DevOps"
        url="https://www.technovera.com/technologies"
        structuredData={structuredData}
      />
      <main className="tech-page">
        {/* Hero Section */}
        <motion.div
          className="tech-hero"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute transform -translate-x-1/2 -top-6 left-1/2"
            animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-primary opacity-60" />
          </motion.div>
          <h1 className="tech-title">
            <span className="text-gradient">Our Technologies</span>
          </h1>
          <p className="tech-subtitle">
            Transforming your vision into reality through intelligent,
            high-performance technologies built for the digital world of
            tomorrow.
          </p>

          {/* Stats */}
          <motion.div
            className="tech-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="stat-item">
              <Layers className="w-6 h-6 text-primary" />
              <div className="stat-value">
                {Object.keys(groupedTech).length}+
              </div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-item">
              <Code2 className="w-6 h-6 text-secondary" />
              <div className="stat-value">{technologies.length}+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-item">
              <Zap className="w-6 h-6 text-primary" />
              <div className="stat-value">100%</div>
              <div className="stat-label">Expertise</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Technology Sections */}
        {Object.keys(groupedTech).length === 0 ? (
          <motion.div
            className="py-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Code2 className="w-20 h-20 mx-auto mb-4 text-gray-300" />
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No technologies available at the moment.
            </p>
          </motion.div>
        ) : (
          <div className="tech-sections">
            {Object.entries(groupedTech).map(
              ([category, items], sectionIndex) => {
                const categoryIcon = iconMap[category] || iconMap.other;
                const IconComponent = categoryIcon.icon;

                return (
                  <motion.section
                    className="tech-category"
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sectionIndex * 0.1 }}
                  >
                    <div className="category-header">
                      <div
                        className={`category-icon bg-gradient-to-br ${categoryIcon.color}`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="category-title">
                        {categoryTitles[category] || category}
                      </h2>
                    </div>

                    <div className="tech-grid">
                      {items.map((item, index) => (
                        <motion.div
                          className="tech-card"
                          key={item._id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ y: -5, scale: 1.02 }}
                        >
                          <div className="tech-card-content">
                            {item.logo ? (
                              <div className="tech-card-logo">
                                <img
                                  src={
                                    item.logo.startsWith("http")
                                      ? item.logo
                                      : `${import.meta.env.VITE_BACKEND_URL}${
                                          item.logo
                                        }`
                                  }
                                  alt={item.name}
                                  className="tech-logo-img"
                                  onError={(e) => {
                                    e.target.style.display = "none";
                                    e.target.nextElementSibling.style.display =
                                      "flex";
                                  }}
                                />
                                <div
                                  className={`tech-card-icon-fallback bg-gradient-to-br ${categoryIcon.color}`}
                                  style={{ display: "none" }}
                                >
                                  <IconComponent className="w-5 h-5 text-white" />
                                </div>
                              </div>
                            ) : (
                              <div
                                className={`tech-card-icon bg-gradient-to-br ${categoryIcon.color}`}
                              >
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                            )}
                            <h3 className="tech-name">{item.name}</h3>
                            {(item.proficiencyLevel || item.proficiency) && (
                              <div className="proficiency-bar">
                                <div className="proficiency-label">
                                  <span>Proficiency</span>
                                  <span className="proficiency-value">
                                    {item.proficiencyLevel || item.proficiency}%
                                  </span>
                                </div>
                                <div className="proficiency-track">
                                  <motion.div
                                    className={`proficiency-fill bg-gradient-to-r ${categoryIcon.color}`}
                                    initial={{ width: 0 }}
                                    whileInView={{
                                      width: `${
                                        item.proficiencyLevel ||
                                        item.proficiency
                                      }%`,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                );
              }
            )}
          </div>
        )}
      </main>
    </>
  );
}
