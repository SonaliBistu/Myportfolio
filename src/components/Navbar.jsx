import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaXmark, FaSun, FaMoon } from "react-icons/fa6";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.nav
      className="fixed w-full z-50 bg-black/80 backdrop-blur-sm py-4 px-8 shadow-lg"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          className="text-3xl font-bold text-white flex items-center gap-2"
        >
          Sonali
          <span className="text-purple-400">Bistu</span>
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          {["Home", "About", "Education", "Skills", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white/80 transition duration-300 hover:text-purple-400 group"
              >
                <span>{item}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}

          {/* 🌙 DARK / LIGHT TOGGLE */}
          <div className="text-xl ml-4 cursor-pointer">
            {darkMode ? (
              <FaSun
                onClick={() => setDarkMode(false)}
                className="text-yellow-400"
              />
            ) : (
              <FaMoon
                onClick={() => setDarkMode(true)}
                className="text-purple-400"
              />
            )}
          </div>
        </div>

        {/* Mobile Icon + Theme */}
        <div className="md:hidden flex items-center gap-4 text-white text-2xl cursor-pointer">

          {/* Theme Toggle Mobile */}
          {darkMode ? (
            <FaSun
              onClick={() => setDarkMode(false)}
              className="text-yellow-400"
            />
          ) : (
            <FaMoon
              onClick={() => setDarkMode(true)}
              className="text-purple-400"
            />
          )}

          {/* Menu Icon */}
          {showMenu ? (
            <FaXmark onClick={() => setShowMenu(false)} />
          ) : (
            <FaBars onClick={() => setShowMenu(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden mt-4 bg-black/90 h-screen rounded-lg p-6 flex flex-col items-center justify-center space-y-6 text-white">
          {["Home", "About", "Education", "Skills", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setShowMenu(false)}
                className="text-lg hover:text-purple-400 transition"
              >
                {item}
              </a>
            )
          )}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;