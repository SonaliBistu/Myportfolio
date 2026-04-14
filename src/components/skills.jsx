import React from "react";
import { motion } from "framer-motion";

import {
  FaJava, FaHtml5, FaCss3Alt, FaPhp, FaNodeJs, FaCode
} from "react-icons/fa";
import {
  SiC, SiPython, SiJavascript, SiTailwindcss, SiReact, SiMysql
} from "react-icons/si";

const skills = [
  {
    title: "Programming Languages",
    items: [
      { name: "C", level: 75, icon: <SiC /> },
      { name: "Python", level: 80, icon: <SiPython /> },
      { name: "Java", level: 70, icon: <FaJava /> },
      { name: "DSA", level: 78, icon: <FaCode /> },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "HTML", level: 90, icon: <FaHtml5 /> },
      { name: "CSS", level: 88, icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss /> },
      { name: "JavaScript", level: 85, icon: <SiJavascript /> },
      { name: "React.js", level: 80, icon: <SiReact /> },
      { name: "Node.js", level: 65, icon: <FaNodeJs /> },
      { name: "PHP", level: 60, icon: <FaPhp /> },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", level: 75, icon: <SiMysql /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 bg-[#0f0f0f] text-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE (FIXED) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-purple-500">Skills</span>
          </h2>

          <p className="text-sm font-normal text-gray-400 mt-2">
            Technologies and tools I work with.
          </p>
        </motion.div>

        {/* 3 LAYERS */}
        <div className="space-y-12">

          {skills.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
            >

              {/* GLOW BORDER */}
              <div className="absolute inset-0 border border-purple-500/20 rounded-2xl animate-pulse"></div>

              {/* SECTION TITLE */}
              <h3 className="text-2xl font-semibold text-purple-300 mb-8 border-l-4 border-purple-500 pl-4">
                {cat.title}
              </h3>

              {/* SKILLS */}
              <div className="grid md:grid-cols-2 gap-6">

                {cat.items.map((s, j) => (
                  <div key={j} className="p-4 bg-black/30 rounded-xl border border-white/10">

                    <div className="flex items-center gap-3 text-purple-400 text-xl">
                      {s.icon}
                      <span className="text-white text-base">{s.name}</span>
                    </div>

                    {/* BAR */}
                    <div className="w-full h-2 bg-gray-800 mt-3 rounded overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      />
                    </div>

                    <p className="text-right text-sm text-purple-300 mt-1">
                      {s.level}%
                    </p>

                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;