import React from 'react';
import { motion } from 'framer-motion';

// --- DATA ---
const societies = [
  {
    name: 'Computer Society (CS)',
    image: '/Socities/CS.jpg',
    description: 'Fostering technical innovation in computing and advancing knowledge in algorithms, AI, and software systems.'
  },
  {
    name: 'Industrial Applications Society (IAS)',
    image: '/Socities/IAS.jpg',
    description: 'Dedicated to the advancement of theory and practice of electrical and electronic engineering in industrial settings.'
  },
  {
    name: 'Signal Processing Society (SPS)',
    image: '/Socities/sps.png',
    description: 'Focused on signal processing theory, algorithms, and applications in communications, image processing, and more.'
  },
  {
    name: 'Robotics and Automation Society (RAS)',
    image: '/Socities/ras.jpg',
    description: 'Promotes the development and deployment of robotics and automation in research and industry.'
  },
  {
    name: 'Women in Engineering (WIE)',
    image: '/Socities/wie.jpg',
    description: 'Empowers women in engineering and technology to advance and thrive in their professional careers.'
  },
  {
    name: 'Power & Energy Society (PES)',
    image: '/Socities/PESlogo.jpg',
    description: 'Advancing innovation in the electric power and energy industry for the betterment of society.'
  }
];

// --- ANIMATION VARIANTS (Slightly faster for a snappier feel) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// ✅ Reusable MemberCard Component
const SocietyCard = ({ society }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer"
    >
      {/* ✅ Consistent Image Sizing using aspect-ratio */}
      <div className="aspect-video overflow-hidden">
        <img
          src={society.image}
          alt={society.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
      {/* ✅ Polished UI Details: Left-aligned text */}
      <div className="p-5 text-left">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-ieee-blue transition-colors duration-300">
          {society.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">{society.description}</p>
      </div>
    </motion.div>
  );
};


const Societies = () => {
  return (
    // ✅ Professional Color Palette: Light gray background
    <div className="relative py-24 px-6 md:px-12 lg:px-24 bg-gray-50 text-gray-900 overflow-hidden font-sans">
      
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 inline-block relative tracking-tight pb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Technical <span className="text-ieee-blue">Societies</span>
          {/* ✅ Polished UI Details: Subtle, centered underline */}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-ieee-blue rounded-full"></span>
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-6 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore the diverse technical communities within IEEE RSET SB, each dedicated to a specific field of interest.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {societies.map((society, index) => (
          <SocietyCard key={index} society={society} />
        ))}
      </motion.div>
    </div>
  );
};

export default Societies;