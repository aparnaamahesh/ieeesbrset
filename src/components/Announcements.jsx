import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data for the two galleries ---
const sbImages = [
  '/SbAwards/sba2.jpeg', '/SbAwards/sba3.jpeg', '/SbAwards/sba4.png',
  '/SbAwards/sba5.jpeg', '/SbAwards/sba6.jpeg', '/SbAwards/sba7.jpeg',
  '/SbAwards/sba8.jpeg', '/SbAwards/sba9.jpeg',
];

const studentImages = [
  '/StudentAwards/sa1.jpeg', '/StudentAwards/sa2.jpeg',
  '/StudentAwards/sa3.jpeg', '/StudentAwards/sa4.jpeg',
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.98 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// --- Helper function to shuffle an array ---
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// --- Reusable AwardCard Component ---
const AwardCard = ({ src, alt, onClick, layoutId }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -6 }}
    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer"
    onClick={onClick}
  >
    <div className="aspect-[4/3] overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        layoutId={layoutId}
      />
    </div>
  </motion.div>
);

const Achievements = () => {
  const [randomImages, setRandomImages] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);

  // This effect runs once on mount to select and set the random images
  useEffect(() => {
    const randomSb = shuffleArray(sbImages).slice(0, 4);
    const randomStudent = shuffleArray(studentImages).slice(0, 4);
    setRandomImages(shuffleArray([...randomSb, ...randomStudent]));
  }, []); // Empty array ensures this runs only once

  return (
    <div className="relative py-24 px-6 md:px-12 lg:px-24 bg-gray-50 text-gray-900 overflow-hidden font-sans">
      
      {/* --- Section Header --- */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 inline-block relative tracking-tight pb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our <span className="text-ieee-blue">Achievements</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-ieee-blue rounded-full"></span>
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-6 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Celebrating the collective milestones of our Student Branch and the outstanding achievements of our individual members.
        </motion.p>
      </div>

      {/* --- Simplified Random Image Gallery --- */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {randomImages.map((src, idx) => (
          <AwardCard
            key={src}
            src={src}
            alt={`Achievement ${idx + 1}`}
            onClick={() => setSelectedImg(src)}
            layoutId={`image-${src}`}
          />
        ))}
      </motion.div>

      {/* --- Lightbox Modal --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4'
            onClick={() => setSelectedImg(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              layoutId={`image-${selectedImg}`}
              src={selectedImg}
              alt="Enlarged achievement"
              className='max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl'
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Achievements;