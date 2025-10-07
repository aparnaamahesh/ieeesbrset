import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// --- DATA ---
const upcomingEvents = [
    {
        id: 'ai-symposium-2025',
        name: 'AI Symposium 2025',
        date: 'October 15, 2025',
        description: 'A deep dive into the future of Artificial Intelligence, featuring talks from industry experts and IEEE researchers.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1170&q=80',
        registerLink: 'https://forms.gle/kHf5oDeBJhGssJhu8',
    },
    {
        id: 'techhack-2025',
        name: 'TechHack 2025',
        date: 'November 01, 2025',
        description: 'A 48-hour hackathon powered by IEEE, bringing together student developers, designers, and innovators.',
        image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1170&q=80',
        registerLink: 'https://forms.gle/kHf5oDeBJhGssJhu8',
    },
];

const pastEvents = {
    "Student Branch (SB)": [{ name: "DEBAITE", date: "2024-11-11", image: "/Events/DebAIte.jpg", }, { name: "Game Jam", date: "2024-09-29", image: "/Events/GameJam.jpg", }, { name: "Learn From Scratch", date: "2024-09-29", image: "/Events/Scratch.jpg", }, { name: "MD Session", date: "2024-03-23", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80", }, { name: "Tink-her-Hack 2.0", date: "2024-03-02", image: "/Events/Tinkerhack.png", }, ],
    "Robotics & Automation Society (RAS)": [{ name: "Robo Razz", date: "2024-09-27", image: "/Events/RoboRAZZ.jpeg", },],
    "Power & Energy Society (PES)": [{ name: "Project Green Future Talk", date: "2024-09-24", image: "/Events/GreenFuture.jpg", }, { name: "Solar Visit", date: "2024-10-04", image: "/Events/SolarVisit.jpg", },],
    "Industry Applications Society (IAS)": [{ name: "From Nature to Engineering", date: "2024-08-06", image: "/Events/Illuminar.jpg", }, { name: "GeoQuest", date: "2024-07-22", image: "/Events/GeoQuest.jpg", }, { name: "Maze Runner", date: "2024-10-26", image: "/Events/MazeRunner.jpeg", },],
    "Computer Society (CS)": [{ name: "AMONG US", date: "2024-10-26", image: "/Events/AmongUs.jpeg", }, { name: "Elev8", date: "2024-08-11", image: "/Events/Elev8.jpeg", }, { name: "Minute to Win It", date: "2024-10-03", image: "/Events/Min2Win.jpeg", },],
    "Signal Processing Society (SPS)": [{ name: "Immersive Signals: AR/VR", date: "2024-08-24", image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=1178&q=80", }, { name: "Triathlon of Minds", date: "2024-09-30", image: "/Events/Quiz.jpg", },],
    "Women in Engineering (WIE)": [{ name: "ASCENDIA", date: "2024-10-18", image: "/Events/Wie.jpg", }, { name: "Ignitia", date: "2024-07-11", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80", }, { name: "Origami Workshop", date: "2024-09-27", image: "https://images.unsplash.com/photo-1596193422492-749d017d8aad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", },],
};


// --- Reusable Components ---
const UpcomingEventCard = ({ event }) => (
    <motion.div
        variants={itemVariants}
        whileHover={{ y: -6 }}
        className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col"
    >
        <div className="aspect-video overflow-hidden">
            <img src={event.image} alt={event.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" />
        </div>
        <div className='p-6 flex flex-col flex-grow'>
            <p className='text-sm text-ieee-blue font-semibold mb-2'>{event.date}</p>
            <h4 className='text-xl font-bold text-gray-800 mb-3'>{event.name}</h4>
            <p className='text-gray-600 mb-6 text-sm leading-relaxed flex-grow'>{event.description}</p>
            <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <Link to={`/event/${event.id}`} className='text-center w-full bg-gray-700 text-white px-5 py-2.5 rounded-md hover:bg-gray-800 transition shadow-sm font-semibold'>
                    View Details
                </Link>
                <a href={'/event/$(index)'} target="_blank" rel="noopener noreferrer" className='text-center w-full bg-ieee-blue text-white px-5 py-2.5 rounded-md hover:bg-opacity-90 transition shadow-sm font-semibold'>
                    Register Now
                </a>
            </div>
        </div>
    </motion.div>
);

const PastEventCard = ({ event }) => (
    <motion.div
        variants={itemVariants}
        whileHover={{ y: -6 }}
        className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
    >
        <div className="aspect-[4/3] overflow-hidden">
            <img src={event.image} alt={event.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" />
        </div>
        <div className='p-4'>
            <p className='text-xs text-gray-500 mb-1'>{event.date}</p>
            <h5 className='text-base font-bold text-gray-800 leading-tight truncate'>{event.name}</h5>
        </div>
    </motion.div>
);


const Events = () => {
  return (
    <div className="relative bg-gray-50 text-gray-900 overflow-hidden font-sans">
      {/* --- Banner --- */}
      <header className='relative h-[450px] w-full flex items-center justify-center text-center px-4'>
        <img src="/banner.png" alt="Events Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <motion.h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Our <span className="text-cyan-400">Events</span>
          </motion.h1>
          <motion.p className="text-gray-200 mt-4 text-base md:text-lg max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Discover our upcoming workshops, seminars, and competitions, and explore our rich history of past events.
          </motion.p>
        </div>
      </header>

      <main className="py-24 px-6 md:px-12 lg:px-24">
        {/* --- UPCOMING EVENTS --- */}
        <section className='mb-24 max-w-7xl mx-auto'>
          <div className="text-center mb-16">
            <motion.h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 inline-block relative tracking-tight pb-3" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              Upcoming <span className="text-ieee-blue">Events</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-ieee-blue rounded-full"></span>
            </motion.h2>
          </div>
          <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-8' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {upcomingEvents.map((event) => <UpcomingEventCard key={event.id} event={event} />)}
          </motion.div>
        </section>

        {/* --- PAST EVENTS --- */}
        <section className='max-w-7xl mx-auto'>
          <div className="text-center mb-16">
            <motion.h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 inline-block relative tracking-tight pb-3" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              Our <span className="text-ieee-blue">Past Events</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-ieee-blue rounded-full"></span>
            </motion.h2>
          </div>
          {Object.entries(pastEvents).map(([society, events]) => (
            <div key={society} className='mb-16'>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 inline-block relative pb-2">
                    {society}
                    <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-ieee-blue rounded-full"></span>
                </h3>
              </div>
              <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                {events.map((event, index) => <PastEventCard key={index} event={event} />)}
              </motion.div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Events;

