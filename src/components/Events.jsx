import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./styles.css"; // Use the common stylesheet
import {upcomingEvents,pastEvents} from '../data/Events'; // Assuming data is imported

// --- ANIMATION VARIANTS ---
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 }, }, };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' }, }, };

// --- Reusable Card Components ---
const UpcomingEventCard = ({ event }) => ( <motion.div variants={itemVariants} whileHover={{ y: -6 }} className="event-card group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col" > <div className="aspect-video overflow-hidden"> <img src={event.image} alt={event.name} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" /> </div> <div className='p-6 flex flex-col flex-grow'> <p className='text-sm text-ieee-blue font-semibold mb-2'>{event.date}</p> <h4 className='text-xl font-bold text-gray-800 mb-3'>{event.name}</h4> <p className='text-gray-600 mb-6 text-sm leading-relaxed flex-grow'>{event.description}</p> <div className="mt-auto flex flex-col sm:flex-row gap-3"> <Link to={`/event/${event.id}`} className='text-center w-full bg-gray-700 text-white px-5 py-2.5 rounded-md hover:bg-gray-800 transition shadow-sm font-semibold'> View Details </Link> <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className='text-center w-full bg-ieee-blue text-white px-5 py-2.5 rounded-md hover:bg-opacity-90 transition shadow-sm font-semibold'> Register Now </a> </div> </div> </motion.div> );
const PastEventCard = ({ event }) => ( <motion.div variants={itemVariants} whileHover={{ y: -6 }} className="event-card group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200" > <div className="aspect-[4/3] overflow-hidden"> <img src={event.image} alt={event.name} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" /> </div> <div className='p-4'> <p className='text-xs text-gray-500 mb-1'>{event.date}</p> <h5 className='text-base font-bold text-gray-800 leading-tight truncate'>{event.name}</h5> </div> </motion.div> );

const Events = () => {
  return (
    <div>
      <header className="hero-banner">
        <img src="/banner.png" alt="Events Banner" className="hero-banner-bg" />
        <div className="hero-banner-overlay" />
        <div className="relative z-10">
          <motion.h1 className="hero-title" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Our <span className="hero-title-accent">Events</span>
          </motion.h1>
          <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Discover our upcoming workshops, seminars, and competitions.
          </motion.p>
        </div>
      </header>

      <main className="main-content">
        {/* <section className='page-section'>
          <div className="section-header">
            <motion.h2 className="section-title" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              Upcoming <span className="text-ieee-blue">Events</span>
              <motion.span className="title-underline absolute bottom-0 left-1/2 -translate-x-1/2" initial={{ width: "0%" }} whileInView={{ width: "40%" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} viewport={{ once: true }} />
            </motion.h2>
          </div>
          <motion.div className='event-grid-large' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {upcomingEvents.map((event) => <UpcomingEventCard key={event.id} event={event} />)}
          </motion.div>
        </section> */}

        <section className='page-section'>
          {/* <div className="section-header">
             <motion.h2 className="section-title" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              Our <span className="text-ieee-blue">Past Events</span>
              <motion.span className="title-underline absolute bottom-0 left-1/2 -translate-x-1/2" initial={{ width: "0%" }} whileInView={{ width: "40%" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} viewport={{ once: true }} />
            </motion.h2>
          </div> */}

          {Object.entries(pastEvents).map(([society, events]) => (
            <div key={society} className='mb-16'>
              <div className="text-center mb-8">
                <h3 className="section-subtitle">
                    {society}
                    <span className="subtitle-underline absolute bottom-0 left-1/2 -translate-x-1/2"></span>
                </h3>
              </div>
              <motion.div className='event-grid-small' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                {events.map((event, index) => <PastEventCard key={`${society}-${event.name}-${index}`} event={event} />)}
              </motion.div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Events;