import React from 'react';
import { motion } from 'framer-motion';

// --- Data for Newsletters ---
const newslettersData = [
  {
    title: 'Newsletter 2024',
    previewImage: '/Newsletters/Newsletter_2024.png',
    pdfUrl: '/Newsletters/IEEE_RSET_SB_Newsletter_2024.pdf',
    fileName: 'IEEE_RSET_SB_Newsletter_2024.pdf'
  },
  {
    title: 'Newsletter 2023',
    previewImage: '/Newsletters/Newsletter_2023.png',
    pdfUrl: '/Newsletters/IEEE_RSET_SB_Newsletter_2023.pdf',
    fileName: 'IEEE_RSET_SB_Newsletter_2023.pdf'
  },
  {
    title: 'Newsletter 2022',
    previewImage: '/Newsletters/Newsletter_2022.png',
    pdfUrl: '/Newsletters/IEEE_RSET_SB_Newsletter_2022.pdf',
    fileName: 'IEEE_RSET_SB_Newsletter_2022.pdf'
  }
];

// --- ANIMATION VARIANTS (Faster for a snappier feel) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.98 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// --- Inline SVG components ---
const IconView = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const IconDownload = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);


// --- Reusable NewsletterCard Component ---
const NewsletterCard = ({ newsletter }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -6 }}
    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={newsletter.previewImage}
        alt={`Preview of ${newsletter.title}`}
        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out"
        onError={(e) => { e.target.onerror = null; e.target.src='/Newsletters/default-preview.png' }}
      />
    </div>
    <div className="p-5 text-left flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-800 mb-3 flex-grow">
        {newsletter.title}
      </h3>
      <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 mt-auto">
        <a
          href={newsletter.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-ieee-blue text-white font-semibold rounded-md hover:bg-opacity-90 transition-colors shadow-sm"
        >
          <IconView className="mr-2" />
          View
        </a>
        <a
          href={newsletter.pdfUrl}
          download={newsletter.fileName}
          className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors shadow-sm"
        >
          <IconDownload className="mr-2" />
          Download
        </a>
      </div>
    </div>
  </motion.div>
);

const Newsletters = () => {
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
          Our <span className="text-ieee-blue">Newsletters</span>
          {/* ✅ UPDATED: Professional, centered underline */}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-ieee-blue rounded-full"></span>
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-6 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Check out the latest news, events, and achievements from our Student Branch.
        </motion.p>
      </div>

      {/* --- Newsletters Grid --- */}
      <motion.div
        // ✅ UPDATED: Grid layout to support three columns and wider max-width
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {newslettersData.map((newsletter, index) => (
          <NewsletterCard key={index} newsletter={newsletter} />
        ))}
      </motion.div>
    </div>
  );
};

export default Newsletters;

