import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const title = "Innovate. Inspire. Impact.";
const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.2 },
  },
};

const letterVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 12, stiffness: 200 },
  },
  hidden: { opacity: 0, y: 20 },
};

// --- INLINE SVG ICON ---
const IconChevronDown = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative font-sans" id="header">
      <div className='min-h-screen flex items-center justify-center relative overflow-hidden'>
        {/* Background Image */}
        <motion.div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: "url('/header_img.jpeg')" }}
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='relative z-10 text-center text-white px-6'
        >
          <motion.h1
            variants={titleVariants}
            className='text-4xl sm:text-6xl md:text-7xl font-extrabold max-w-5xl mx-auto leading-tight tracking-tight drop-shadow-md'
          >
            {title.split(" ").map((word, i) => (
              // This wrapper span treats each word as a single layout unit.
              // `whitespace-nowrap` prevents the word itself from breaking.
              // A margin-right (`mr-4`) is added to create space between words.
              <span key={i} className="inline-block whitespace-nowrap mr-4">
                {word.split("").map((letter, j) => (
                  <motion.span
                    key={j}
                    variants={letterVariant}
                    className="inline-block" // Ensures letters stay together
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Welcome to the IEEE Student Branch at Rajagiri School of Engineering & Technology.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className='mt-10 flex justify-center flex-wrap gap-4'
          >
            <motion.a href="#about" className='border-2 border-white px-7 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-300' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Know More
            </motion.a>
            <motion.a href="#contact" className='bg-ieee-blue px-7 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300 text-white' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Animated Scroll Arrow */}
        <a href="#about" className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 text-white hover:text-cyan-300 transition">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <IconChevronDown />
          </motion.div>
        </a>

        {/* Conditionally rendered Announcement Bar */}
        {/* <AnimatePresence>
          {!scrolled && (
            <motion.div
              className="absolute bottom-0 w-full bg-ieee-blue text-white text-center py-2.5 z-20"
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              📢 <span className='font-semibold'>IEEE PES WEEK 2025:</span> Registrations are now LIVE!{" "}
              <a href="#Register" className="underline font-bold hover:text-yellow-300 transition">
                Click here to join →
              </a>
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>
    </header>
  );
};

export default Header;

