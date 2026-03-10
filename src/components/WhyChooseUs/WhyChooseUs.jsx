import { motion } from "framer-motion";
import {
  Target,
  Zap,
  Users,
  Award,
  TrendingUp,
  Shield,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useAPI } from "../../hooks/useAPI";
import "./WhyChooseUs.css";

const reasonIcons = [Target, Zap, Users, Award, TrendingUp, Shield];
const reasonColors = [
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#f59e0b",
  "#10b981",
  "#06b6d4",
];

const stepIconsMap = [Target, TrendingUp, Zap, Shield];

export default function WhyChooseUs() {
  const { data: whyChooseUsData, loading } = useAPI("why-choose-us");

  const content = whyChooseUsData.find((item) => item.isActive);

  if (loading) {
    return (
      <section className="wc-section">
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      </section>
    );
  }

  // Don't render if no data
  if (!content) {
    return null;
  }

  // Parse items
  const parseItems = (itemsData) => {
    try {
      const parsed =
        typeof itemsData === "string" ? JSON.parse(itemsData) : itemsData;
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Error parsing items:", error);
      return [];
    }
  };

  // Parse steps
  const parseSteps = (stepsData) => {
    try {
      const parsed =
        typeof stepsData === "string" ? JSON.parse(stepsData) : stepsData;
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Error parsing steps:", error);
      return [];
    }
  };

  const items = parseItems(content.items);
  const steps = parseSteps(content.steps);

  if (items.length === 0) {
    return null;
  }

  const reasons = items.map((item, idx) => ({
    icon: reasonIcons[idx % reasonIcons.length],
    title: item.title,
    text: item.text,
    color: reasonColors[idx % reasonColors.length],
  }));

  return (
    <section className="wc-section">
      <div className="wc-container">
        {/* Header */}
        <motion.div
          className="wc-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="wc-badge">{content.subtitle}</span>
          <h2 className="wc-title">{content.title}</h2>
          <p className="wc-description">
            We combine innovation, expertise, and dedication to deliver
            exceptional results
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="wc-reasons-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                className="wc-reason-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div
                  className="wc-reason-icon"
                  style={{ background: `${reason.color}15` }}
                >
                  <Icon
                    style={{ color: reason.color }}
                    size={28}
                    strokeWidth={2}
                  />
                </div>
                <h3 className="wc-reason-title">{reason.title}</h3>
                <p className="wc-reason-text">{reason.text}</p>
                <div className="wc-reason-hover-indicator">
                  <ArrowRight size={18} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Implementation Steps */}
        {steps.length > 0 && (
          <motion.div
            className="wc-steps-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="wc-steps-title">Our Implementation Process</h3>
            <div className="wc-steps-grid">
              {steps.map((step, index) => {
                const StepIcon = stepIconsMap[index % stepIconsMap.length];
                return (
                  <motion.div
                    key={index}
                    className="wc-step-card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <div className="wc-step-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="wc-step-icon-wrapper">
                      <StepIcon className="wc-step-icon" size={24} />
                    </div>
                    <h4 className="wc-step-title">{step.title}</h4>
                    <p className="wc-step-description">{step.description}</p>
                    {index < steps.length - 1 && (
                      <div className="wc-step-connector">
                        <ArrowRight size={20} />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Stats Section */}
        {content.stats && content.stats.length > 0 && (
          <motion.div
            className="wc-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {content.stats.map((stat, index) => (
              <div className="wc-stat-item" key={index}>
                <CheckCircle2 className="wc-stat-icon" size={32} />
                <div className="wc-stat-number">{stat.number}</div>
                <div className="wc-stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
