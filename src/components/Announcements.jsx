import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data for the two galleries ---
const sbImages = [
  '/SbAwards/sba2.jpeg',
  '/SbAwards/sba3.jpeg',
  '/SbAwards/sba4.png',
  '/SbAwards/sba5.jpeg',
  '/SbAwards/sba6.jpeg',
  '/SbAwards/sba7.jpeg',
  '/SbAwards/sba8.jpeg',
  '/SbAwards/sba9.jpeg',
];

const studentImages = [
  '/StudentAwards/sa1.jpeg',
  '/StudentAwards/sa2.jpeg',
  '/StudentAwards/sa3.jpeg',
  '/StudentAwards/sa4.jpeg',
];

// --- ANIMATION VARIANTS (Faster for a snappier feel) ---
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

const galleryVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: 'easeInOut' } },
};

// ✅ Reusable AwardCard Component
const AwardCard = ({ src, alt, onClick, layoutId }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -6 }}
    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer"
    onClick={onClick}
  >
    {/* ✅ Consistent Image Sizing using aspect-ratio for a gallery look */}
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

const Announcements = () => {
  const [activeTab, setActiveTab] = useState('sb');
  const [selectedImg, setSelectedImg] = useState(null);

  const currentImages = activeTab === 'sb' ? sbImages : studentImages;
  const gridColsClass = activeTab === 'sb' ? 'lg:grid-cols-4' : 'lg:grid-cols-3 xl:grid-cols-4';

  return (
    // ✅ Professional Color Palette & Typography
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
          Celebrating the collective milestones of our Student Branch and the outstanding achievements of our individual members.
        </motion.p>
      </div>

      {/* --- Animated Tab Switcher --- */}
      <div className="flex justify-center mb-16">
        <div className="flex space-x-2 bg-gray-200 p-1.5 rounded-full">
          {['sb', 'student'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-5 py-2 text-base font-semibold rounded-full transition-colors duration-300 md:px-6 md:text-lg ${
                activeTab === tab ? 'text-white' : 'text-ieee-blue hover:bg-white/60'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-ieee-blue rounded-full"
                  transition={{ type: 'spring', stiffness: 250, damping: 25 }}
                />
              )}
              <span className="relative z-10">
                {tab === 'sb' ? 'SB Achievements' : 'Student Awards'}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* --- Galleries with Transition Animation --- */}
      <AnimatePresence mode="wait">
        <motion.div
            key={activeTab}
            variants={galleryVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
          <motion.div
            className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-8 max-w-7xl mx-auto`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {currentImages.map((src, idx) => (
              <AwardCard
                key={src}
                src={src}
                alt={`${activeTab === 'sb' ? 'SB Achievement' : 'Student Award'} ${idx + 1}`}
                onClick={() => setSelectedImg(src)}
                layoutId={`image-${src}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

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

export default Announcements;
