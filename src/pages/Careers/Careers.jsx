import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  MapPin,
  Briefcase,
  Users,
  TrendingUp,
  Sparkles,
  Send,
  CheckCircle,
  Loader,
} from "lucide-react";
import SEO from "@/components/SEO/SEO";
import { staticData } from "../../data/staticData";
import "./Careers.css";

const Careers = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [careers, setCareers] = useState([]);
  const [careersLoading, setCareersLoading] = useState(true);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Fetch careers from static data
  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Get active careers from static data
      const activeCareers = staticData.careers.filter((career) => career.isActive);
      setCareers(activeCareers);
    } catch (error) {
      console.error("Error fetching careers:", error);
    } finally {
      setCareersLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (
      !form.first_name ||
      !form.last_name ||
      !form.email ||
      !form.phone ||
      !form.service ||
      !form.message
    ) {
      setMsg("Please fill all fields");
      return;
    }

    setLoading(true);
    setMsg("");

    const data = {
      name: `${form.first_name} ${form.last_name}`,
      email: form.email,
      phone: form.phone,
      subject: form.service,
      message: form.message,
      type: "career",
    };

    try {
      // Simulate form submission (no backend required)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Career inquiry submitted (static mode):", data);
      
      setMsg(
        "Your inquiry has been submitted successfully! We'll contact you soon."
      );
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Career inquiry error:", error);
      setMsg(`Error: ${error.message}`);
    }

    setLoading(false);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Multiple Positions Available",
    description:
      "Join TechnoVera team. We're hiring Backend Developers, Frontend Developers, Full Stack Developers, and UI/UX Designers.",
    hiringOrganization: {
      "@type": "Organization",
      name: "TechnoVera",
      sameAs: "https://www.technovera.com",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    employmentType: "FULL_TIME",
  };

  return (
    <>
      <SEO
        title="Careers - Join Our Team"
        description="Join TechnoVera and build your future in IT. We're hiring Backend Developers, Frontend Developers, Full Stack Developers, and UI/UX Designers in Pune."
        keywords="careers, jobs, IT jobs Pune, developer jobs, frontend developer, backend developer, full stack developer, UI UX designer jobs"
        url="https://www.technovera.com/careers"
        structuredData={structuredData}
      />
      <div className="career-page">
        {/* ================= HERO SECTION ================= */}
        <motion.section
          className="career-hero"
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

          <h1 className="career-title">
            <span className="text-gradient">Join Our Team</span>
          </h1>
          <h2 className="career-subtitle">
            Build Your Future, Code Your Dreams
          </h2>

          <p className="career-intro">
            Join our dynamic team and shape the future of technology! At
            TechnoVera, we value innovation, collaboration, and growth.
            Whether you're a seasoned professional or just starting your
            journey, we provide the tools, support, and opportunities to help
            you thrive in an ever-evolving IT landscape.
          </p>

          {/* Stats */}
          <motion.div
            className="career-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="stat-card">
              <Users className="stat-icon" />
              <div className="stat-value">50+</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-card">
              <Briefcase className="stat-icon" />
              <div className="stat-value">
                {careersLoading ? "..." : `${careers.length}+`}
              </div>
              <div className="stat-label">Open Positions</div>
            </div>
            <div className="stat-card">
              <TrendingUp className="stat-icon" />
              <div className="stat-value">100%</div>
              <div className="stat-label">Growth Rate</div>
            </div>
          </motion.div>
        </motion.section>

        {/* ================= JOB LIST SECTION ================= */}
        <section className="career-jobs-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Open Positions</h2>
            <p className="section-subtitle">
              Find your perfect role and start your journey with us
            </p>
          </motion.div>

          <div className="jobs-grid">
            {careersLoading ? (
              <div className="flex items-center justify-center col-span-full py-12">
                <Loader className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : careers.length > 0 ? (
              careers.map((job, i) => (
                <motion.div
                  className="job-card"
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="job-header">
                    <div className="job-icon">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="job-badge">
                      {new Date(job.createdAt) >
                      new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                        ? "New"
                        : "Open"}
                    </div>
                  </div>

                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-subtitle">{job.description}</p>

                  <div className="job-meta">
                    <span className="job-meta-item">
                      <Clock className="w-4 h-4" />
                      {job.type || "Full Time"}
                    </span>
                    <span className="job-meta-item">
                      <MapPin className="w-4 h-4" />
                      {job.location || "Pune"}
                    </span>
                  </div>

                  {job.requirements && (
                    <div className="job-requirements">
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {job.requirements}
                      </p>
                    </div>
                  )}

                  <motion.button
                    className="job-apply-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      // Scroll to form
                      document
                        .querySelector(".career-contact-section")
                        ?.scrollIntoView({ behavior: "smooth" });
                      // Pre-fill service with job title
                      setForm({ ...form, service: job.title });
                    }}
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <Briefcase className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-600 text-lg">
                  No open positions at the moment.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Check back later for new opportunities!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ================= CONTACT FORM SECTION ================= */}
        <motion.section
          className="career-contact-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="contact-container">
            {/* Left Side */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="contact-title">Have Questions?</h2>
              <p className="contact-subtitle">
                Clear Your Doubts, Connect with Us
              </p>
              <p className="contact-description">
                Our team is here to help you with any questions about career
                opportunities, application process, or company culture. Don't
                hesitate to reach out!
              </p>

              <div className="contact-features">
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>Quick Response Time</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>Expert Guidance</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>Career Support</span>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="form-card">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      value={form.first_name}
                      onChange={handleChange}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      value={form.last_name}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Service Interest</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your Service</option>
                    <option value="Website Development">
                      Website Development
                    </option>
                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Software Development">
                      Software Development
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your experience and why you want to join..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <motion.button
                  className="submit-btn"
                  onClick={handleSubmit}
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Application
                    </>
                  )}
                </motion.button>

                {msg && (
                  <motion.div
                    className={`form-message ${
                      msg.includes("success") ? "success" : "error"
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {msg}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Careers;
