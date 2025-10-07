import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from "framer-motion";
import { Link } from 'react-router-dom';

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

// --- Animated Counter Component ---
const AnimatedCounter = ({ to }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const value = parseInt(to, 10);
    const suffix = to.includes('+') ? '+' : '';

    useEffect(() => {
        if (isInView && ref.current) {
            const node = ref.current;
            const controls = animate(0, value, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate(latest) {
                    node.textContent = Math.round(latest) + suffix;
                }
            });
            return () => controls.stop();
        }
    }, [isInView, value, suffix]);

    return <span ref={ref}>0</span>;
};

// --- Reusable Stat Item Component ---
const StatItem = ({ count, label }) => (
    <div className="text-center">
        <p className='text-4xl lg:text-5xl font-extrabold text-cyan-400'>
            <AnimatedCounter to={count} />
        </p>
        <p className='text-gray-300 text-sm mt-1'>{label}</p>
    </div>
);

const About = () => {
  return (
    <section
      id='about'
      className='relative py-24 px-6 md:px-12 lg:px-24 text-gray-900 overflow-hidden font-sans'
    >
      {/* Main Content Card - Now contains the entire section logic */}
      <motion.div 
        className='bg-gray-900/90 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl max-w-7xl mx-auto'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Section Header - MOVED INSIDE THE CARD */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
            <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white inline-block relative tracking-tight pb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            >
            About <span className="text-cyan-400">Our Student Branch</span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-cyan-400 rounded-full"></span>
            </motion.h2>
        </div>

        <motion.div 
          className='flex flex-col lg:flex-row items-center gap-10 lg:gap-16'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/2 flex-shrink-0">
            <img
              src={'src/assets/title.jpeg'} 
              alt="IEEE RSET Student Branch"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </motion.div>

          {/* Text and Stats Section */}
          <motion.div className='flex flex-col justify-center lg:w-1/2' variants={itemVariants}>
            <div className='grid grid-cols-2 gap-8 mb-8'>
              {[
                { count: "10+", label: "Years of Excellence" },
                { count: "50+", label: "Workshops Conducted" },
                { count: "100+", label: "Active Members" },
                { count: "20+", label: "Awards Won" },
              ].map((item) => (
                <StatItem key={item.label} count={item.count} label={item.label} />
              ))}
            </div>

            <p className='text-gray-300 leading-relaxed text-left'>
              The IEEE Student Branch of Rajagiri School of Engineering and Technology is a vibrant community of innovators, leaders, and problem-solvers. We are dedicated to advancing technology for the benefit of humanity.
              <br /><br />
              Through workshops, competitions, and technical talks, we provide a platform for students to develop their skills, network with professionals, and turn their creative ideas into reality.
            </p>
{/* 
            <Link to="/about">
              <motion.button 
                className='mt-8 bg-cyan-500 text-gray-900 font-bold px-7 py-3 rounded-lg self-start shadow-lg hover:bg-cyan-600 transition'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </Link> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

