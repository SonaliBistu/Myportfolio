import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";

const Education = () => {

  const education = [
    {
      title: "Master of Computer Applications (MCA)",
      institute: "Kazi Nazrul University, Asansol",
      year: "2026 - Present",
      desc: "Focusing on advanced computing concepts, software engineering, and full-stack development methodologies.",
      icon: <HiAcademicCap size={18} />,
      current: true
    },
    {
      title: "B.Sc (Computer Science)",
      institute: "Nistarini Women’s College",
      year: "2024",
      result: "8.18 CGPA",
      icon: <FaGraduationCap size={16} />
    },
    {
      title: "Higher Secondary (12th)",
      institute: "Purulia Town High School",
      year: "2021",
      result: "75.2%",
      icon: <FaSchool size={16} />
    },
    {
      title: "Secondary (10th)",
      institute: "Purulia Town High School",
      year: "2019",
      result: "69.3%",
      icon: <FaSchool size={16} />
    }
  ];

  return (
    <section id="education" className="py-24 bg-[#1f1f1f] text-white">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6"
      >

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-purple-500">Education</span>
        </h2>

        <p className="text-gray-400 text-center mb-14">
          Academic journey and qualifications
        </p>

        {/* Timeline */}
        <div className="relative border-l-2 border-purple-500 ml-4 space-y-10">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-10"
            >

              {/* ICON DOT (FIXED PERFECT CENTER ALIGN) */}
              <div className="absolute -left-[18px] top-5 w-9 h-9 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-md">
                {item.icon}
              </div>

              {/* CARD */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 relative">

                {/* CURRENT BADGE */}
                {item.current && (
                  <span className="absolute right-5 top-5 text-xs bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full">
                    Currently Pursuing
                  </span>
                )}

                <h3 className="text-xl font-semibold text-purple-300">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-1">
                  {item.institute}
                </p>

                <div className="flex justify-between mt-3 text-sm text-gray-400">
                  <span>{item.year}</span>
                  {item.result && (
                    <span className="text-purple-300 font-medium">
                      {item.result}
                    </span>
                  )}
                </div>

                {item.desc && (
                  <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                )}

              </div>

            </motion.div>
          ))}

        </div>

      </motion.div>
    </section>
  );
};

export default Education;