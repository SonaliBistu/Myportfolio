import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id='about' className='py-20 bg-[#1f1f1f] text-white'>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='container mx-auto px-6'
      >

        {/* Heading */}
        <h2 className='text-4xl font-bold text-center mb-4'>
          About <span className='text-purple-500'>Me</span>
        </h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-12'>
          Get to know my background and passion
        </p>

        {/* TEXT CARD ONLY (WIDER CONTAINER) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='max-w-6xl mx-auto'   // 🔥 increased from max-w-4xl to max-w-6xl
        >

          <div className='bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-10 md:p-12 shadow-lg hover:shadow-purple-500/20 transition'>

            <h3 className='text-2xl md:text-3xl font-semibold mb-5'>
              My professional journey and career goals.
            </h3>

            {/* Highlight */}
            <p className='inline-block bg-purple-600/20 text-purple-300 px-4 py-1 rounded-full text-sm mb-6'>
              Software Engineer • Full Stack Developer • Problem Solver
            </p>

            {/* CONTENT */}
            <p className='text-gray-300 leading-relaxed text-lg mb-6'>
              I am currently pursuing my <span className='text-white font-medium'>Master of Computer Applications (MCA)</span> and aiming to kickstart my career as a <span className='text-white font-medium'>Software Engineer in a top MNC</span>. My journey into tech started with a profound curiosity for how things work on the internet, which quickly escalated into a passion for writing robust code.
            </p>

            <p className='text-gray-300 leading-relaxed text-lg mb-6'>
              I specialize in <span className='text-purple-300 font-medium'>Java</span> and <span className='text-purple-300 font-medium'>Data Structures & Algorithms (DSA)</span>, and I have a strong foundation in full-stack web development. I love the challenge of solving complex problems algorithmically while also creating intuitive and visually stunning user interfaces.
            </p>

            <p className='text-gray-300 leading-relaxed text-lg'>
              Beyond academics, I enjoy keeping up with modern web technologies, building projects that solve real-world problems, and continually expanding my knowledge base. My ultimate goal is to build software that impacts millions of users.
            </p>

          </div>

        </motion.div>

      </motion.div>
    </section>
  )
}

export default About