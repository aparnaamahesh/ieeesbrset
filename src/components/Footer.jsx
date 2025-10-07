import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delay: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// --- ✅ UPDATED Reusable NavLink Component ---
// This component now intelligently switches between <Link> for page navigation
// and <a> for same-page anchor links.
const FooterLink = ({ to, children }) => {
  const isAnchorLink = to.startsWith('#');

  // Common classes for both link types
  const linkClasses = "relative w-fit block hover:text-white transition-colors duration-300 group";

  return (
    <motion.li variants={itemVariants}>
      {isAnchorLink ? (
        <a href={to} className={linkClasses}>
          <span>{children}</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
      ) : (
        <Link to={to} className={linkClasses}>
          <span>{children}</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      )}
    </motion.li>
  );
};


const Footer = () => {
  return (
    <footer
      className="relative pt-20 pb-8 px-6 md:px-12 lg:px-24 bg-gray-900 w-full overflow-hidden text-gray-300 font-sans"
      id="footer"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,98,155,0.1),transparent_50%)] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Logo & Info */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <img
              className="w-36 mb-4"
              src="/logo.png"
              alt="IEEE RSET SB Logo"
            />
            <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
              IEEE Student Branch
              <br/>
              Rajagiri School of Engineering and Technology
              <br />
              Kakkanad, Kochi, Kerala - 682039
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-4 relative">
              Quick Links
              <span className="absolute left-0 -bottom-1.5 w-10 h-0.5 bg-ieee-blue rounded-full"></span>
            </h3>
            {/* ✅ UPDATED Links to use anchor paths */}
            <ul className="flex flex-col gap-3 text-gray-400">
                <FooterLink to="#about">About Us</FooterLink>
                <FooterLink to="/events">Events</FooterLink>
                <FooterLink to="/execom">Execom</FooterLink>
                <FooterLink to="#gallery">Gallery</FooterLink>
                <FooterLink to="#contact">Contact</FooterLink>
            </ul>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-4 relative">
              Stay Connected
              <span className="absolute left-0 -bottom-1.5 w-10 h-0.5 bg-ieee-blue rounded-full"></span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-xs text-sm">
              Get the latest news and updates from our SB.
            </p>
            <div className="flex gap-2 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-md bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 w-full flex-grow"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="py-3 px-5 rounded-md bg-cyan-500 hover:bg-opacity-90 text-white font-semibold transition-all duration-300 shadow-md"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-6 mt-16 text-center text-gray-500 text-sm"
        >
          © {new Date().getFullYear()} IEEE RSET SB. All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;