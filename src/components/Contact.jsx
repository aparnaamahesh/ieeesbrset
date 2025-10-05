import React, { useState } from 'react';
import { motion } from "framer-motion";
import { toast } from 'react-toastify';

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

// --- INLINE SVG ICONS ---
const IconMail = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const IconMapPin = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const IconLinkedin = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const IconInstagram = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const IconYoutube = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;


const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "c338cf41-bca2-4ad2-8f68-2d8b2e83fdc5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully!");
        event.target.reset();
      } else {
        toast.error(data.message || "Something went wrong.");
        setResult("Failed to send");
      }
    } catch (error) {
      toast.error("An error occurred during submission.");
      setResult("Submission Error");
    }
  };

  return (
    <section 
      id='contact' 
      className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden font-sans"
    >
      {/* Main Content Card */}
      <motion.div
        className='bg-gray-900/90 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl max-w-7xl mx-auto'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
            <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white inline-block relative tracking-tight pb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            >
            Contact <span className="text-cyan-400">Us</span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-cyan-400 rounded-full"></span>
            </motion.h2>
            <motion.p
                className="text-gray-300 mt-6 text-base md:text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Have a question or want to collaborate? Reach out, and we'll get back to you.
            </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column: Contact Info & Socials */}
          <motion.div 
            className="lg:w-2/5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-6">Get in Touch</motion.h3>
            <motion.div variants={itemVariants} className="space-y-5 text-gray-300">
              <div className="flex items-center gap-4">
                <IconMail className="text-cyan-400 text-2xl flex-shrink-0" />
                <a href="mailto:ieee@rajagiritech.edu.in" className="hover:text-cyan-400 transition">ieee@rajagiritech.edu.in</a>
              </div>
              <div className="flex items-start gap-4">
                <IconMapPin className="text-cyan-400 text-2xl mt-1 flex-shrink-0" />
                <span>Rajagiri School of Engineering & Technology, Kakkanad, Kochi, Kerala - 682039</span>
              </div>
            </motion.div>

            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mt-12 mb-6">Follow Us</motion.h3>
            <motion.div variants={itemVariants} className="flex items-center gap-6">
                <a href="https://www.linkedin.com/company/ieee-sb-rset/" target="_blank" rel="noopener noreferrer"><IconLinkedin className="text-gray-400 text-3xl hover:text-cyan-400 transition" /></a>
                <a href="https://www.instagram.com/ieee_sb_rset/" target="_blank" rel="noopener noreferrer"><IconInstagram className="text-gray-400 text-3xl hover:text-cyan-400 transition" /></a>
                <a href="https://www.youtube.com/@IEEESBRSET" target="_blank" rel="noopener noreferrer"><IconYoutube className="text-gray-400 text-3xl hover:text-cyan-400 transition" /></a>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Your Name</label>
                <input type="text" name="Name" required placeholder="John Doe" className="w-full bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition text-gray-200" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Your Email</label>
                <input type="email" name="Email" required placeholder="john@example.com" className="w-full bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition text-gray-200" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
                <textarea name="Message" required placeholder="Type your message here..." className="w-full bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-3 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 transition text-gray-200"></textarea>
              </div>
              <div className="text-left">
                <motion.button type="submit" className="bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-cyan-600 transition" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {result || "Send Message"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

