import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { assets } from '../assets/assets'

const Hero = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>

        {/* LEFT SIDE */}
        <div className='md:w-1/2 mb-10 md:mb-0'>

          {/* 🔥 ANIMATED NAME */}
          <h1 className='text-5xl md:text-7xl font-bold mb-4 leading-tight'>
            Hi, I'm{' '}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              className='bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-extrabold inline-block'
            >
              Sonali Bistu
            </motion.span>
          </h1>

          {/* MCA Student */}
          <p className='text-purple-300 text-sm md:text-base mb-2 tracking-wide'>
            MCA Student
          </p>

          {/* Typewriter */}
          <h2 className='text-2xl md:text-4xl font-semibold mb-6 text-purple-400'>
            <Typewriter
              words={[
                'Full Stack Developer',
                'Software Engineer',
                'Problem Solver'
              ]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          {/* Description */}
          <p className='text-lg text-gray-300 mb-8'>
            Passionate about Java, DSA, and complex problem solving. I build visually stunning and scalable applications, ready for top MNCs.
          </p>

          {/* Buttons */}
          <div className='flex space-x-4'>
            <a href='#projects' className='px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
              View Work
            </a>

            <a href='#contact' className='px-6 py-3 border-2 border-purple-500 text-purple-500 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition duration-300'>
              Contact Me
            </a>
          </div>

          {/* 🔥 SOCIAL ICONS (ADDED HERE) */}
          <div className='flex items-center gap-6 mt-6 text-2xl text-white'>

            <a
              href='https://github.com/SonaliBistu'
              target='_blank'
              rel='noreferrer'
              className='hover:text-purple-400 transition transform hover:scale-110'
            >
              <FaGithub />
            </a>

            <a
              href='https://www.linkedin.com/in/sonali-bistu-b4397332a?utm_source=share_via&utm_content=profile&utm_medium=member_android'
              target='_blank'
              rel='noreferrer'
              className='hover:text-blue-400 transition transform hover:scale-110'
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className='md:w-1/2 flex justify-center'>
          <div className='relative w-64 h-64 md:w-80 md:h-80'>

            {/* Glow */}
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-70'></div>

            {/* Profile Image */}
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10'
              src={assets.profileImg}
              alt="Profile"
            />

            {/* Software Engineer Badge */}
            <div className='absolute top-2 -left-10 md:-left-16 z-20'>
              <div className='flex items-center gap-2 px-3 py-1 rounded-lg 
                bg-white/10 backdrop-blur-md border border-white/20 shadow-lg'>
                <span className='text-yellow-400'>&lt;/&gt;</span>
                <p className='text-white text-xs md:text-sm font-medium'>
                  Software Engineer
                </p>
              </div>
            </div>

            {/* Problem Solver Badge */}
            <div className='absolute bottom-4 -right-10 md:-right-16 z-20'>
              <div className='flex items-center gap-2 px-3 py-1 rounded-lg 
                bg-white/10 backdrop-blur-md border border-white/20 shadow-lg'>
                <span className='text-yellow-400'>🏆</span>
                <p className='text-white text-xs md:text-sm font-medium'>
                  Problem Solver
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Hero