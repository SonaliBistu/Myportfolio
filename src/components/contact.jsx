import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xeevqwlb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-28 bg-[#0f0f0f] text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-4"
        >
          Contact <span className="text-purple-500">Me</span>
        </motion.h2>

        <p className="text-sm text-gray-400 text-center mb-16">
          Feel free to reach out for collaboration or opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT INFO */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-purple-400 text-2xl" />
              <p className="text-gray-300">bistusonali100@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-purple-400 text-2xl" />
              <p className="text-gray-300">+91 8509090283</p>
            </div>

            <div className="flex items-center gap-4">
              <FaLocationDot className="text-purple-400 text-2xl" />
              <p className="text-gray-300">West Bengal, India</p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6 pt-4 text-3xl">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/SonaliBistu"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:scale-110 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white outline-none focus:border-purple-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white outline-none focus:border-purple-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white outline-none focus:border-purple-500"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition font-semibold"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* STATUS MESSAGE */}
            {status === "success" && (
              <p className="text-green-400 text-sm">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm">
                ❌ Something went wrong. Try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;