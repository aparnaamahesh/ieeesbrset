import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- Reusable Icon Components (No external dependencies) ---
const IconCalendar = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const IconClock = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const IconUsers = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const IconMapPin = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const IconArrowLeft = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>;


// --- ANIMATION VARIANTS ---
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.15 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// --- DATA ---
const upcomingEvents = [
    {
        id: 'ai-symposium-2025',
        name: 'AI Symposium 2025',
        date: 'October 15, 2025',
        description: 'Join us for a deep dive into the future of Artificial Intelligence, featuring talks from industry experts and IEEE researchers. This full-day event includes keynote sessions, technical workshops, and networking opportunities with pioneers in the AI field.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1170&q=80',
        registerLink: 'https://forms.gle/kHf5oDeBJhGssJhu8',
        schedule: '10:00 AM - 5:00 PM',
        speakers: 'Dr. Evelyn Reed, Prof. Kenji Tanaka',
        location: 'RSET Convention Centre, Kochi',
    },
    {
        id: 'techhack-2025',
        name: 'TechHack 2025',
        date: 'November 01, 2025',
        description: 'A 48-hour hackathon powered by IEEE, bringing together student developers, designers, and innovators to solve real-world challenges. Compete for amazing prizes, attend mentorship sessions, and build something incredible.',
        image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1170&q=80',
        registerLink: 'https://forms.gle/kHf5oDeBJhGssJhu8',
        schedule: 'Starts 6:00 PM Friday, ends 6:00 PM Sunday',
        speakers: 'Mentors from Google, Microsoft, & more',
        location: 'Online / RSET Campus',
    },
];

const EventDetail = () => {
  const { eventId } = useParams();
  const event = upcomingEvents.find(e => e.id === eventId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eventId]);

  if (!event) {
    return (
      <div className="bg-gray-50 min-h-screen flex justify-center items-center py-24 px-6 font-sans">
        <motion.div
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Event Not Found</h1>
          <p className="text-lg text-gray-600">The event you are looking for does not exist or has passed.</p>
          <Link to="/events" className="mt-8 inline-flex items-center bg-ieee-blue text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition shadow-lg font-semibold">
            <IconArrowLeft className="mr-2 h-5 w-5"/>
            Back to Events
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative  text-gray-900 min-h-screen overflow-hidden font-sans">
        <div className="max-w-6xl mx-auto py-24 px-6 md:px-12">
            {/* Back to Events Link */}
            <motion.div initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} transition={{ duration: 0.6, delay: 0.2 }}>
                <Link to="/events" className="inline-flex items-center text-ieee-blue font-semibold hover:underline mb-8 group">
                    <IconArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                    Back to All Events
                </Link>
            </motion.div>

            <motion.div 
                className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl"
                variants={containerVariant}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="overflow-hidden rounded-xl mb-8 shadow-lg" variants={itemVariant}>
                    <img src={event.image} alt={event.name} className="w-full h-64 md:h-96 object-cover" />
                </motion.div>
                
                <motion.h1 variants={itemVariant} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">{event.name}</motion.h1>
                <motion.p variants={itemVariant} className="text-gray-600 text-lg leading-relaxed mb-8">{event.description}</motion.p>
                
                <hr className="my-8 border-gray-200" />

                {/* Event Info Grid */}
                <motion.div variants={itemVariant} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <IconCalendar className="text-ieee-blue text-3xl flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-gray-900">Date</h3>
                            <p>{event.date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <IconClock className="text-ieee-blue text-3xl flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-gray-900">Schedule</h3>
                            <p>{event.schedule}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <IconUsers className="text-ieee-blue text-3xl flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-gray-900">Key Speakers</h3>
                            <p>{event.speakers}</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={itemVariant} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mt-6 text-gray-800">
                    <IconMapPin className="text-ieee-blue text-3xl flex-shrink-0" />
                    <div>
                        <h3 className="font-bold text-gray-900">Location</h3>
                        <p>{event.location}</p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Registration Form Section */}
            <motion.div
                className="mt-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Register for this Event</h2>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-2">
                    <iframe
                        src={event.registerLink}
                        title="Registration Form"
                        className="w-full h-[700px] border-0 rounded-lg"
                        allowFullScreen
                    />
                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default EventDetail;

