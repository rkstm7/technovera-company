import React, { useState } from "react";

/**
 * ContactForm Component — TechnoVera Solutions Pvt. Ltd.
 *
 * Props:
 *  - heading (optional): custom heading above the form
 *  - compact (optional): boolean, renders smaller form layout for embeds
 *
 * Reusable in pages like Contact.jsx, Home.jsx, or Footer quick-inquiry.
 */

export default function ContactForm({ heading = "Send Us a Message", compact = false }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            // Simulate form submission (no backend required)
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log("Form submitted (static mode):", form);
            setStatus("sent");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    return (
        <div
            className={`${compact ? "p-6" : "p-8"
                } bg-white rounded-xl shadow border border-gray-100 w-full`}
        >
            {heading && (
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    {heading}
                </h3>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand outline-none"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand outline-none"
                />
                {!compact && (
                    <input
                        type="text"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand outline-none"
                    />
                )}
                <textarea
                    placeholder="Your Message"
                    rows={compact ? "3" : "5"}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand outline-none"
                ></textarea>

                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-brand text-white py-2 rounded-md hover:bg-blue-700 transition font-medium"
                >
                    {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "sent" && (
                    <p className="text-green-600 text-center mt-2">
                        Message sent successfully! We’ll get back soon.
                    </p>
                )}
                {status === "error" && (
                    <p className="text-red-600 text-center mt-2">
                        Failed to send message. Please try again later.
                    </p>
                )}
            </form>
        </div>
    );
}
