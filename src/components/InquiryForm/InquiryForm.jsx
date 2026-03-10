import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";
import "./InquiryForm.css";

export default function InquiryForm() {
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    service: "",
    message: "",
  });

  // Auto-open form only on home page after 3 seconds
  useEffect(() => {
    // Check if current page is home page
    const isHomePage =
      location.pathname === "/" || location.pathname === "/home";

    if (isHomePage) {
      const timer = setTimeout(() => setShowForm(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const data = {
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      phone: form.contact,
      subject: form.service,
      message: form.message,
      type: "service",
    };

    try {
      // Simulate form submission (no backend required)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Inquiry submitted (static mode):", data);

      setMsg("Thank you! Your inquiry has been submitted successfully.");
      setTimeout(() => {
        setShowForm(false);
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
          service: "",
          message: "",
        });
        setMsg("");
      }, 2000);
    } catch (error) {
      console.error("Inquiry submission error:", error);
      setMsg(`Error: ${error.message}`);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Sticky Button on Left Side */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="inquiry-sticky-btn"
          aria-label="Open Inquiry Form"
        >
          <span></span>
          <span className="inquiry-btn-text">Inquire Now</span>
        </button>
      )}

      {/* Popup Form */}
      {showForm && (
        <div className="inquiry-overlay" onClick={() => setShowForm(false)}>
          <div className="inquiry-popup" onClick={(e) => e.stopPropagation()}>
            <button
              className="inquiry-close-btn"
              onClick={() => setShowForm(false)}
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <h2 className="inquiry-title">Quick Inquiry</h2>
            <p className="inquiry-subtitle">
              Tell us what you need — we'll get back to you quickly.
            </p>

            <form onSubmit={handleSubmit} className="inquiry-form">
              <div className="inquiry-row">
                <div className="inquiry-field">
                  <label>First Name*</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter first name"
                  />
                </div>

                <div className="inquiry-field">
                  <label>Last Name*</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div className="inquiry-row">
                <div className="inquiry-field">
                  <label>Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter email"
                  />
                </div>

                <div className="inquiry-field">
                  <label>Contact Number*</label>
                  <input
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    required
                    placeholder="Enter phone"
                  />
                </div>
              </div>

              <div className="inquiry-field">
                <label>Service*</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>
                </select>
              </div>

              <div className="inquiry-field">
                <label>How can we help you?*</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe your requirement..."
                  rows="3"
                />
              </div>

              <button
                type="submit"
                className="inquiry-submit-btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit Inquiry"}
              </button>

              {msg && (
                <p
                  className={`inquiry-message ${
                    msg.includes("success") ? "success" : "error"
                  }`}
                >
                  {msg}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
