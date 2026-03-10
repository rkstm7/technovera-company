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
import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaLaravel,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaSass,
  FaFigma,
  FaWordpress,
  FaShopify,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiSpringboot,
  SiTailwindcss,
  SiMaterialdesign,
  SiGraphql,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiDigitalocean,
  SiGooglecloud,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiRedux,
  SiWebpack,
  SiVite,
  SiNpm,
  SiYarn,
  SiPostman,
  SiJira,
  SiSlack,
  SiTrello,
  SiNotion,
  SiElasticsearch,
  SiRabbitmq,
  SiNginx,
  SiApache,
  SiLinux,
  SiUbuntu,
} from "react-icons/si";

// Technology icon mapping
const techIconMap = {
  // Frontend
  react: FaReact,
  angular: FaAngular,
  vue: FaVuejs,
  "vue.js": FaVuejs,
  typescript: SiTypescript,
  javascript: FaJs,
  "next.js": SiNextdotjs,
  nextjs: SiNextdotjs,
  html: FaHtml5,
  html5: FaHtml5,
  css: FaCss3Alt,
  css3: FaCss3Alt,
  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,
  bootstrap: FaBootstrap,
  sass: FaSass,
  scss: FaSass,
  "material-ui": SiMaterialdesign,
  materialui: SiMaterialdesign,
  redux: SiRedux,
  webpack: SiWebpack,
  vite: SiVite,

  // Backend
  "node.js": FaNodeJs,
  nodejs: FaNodeJs,
  node: FaNodeJs,
  express: SiExpress,
  expressjs: SiExpress,
  python: FaPython,
  django: SiDjango,
  flask: SiFlask,
  java: FaJava,
  spring: SiSpringboot,
  springboot: SiSpringboot,
  php: FaPhp,
  laravel: FaLaravel,
  graphql: SiGraphql,

  // Database
  mongodb: SiMongodb,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  postgres: SiPostgresql,
  redis: SiRedis,
  firebase: SiFirebase,
  elasticsearch: SiElasticsearch,

  // Cloud & DevOps
  aws: FaAws,
  docker: FaDocker,
  kubernetes: SiKubernetes,
  jenkins: SiJenkins,
  "github actions": SiGithubactions,
  git: FaGitAlt,
  github: FaGitAlt,
  vercel: SiVercel,
  netlify: SiNetlify,
  heroku: SiHeroku,
  digitalocean: SiDigitalocean,
  "google cloud": SiGooglecloud,
  gcp: SiGooglecloud,
  nginx: SiNginx,
  apache: SiApache,
  linux: SiLinux,
  ubuntu: SiUbuntu,
  rabbitmq: SiRabbitmq,

  // Mobile
  flutter: SiFlutter,
  "react native": FaReact,
  reactnative: FaReact,
  android: FaAndroid,
  ios: FaApple,
  swift: SiSwift,
  kotlin: SiKotlin,

  // Tools
  figma: FaFigma,
  wordpress: FaWordpress,
  shopify: FaShopify,
  npm: SiNpm,
  yarn: SiYarn,
  postman: SiPostman,
  jira: SiJira,
  slack: SiSlack,
  trello: SiTrello,
  notion: SiNotion,
  // Note: VS Code, IntelliJ, Android Studio, Xcode icons don't exist in react-icons
  // They will use fallback category icons
};

