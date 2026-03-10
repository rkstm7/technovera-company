import React from "react";
import {
  Twitter,
  Linkedin,
  Instagram,
  Sparkles,
  Users,
  Target,
  Award,
} from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SEO from "@/components/SEO/SEO";
import "./WhoWeAre.css";
import { staticData } from "../../data/staticData";

// Import images
import founderImage from "../../assets/images/pages/founder.png";
import coFounderImage from "../../assets/images/co_founder.jpeg";
import whoWeAreImage from "../../assets/images/pages/whoweare.jpg";

// Image mapping
const imageMap = {
  "/src/assets/images/pages/founder.png": founderImage,
  "/src/assets/images/co_founder.jpeg": coFounderImage,
};

export default function WhoWeAre() {
  const [flippedCards, setFlippedCards] = React.useState({});

  // Toggle flip state for a specific card
  const handleCardClick = (memberId) => {
    setFlippedCards((prev) => ({
      ...prev,
      [memberId]: !prev[memberId],
    }));
  };

  // Use static data
  const team = staticData.team.filter((member) => member.isActive);
  const activeFounders = staticData.founders
    .filter((f) => f.isActive)
    .map((founder) => ({
      ...founder,
      image: imageMap[founder.image] || founder.image,
      role: founder.position,
      description: founder.bio,
      social: {
        linkedin: founder.linkedin,
        twitter: founder.twitter,
        instagram: founder.instagram,
      },
    }));

  // Static about data
  const about = staticData.aboutPage[0] || {
    bannerImage: whoWeAreImage,
    introTitle: "About TechnoVera",
    introText: "We are a leading technology company dedicated to delivering innovative solutions.",
    stats: {
      teamMembers: team.length,
      projects: "50+",
      experience: "10+",
    },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About TechnoVera Solutions",
    description:
      "Learn about TechnoVera Solutions, our team, vision, mission, and commitment to delivering innovative IT solutions.",
    mainEntity: {
      "@type": "Organization",
      name: "TechnoVera Solutions",
      url: "https://www.technoveraservices.com",
      description: about.introText,
    },
  };

  return (
    <>
      <SEO
        title="About Us - Who We Are"
        description="TechnoVera is a leading IT company redefining the digital landscape with innovative next-gen technologies. Meet our team of professionals delivering high-quality IT solutions."
        keywords="about technovera, IT company, team, founders, vision, mission, technology experts"
        url="https://www.technoveraservices.com/about"
        structuredData={structuredData}
      />
      <div className="wq-section">
        {/* HERO SECTION */}
        <motion.div
          className="wq-hero"
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
          <h1 className="wq-hero-title">
            <span className="text-gradient">Who We Are</span>
          </h1>
          <p className="wq-hero-subtitle">
            Creating and working together for improvement
          </p>

          {/* Stats - Dynamic from backend */}
          {about.stats && (
            <motion.div
              className="wq-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {about.stats.teamMembers && (
                <div className="stat-item">
                  <Users className="stat-icon" />
                  <div className="stat-value">{about.stats.teamMembers}</div>
                  <div className="stat-label">Team Members</div>
                </div>
              )}
              {about.stats.projects && (
                <div className="stat-item">
                  <Target className="stat-icon" />
                  <div className="stat-value">{about.stats.projects}</div>
                  <div className="stat-label">Projects</div>
                </div>
              )}
              {about.stats.experience && (
                <div className="stat-item">
                  <Award className="stat-icon" />
                  <div className="stat-value">{about.stats.experience}</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* BANNER IMAGE */}
        <motion.div
          className="wq-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="banner-wrapper">
            <img
              src={whoWeAreImage}
              className="wq-banner-img"
              alt="Team Collaboration"
            />
            <div className="banner-overlay"></div>
          </div>
        </motion.div>

        {/* INTRO */}
        <motion.section
          className="wq-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="wq-intro-title">{about.introTitle}</h2>
          <p className="wq-intro-text">{about.introText}</p>
        </motion.section>

        {/* FOUNDERS SECTION */}
        {activeFounders.length > 0 && (
          <section className="wq-founders-section">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Meet Our Founder</h2>
              <p className="section-subtitle">
                The visionary behind TechnoVera
              </p>
            </motion.div>

            {activeFounders.map((founder, index) => (
              <motion.div
                className="founder-card"
                key={founder.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="founder-content">
                  <div className="founder-badge">{founder.role}</div>
                  <h2 className="founder-name">{founder.name}</h2>
                  <p className="founder-desc text-justify">
                    {founder.description}
                  </p>

                  <div className="founder-social">
                    {founder.social?.twitter && (
                      <motion.a
                        href={founder.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                    )}
                    {founder.social?.linkedin && (
                      <motion.a
                        href={founder.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                    )}
                    {founder.social?.instagram && (
                      <motion.a
                        href={founder.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Instagram className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="founder-image-wrapper">
                  <div className="founder-image-bg"></div>
                  <img
                    src={founder.image}
                    className="founder-img"
                    alt={founder.name}
                  />
                </div>
              </motion.div>
            ))}
          </section>
        )}

        {/* TEAM SECTION */}
        <motion.div
          className="wq-team-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="wq-team-sub">Awesome team members</h3>
          <h2 className="wq-team-title">Our Team</h2>
        </motion.div>

        {/* TEAM GRID */}
        {team.length === 0 ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Users className="w-20 h-20 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No team members available at the moment.
            </p>
          </motion.div>
        ) : (
          <div className="wq-team-grid">
            {team.map((member, index) => (
              <motion.div
                className="team-card"
                key={member.id || index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleCardClick(member.id || index)}
              >
                <div
                  className={`team-card-inner ${
                    flippedCards[member.id || index] ? "flipped" : ""
                  }`}
                >
                  {/* Front */}
                  <div className="team-card-front">
                    <div className="team-avatar-wrapper">
                      <div className="team-avatar-bg"></div>
                      {member.image ? (
                        <img
                          src={
                            member.image.startsWith("http")
                              ? member.image
                              : `${import.meta.env.VITE_BACKEND_URL}${
                                  member.image
                                }`
                          }
                          className="team-avatar"
                          alt={member.name}
                        />
                      ) : (
                        <div className="team-avatar-initials">
                          {member.name.split(' ').map((n, i, arr) => 
                            i === 0 || i === arr.length - 1 ? n[0] : ''
                          ).join('')}
                        </div>
                      )}
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">{member.name}</h3>
                      <p className="team-position">{member.position}</p>
                      <span className="team-email">{member.email}</span>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="team-card-back">
                    <div className="team-back-content">
                      <div className="team-quote-icon">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          opacity="0.3"
                        >
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>
                      </div>
                      {member.bio && <p className="team-bio">{member.bio}</p>}
                      {(member.social?.linkedin ||
                        member.social?.twitter ||
                        member.social?.github) && (
                        <>
                          <div className="team-back-divider"></div>
                          <div className="team-social">
                            {member.social?.linkedin && (
                              <motion.a
                                href={member.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="team-social-link"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                title="Connect on LinkedIn"
                              >
                                <Linkedin className="w-5 h-5" />
                              </motion.a>
                            )}
                            {member.social?.twitter && (
                              <motion.a
                                href={member.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="team-social-link"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                title="Follow on Twitter"
                              >
                                <Twitter className="w-5 h-5" />
                              </motion.a>
                            )}
                            {member.social?.github && (
                              <motion.a
                                href={member.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="team-social-link"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                title="View GitHub"
                              >
                                <Instagram className="w-5 h-5" />
                              </motion.a>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
