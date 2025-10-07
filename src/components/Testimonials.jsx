import React from "react";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "ER. A SUHAIR",
    title: "Chair IEEE PES Kerala Chapter",
    image: "public/Testimonial/suhair.png",
    alt: "Er. A Suhair",
    text: `I am happy to endorse that IEEE PES Student Branch of RSET has been quite active from its inception and has been organizing quality events and won recognition. I hope they will continue to do the good work and will remain the pride of the IEEE Student community in the years to come. Wishing them all the very best.`,
  },
  {
    name: "DR. BIJUNA KUNJU K",
    title: "Professor and Head, DEE TKMCE, Kollam",
    image: "public/Testimonial/bijuna.png",
    alt: "Dr. Bijuna Kunju K",
    text: `It is indeed a very happy feeling to write about the IAS SB Chapter of RSET. Being the Chair of IA/IE/PELS Joint Chapter Kerala, I had the very rare opportunity to work together with two volunteers of RSET, Eldho and Nivetha. I do congratulate the SB Chapter of RSET for moulding these volunteers as the best volunteers of the Section. All the best in all your future endeavours also. With the SB under the control of Nivetha, I am sure it will reap success after success.`,
  },
];

// Consistent animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Reusable TestimonialCard Component
const TestimonialCard = ({ testimonial }) => (
    <motion.div
        variants={itemVariants}
        whileHover={{ y: -8 }}
        className="relative group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 p-8 pb-24"
    >
        {/* Quote Icon */}
        <motion.div
            className="text-6xl text-ieee-blue/10 mb-4 absolute top-4 left-4"
            initial={{ opacity: 0, rotate: -15 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
        >
            ❝
        </motion.div>

        {/* Text */}
        <p className="text-base leading-relaxed text-gray-700 italic relative z-10">
            {testimonial.text}
        </p>

        {/* Author Section */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 w-full">
            <motion.img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="text-center bg-white px-4 py-1 rounded-lg">
                <p className="font-bold text-ieee-blue tracking-wide text-sm">
                    {testimonial.name}
                </p>
                <p className="text-gray-500 text-xs">{testimonial.title}</p>
            </div>
        </div>
    </motion.div>
);


const Testimonials = () => {
  return (
    <section
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-gray-50 text-gray-900 overflow-hidden font-sans"
      id="testimonials"
    >
      
      {/* Section Header */}
      <div className="text-center mb-24 max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 inline-block relative tracking-tight pb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Words From Our <span className="text-ieee-blue">Mentors</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-ieee-blue rounded-full"></span>
        </motion.h2>
      </div>

      {/* Testimonials Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-24 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;

