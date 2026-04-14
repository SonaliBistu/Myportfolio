import React from "react";
import { FaLinkedin, FaGithub, FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* LEFT */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Sonali Bistu. All rights reserved.
        </p>

        {/* CENTER (Optional Tagline) */}
        <p className="text-sm flex items-center gap-1">
          Made with <FaHeart className="text-red-500" /> using React
        </p>

        {/* RIGHT SOCIAL */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/SonaliBistu"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;