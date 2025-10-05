import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- Data for Gallery ---
const events = [
  { title: "TechTalks 2024", date: "Jan 15, 2024", image: "/Events/g1.png" },
  { title: "InnovateX Hackathon", date: "Feb 10, 2024", image: "/Events/g2.jpeg" },
  { title: "WIE Empower Summit", date: "Mar 8, 2024", image: "/Events/g3.jpeg" },
  { title: "RAS Robotics Expo", date: "Apr 5, 2024", image: "/Events/g4.jpeg" },
  { title: "Event Photography Workshop", date: "May 20, 2024", image: "/Events/g5.jpeg" },
  { title: "Annual General Meeting", date: "Jun 1, 2024", image: "/Events/g6.jpeg" },
];

// --- Inline SVG Icons for Navigation ---
const IconLeftArrow = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
);

const IconRightArrow = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);


// --- Reusable Gallery Card Component ---
const GalleryCard = ({ event }) => (
    <motion.div
        whileHover={{ y: -6 }}
        className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
    >
        {/* Consistent Image Sizing */}
        <div className="aspect-video overflow-hidden">
            <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
            />
        </div>
        {/* Left-aligned Text */}
        <div className="p-5 text-left">
            <h3 className="text-lg font-bold text-gray-800 truncate">
                {event.title}
            </h3>
            <p className="text-sm text-ieee-blue font-medium mt-1">
                {event.date}
            </p>
        </div>
    </motion.div>
);


const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1280) setCardsToShow(3);
            else if (window.innerWidth >= 768) setCardsToShow(2);
            else setCardsToShow(1);
        };
        updateCardsToShow();
        window.addEventListener("resize", updateCardsToShow);
        return () => window.removeEventListener("resize", updateCardsToShow);
    }, []);

    useEffect(() => {
        let interval;
        if (!isHovered) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % events.length);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isHovered, events.length]);

    const nextEvent = () => setCurrentIndex((prev) => (prev + 1) % events.length);
    const prevEvent = () => setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);

    return (
        <div className="relative py-24 px-6 md:px-12 lg:px-24 bg-gray-50 text-gray-900 overflow-hidden font-sans" id="gallery">
            
            {/* --- Section Header --- */}
            <div className="text-center mb-12 max-w-4xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-gray-900 inline-block relative tracking-tight pb-3"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    Event <span className="text-ieee-blue">Gallery</span>
                    {/* Polished, centered underline */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-ieee-blue rounded-full"></span>
                </motion.h2>
                <motion.p
                    className="text-gray-600 mt-6 text-base md:text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                   A glimpse into our vibrant workshops, seminars, and community gatherings.
                </motion.p>
            </div>
            
            {/* --- Gallery Carousel --- */}
            <div 
                className="max-w-7xl mx-auto relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                 {/* Navigation Buttons */}
                <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full z-20 px-4 pointer-events-none">
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prevEvent} className="p-2 rounded-full bg-ieee-blue text-white shadow-lg hover:bg-opacity-90 transition pointer-events-auto -ml-12">
                        <IconLeftArrow />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={nextEvent} className="p-2 rounded-full bg-ieee-blue text-white shadow-lg hover:bg-opacity-90 transition pointer-events-auto -mr-12">
                        <IconRightArrow />
                    </motion.button>
                </div>

                <div className="overflow-hidden">
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: `calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * (24 / cardsToShow)}px)` }}
                        transition={{ type: "spring", stiffness: 220, damping: 30 }}
                    >
                        {events.map((event, index) => (
                            <div key={index} className="flex-shrink-0" style={{ width: `calc(${100 / cardsToShow}% - ${ (cardsToShow - 1) * 24 / cardsToShow}px)` }}>
                                <GalleryCard event={event} />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;

