import { motion } from "framer-motion";
import { useAPI } from "../../hooks/useAPI";
import "./HowWeWork.css";

export default function HowWeWork() {
  const { data: howWeWorkData, loading } = useAPI("how-we-work");

  const content = howWeWorkData.find((item) => item.isActive);

  if (loading) {
    return (
      <section className="hww-root">
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

  const steps = parseSteps(content.steps);

  if (steps.length === 0) {
    return null;
  }

  return (
    <section className="hww-root">
      {/* Heading */}
      <div className="hww-header">
        <h2 className="hww-title">{content.title}</h2>
        <h3 className="hww-subtitle">{content.subtitle}</h3>
      </div>

      {/* Layout */}
      <div className="hww-grid">
        {/* Left Side Steps */}
        <div className="hww-column">
          {steps.slice(0, 2).map((step, i) => (
            <div className="hww-card" key={i}>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        {/* Center Logo */}
        <div className="hww-center">
          <div className="hww-logo-wrapper">
            <img
              src={content.centerLogo}
              alt="Process Illustration"
              className="hww-logo"
            />
          </div>
        </div>

        {/* Right Side Steps */}
        <div className="hww-column">
          {steps.slice(2, 4).map((step, i) => (
            <div className="hww-card" key={i}>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
