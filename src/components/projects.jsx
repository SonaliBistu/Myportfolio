import React from "react";
import { motion } from "framer-motion";

// ✅ IMPORT IMAGES
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp"; // NEW PROJECT IMAGE

const projects = [
  {
    id: 1,
    title: "Smart Fleet Tracking & Logistics Management System",
    desc: "A single integrated system combining Smart Feet analysis and Logistic Management for tracking, delivery, and operations.",
    tech: "HTML, CSS, JavaScript, PHP, DevOps",
    github: "https://github.com/SonaliBistu/The_Smart_Feet_and_Logistic_Management_System",
    image: project1,
  },
  {
    id: 2,
    title: "Portfolio Website",
    desc: "Personal portfolio website to showcase skills, projects, and contact info.",
    tech: "React, Tailwind CSS",
    github: "https://github.com/SonaliBistu/Myportfolio",
    image: project2,
  },
  {
    id: 3,
    title: "Online Registration Portal",
    desc: "A secure full-stack web application built with .NET Framework and C# that enables user registration, authentication, and profile management with SQL Server integration.",
    tech: ".NET Framework, C#, ASP.NET, SQL Server",
    github: "https://github.com/SonaliBistu/Student_Registration_Protal_C-_.net",
    image: project3,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-[#0f0f0f] text-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-4"
        >
          Featured <span className="text-purple-500">Projects</span>
        </motion.h2>

        {/* SUBTEXT */}
        <p className="text-sm text-gray-400 text-center mb-16">
          Some of my recent work.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg overflow-hidden"
            >

              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition duration-300"
              />

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-purple-300 mb-3 relative z-10">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm mb-4 relative z-10">
                {project.desc}
              </p>

              {/* TECH */}
              <p className="text-xs text-purple-400 mb-6 relative z-10">
                {project.tech}
              </p>

              {/* BUTTON */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm px-5 py-2 rounded-lg border border-purple-500 hover:bg-purple-500 transition relative z-10"
              >
                GitHub
              </a>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;