// Get icon component for technology
const getTechIcon = (techName) => {
  const name = techName.toLowerCase().trim();
  return techIconMap[name] || null;
};

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

  // Static fallback data with multiple technologies
  const staticTechnologies = [
    // Frontend
    { _id: "1", name: "React", category: "frontend", proficiency: 95, isActive: true },
    { _id: "2", name: "Angular", category: "frontend", proficiency: 85, isActive: true },
    { _id: "3", name: "Vue.js", category: "frontend", proficiency: 80, isActive: true },
    { _id: "4", name: "Next.js", category: "frontend", proficiency: 90, isActive: true },
    { _id: "5", name: "TypeScript", category: "frontend", proficiency: 92, isActive: true },
    { _id: "6", name: "JavaScript", category: "frontend", proficiency: 98, isActive: true },
    { _id: "7", name: "HTML5", category: "frontend", proficiency: 100, isActive: true },
    { _id: "8", name: "CSS3", category: "frontend", proficiency: 95, isActive: true },
    { _id: "9", name: "Tailwind CSS", category: "frontend", proficiency: 90, isActive: true },
    { _id: "10", name: "Bootstrap", category: "frontend", proficiency: 88, isActive: true },
    { _id: "11", name: "Redux", category: "frontend", proficiency: 85, isActive: true },
    { _id: "12", name: "Webpack", category: "frontend", proficiency: 80, isActive: true },

    // Backend
    { _id: "13", name: "Node.js", category: "backend", proficiency: 95, isActive: true },
    { _id: "14", name: "Express", category: "backend", proficiency: 93, isActive: true },
    { _id: "15", name: "Python", category: "backend", proficiency: 88, isActive: true },
    { _id: "16", name: "Django", category: "backend", proficiency: 85, isActive: true },
    { _id: "17", name: "Flask", category: "backend", proficiency: 82, isActive: true },
    { _id: "18", name: "Java", category: "backend", proficiency: 80, isActive: true },
    { _id: "19", name: "Spring Boot", category: "backend", proficiency: 78, isActive: true },
    { _id: "20", name: "PHP", category: "backend", proficiency: 85, isActive: true },
    { _id: "21", name: "Laravel", category: "backend", proficiency: 83, isActive: true },
    { _id: "22", name: "GraphQL", category: "backend", proficiency: 87, isActive: true },

    // Database
    { _id: "23", name: "MongoDB", category: "database", proficiency: 92, isActive: true },
    { _id: "24", name: "MySQL", category: "database", proficiency: 90, isActive: true },
    { _id: "25", name: "PostgreSQL", category: "database", proficiency: 88, isActive: true },
    { _id: "26", name: "Redis", category: "database", proficiency: 85, isActive: true },
    { _id: "27", name: "Firebase", category: "database", proficiency: 87, isActive: true },
    { _id: "28", name: "Elasticsearch", category: "database", proficiency: 80, isActive: true },

    // Cloud
    { _id: "29", name: "AWS", category: "cloud", proficiency: 90, isActive: true },
    { _id: "30", name: "Google Cloud", category: "cloud", proficiency: 85, isActive: true },
    { _id: "32", name: "Vercel", category: "cloud", proficiency: 95, isActive: true },
    { _id: "33", name: "Netlify", category: "cloud", proficiency: 90, isActive: true },
    { _id: "34", name: "Heroku", category: "cloud", proficiency: 88, isActive: true },
    { _id: "35", name: "DigitalOcean", category: "cloud", proficiency: 85, isActive: true },

    // Mobile
    { _id: "36", name: "React Native", category: "mobile", proficiency: 92, isActive: true },
    { _id: "37", name: "Flutter", category: "mobile", proficiency: 88, isActive: true },
    { _id: "38", name: "Android", category: "mobile", proficiency: 85, isActive: true },
    { _id: "39", name: "iOS", category: "mobile", proficiency: 83, isActive: true },
    { _id: "40", name: "Swift", category: "mobile", proficiency: 80, isActive: true },
    { _id: "41", name: "Kotlin", category: "mobile", proficiency: 82, isActive: true },

    // DevOps
    { _id: "42", name: "Docker", category: "devops", proficiency: 90, isActive: true },
    { _id: "43", name: "Kubernetes", category: "devops", proficiency: 85, isActive: true },
    { _id: "44", name: "Jenkins", category: "devops", proficiency: 83, isActive: true },
    { _id: "45", name: "GitHub Actions", category: "devops", proficiency: 88, isActive: true },
    { _id: "46", name: "Git", category: "devops", proficiency: 95, isActive: true },
    { _id: "47", name: "Nginx", category: "devops", proficiency: 87, isActive: true },
    { _id: "48", name: "Linux", category: "devops", proficiency: 90, isActive: true },

    // Other Tools
    { _id: "49", name: "Figma", category: "other", proficiency: 92, isActive: true },
    { _id: "50", name: "WordPress", category: "other", proficiency: 88, isActive: true },
    { _id: "51", name: "Shopify", category: "other", proficiency: 85, isActive: true },
    { _id: "52", name: "Postman", category: "other", proficiency: 90, isActive: true },
    { _id: "53", name: "VS Code", category: "other", proficiency: 95, isActive: true },
    { _id: "54", name: "Jira", category: "other", proficiency: 87, isActive: true },
  ];

  // Use API data if available, otherwise use static data
  const techData = technologies.length > 0 ? technologies : staticTechnologies;

  // Debug logging
  console.log("Technologies Data:", techData);
  console.log("Loading:", loading);
  console.log("Error:", error);

  // Group by category
  const groupedTech = techData.reduce((acc, tech) => {
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
    itemListElement: techData.slice(0, 20).map((tech, index) => ({
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
        url="https://www.technoveraservices.com/technologies"
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
              <div className="stat-value">{techData.length}+</div>
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
                      {items.map((item, index) => {
                        const TechIcon = getTechIcon(item.name);
                        
                        return (
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
                                    {TechIcon ? (
                                      <TechIcon className="w-6 h-6 text-white" />
                                    ) : (
                                      <IconComponent className="w-5 h-5 text-white" />
                                    )}
                                  </div>
                                </div>
                              ) : TechIcon ? (
                                <div className="tech-card-icon-wrapper">
                                  <TechIcon className="tech-icon-colored" />
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
                        );
                      })}
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
