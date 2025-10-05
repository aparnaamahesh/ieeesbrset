import React from 'react';
import { motion } from 'framer-motion';

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

// --- INLINE SVG ICON ---
const IconCheck = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

// --- REUSABLE COMPONENTS ---
const MembershipBenefit = ({ children }) => (
    <li className="flex items-start">
        <IconCheck className="text-ieee-blue mr-3 mt-1 h-5 w-5 flex-shrink-0" />
        <span>{children}</span>
    </li>
);

const IEEEMembership = () => {
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
          Become an <span className="text-ieee-blue">IEEE Member</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-ieee-blue rounded-full"></span>
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-6 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join a global community of innovators and unlock a world of resources designed to help you succeed in your academic and professional journey.
        </motion.p>
      </div>

      {/* --- Membership Cards --- */}
      <motion.div
        className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Card 1: Standard Student Membership */}
        <motion.div
          variants={itemVariants}
          className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 flex flex-col"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Membership</h3>
          <p className="text-5xl font-extrabold text-ieee-blue mb-2">
            $27<span className="text-xl font-medium text-gray-500">.00 USD/year*</span>
          </p>
          <p className="text-gray-500 mb-8 text-sm">*Price may vary based on region.</p>
          <ul className="space-y-4 text-gray-700 text-base flex-grow">
            <MembershipBenefit>IEEE Spectrum Magazine subscription</MembershipBenefit>
            <MembershipBenefit>Full access to the IEEE Xplore Digital Library</MembershipBenefit>
            <MembershipBenefit>Discounts on the IEEE eLearning Library</MembershipBenefit>
            <MembershipBenefit>Global networking opportunities</MembershipBenefit>
          </ul>
        </motion.div>

        {/* Card 2: Society Membership */}
        <motion.div
          variants={itemVariants}
          className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 flex flex-col"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Add Technical Societies</h3>
          <p className="text-3xl font-extrabold text-ieee-blue mb-2">
            Enhance Your Focus
          </p>
          <p className="text-gray-500 mb-8">Join societies dedicated to your specific fields of interest, like Computer Science, Robotics, or Power & Energy.</p>
          <ul className="space-y-4 text-gray-700 text-base flex-grow">
            <MembershipBenefit>Receive specialized magazines and publications</MembershipBenefit>
            <MembershipBenefit>Access to exclusive conferences and events</MembershipBenefit>
            <MembershipBenefit>Participate in expert-led technical webinars</MembershipBenefit>
            <MembershipBenefit>Take advantage of lower membership pricing for students</MembershipBenefit>
          </ul>
        </motion.div>
      </motion.div>

      {/* --- Join IEEE Button --- */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="https://www.ieee.org/membership/join/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-500 text-gray-900 font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-cyan-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join IEEE Today
        </motion.a>
      </motion.div>
    </div>
  );
};

export default IEEEMembership;

