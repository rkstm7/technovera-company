import { Lightbulb, Target } from "lucide-react";
import { useAPI } from "../../hooks/useAPI";
import "./VisionMission.css";
import { motion } from "framer-motion";

// Import solution images
import mainImage from "../../assets/images/solutions/main.jpg";
import smallImage from "../../assets/images/solutions/small.jpg";

// Image mapping
const imageMap = {
  "/src/assets/images/solutions/main.jpg": mainImage,
  "/src/assets/images/solutions/small.jpg": smallImage,
};

export default function VisionMission() {
  const { data: visionMissionData, loading } = useAPI("vision-mission");

  const content = visionMissionData.find((item) => item.isActive);

  // Map images if content exists
  const mappedContent = content ? {
    ...content,
    circleImage1: imageMap[content.circleImage1] || content.circleImage1,
    circleImage2: imageMap[content.circleImage2] || content.circleImage2,
  } : null;

  if (loading) {
    return (
      <section className="vm-section">
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      </section>
    );
  }

  // Don't render if no data
  if (!mappedContent) {
    return null;
  }

  return (
    <section className="vm-section">
      <div className="vm-container">
        {/* LEFT SIDE */}
        <motion.div
          className="vm-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="vm-title">{mappedContent.title}</h3>

          <p className="vm-subtext">{mappedContent.subtitle}</p>

          <p className="vm-desc">{mappedContent.description}</p>

          <a href={mappedContent.ctaLink}>
            <button className="vm-btn">{mappedContent.ctaText}</button>
          </a>
        </motion.div>

        {/* RIGHT — CIRCLE SECTION */}
        <motion.div
          className="vm-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="vm-circle">
            <motion.div
              className="vm-q vm-q1 icon-bg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              <div className="vm-q-inner icon-only">
                {mappedContent.circleImage1 ? (
                  <img
                    src={mappedContent.circleImage1}
                    alt="Vision"
                    className="vm-circle-img"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                ) : null}
                <Lightbulb
                  className="vm-icon icon-yellow"
                  style={{ display: mappedContent.circleImage1 ? "none" : "block" }}
                />
              </div>
            </motion.div>

            <motion.div
              className="vm-q vm-q2 text-bg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="vm-q-inner text-only text-left-align">
                <h3 className="vm-heading">Vision:</h3>
                <p className="vm-text">{mappedContent.vision}</p>
              </div>
            </motion.div>

            <motion.div
              className="vm-q vm-q3 text-bg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="vm-q-inner text-only text-right-align">
                <h3 className="vm-heading">Mission:</h3>
                <p className="vm-text">{mappedContent.mission}</p>
              </div>
            </motion.div>

            <motion.div
              className="vm-q vm-q4 icon-bg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              <div className="vm-q-inner icon-only">
                {mappedContent.circleImage2 ? (
                  <img
                    src={mappedContent.circleImage2}
                    alt="Mission"
                    className="vm-circle-img"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                ) : null}
                <Target
                  className="vm-icon icon-blue"
                  style={{ display: mappedContent.circleImage2 ? "none" : "block" }}
                />
              </div>
            </motion.div>

            {/* Cross Lines */}
            <div className="vm-cross-vertical"></div>
            <div className="vm-cross-horizontal"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
