import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./ContactUs.css";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  MessageCircle,
  Clock,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function ContactUs() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const sendInquiry = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const formData = new FormData(formRef.current);
    const data = {
      name: `${formData.get("first_name")} ${formData.get("last_name")}`,
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("service"),
      message: formData.get("message"),
      type: "general",
    };

    try {
      // Simulate form submission (no backend required)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Contact inquiry submitted (static mode):", data);
      
      setMsg(
        "Your message has been sent successfully! We'll get back to you soon."
      );
      formRef.current.reset();
    } catch (error) {
      console.error("Contact inquiry error:", error);
      setMsg(`Error: ${error.message}`);
    }

    setLoading(false);
  };

 

  return (
    <>
      <div className="contact-page">
        {/* Hero Section */}
        <motion.div
          className="contact-hero"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-primary opacity-60" />
          </motion.div>
          <h1 className="contact-title">
            <span className="text-gradient">Get In Touch</span>
          </h1>
          <p className="contact-subtitle">
            We'd love to hear from you. Let's start a conversation.
          </p>
        </motion.div>

        {/* CONTAINER WRAPPER */}
        <div className="contact-container">
          {/* LEFT SIDE - Contact Info */}
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="info-heading">Let's Talk</h2>
            <p className="info-description">
              Have a project in mind or just want to chat? We're here to help
              bring your ideas to life.
            </p>

            <div className="contact-cards">
              <motion.div className="info-card" whileHover={{ y: -5 }}>
                <div className="info-icon-wrapper">
                  <MapPin className="info-icon" />
                </div>
                <div className="info-content">
                  <h3 className="info-label">Visit Us</h3>
                  <p className="info-text">
                    248, SICOF Flatted Building, MIDC, Satpur Colony, Nashik, Maharashtra, <strong>Pin Code- 422007</strong>
                  </p>
                </div>
              </motion.div>

              <motion.div className="info-card" whileHover={{ y: -5 }}>
                <div className="info-icon-wrapper">
                  <Mail className="info-icon" />
                </div>
                <div className="info-content">
                  <h3 className="info-label">Email Us</h3>
                  <p className="info-text">email@technoveraservices.com</p>
                  <p className="info-text">info@technoveraservices.com</p>
                </div>
              </motion.div>

              <motion.div className="info-card" whileHover={{ y: -5 }}>
                <div className="info-icon-wrapper">
                  <Phone className="info-icon" />
                </div>
                <div className="info-content">
                  <h3 className="info-label">Call Us</h3>
                  <p className="info-text">
                    +91 9762263417
                    <br />
                  </p>
                </div>
              </motion.div>

              <motion.div className="info-card" whileHover={{ y: -5 }}>
                <div className="info-icon-wrapper">
                  <Clock className="info-icon" />
                </div>
                <div className="info-content">
                  <h3 className="info-label">Working Hours</h3>
                  <p className="info-text">
                    Mon - Fri: 9:00 AM - 6:30 PM
                    <br />
                    Sat-Sun: Closed
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="info-features">
              <div className="feature-badge">
                <CheckCircle className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
              <div className="feature-badge">
                <CheckCircle className="w-4 h-4" />
                <span>Quick Response</span>
              </div>
              <div className="feature-badge">
                <CheckCircle className="w-4 h-4" />
                <span>Expert Team</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="form-header">
              <MessageCircle className="form-header-icon" />
              <h3 className="form-title">Send us a Message</h3>
              <p className="form-description">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>

            <form className="contact-form" ref={formRef} onSubmit={sendInquiry}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name*</label>
                  <input
                    name="first_name"
                    type="text"
                    required
                    placeholder="John"
                  />
                </div>

                <div className="form-group">
                  <label>Last Name*</label>
                  <input
                    name="last_name"
                    type="text"
                    required
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address*</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number*</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Service Interest*</label>
                <select name="service" required>
                  <option value="">Select your Service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Software Development">
                    Software Development
                  </option>
                  <option value="Other">Others</option>
                </select>
              </div>

              <div className="form-group">
                <label>How can we help you?*</label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell us about your project or inquiry..."
                  rows="5"
                />
              </div>

              <motion.button
                className="submit-btn"
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
                    Send Message
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
            </form>
          </motion.div>
        </div>

        {/* GOOGLE MAP */}

      </div>
    </>
  );
}
