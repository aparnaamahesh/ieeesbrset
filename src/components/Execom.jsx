import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.97 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const societyNames = {
  SB: "Student Branch",
  CS: "Computer Society",
  IAS: "Industry Applications Society",
  PES: "Power & Energy Society",
  RAS: "Robotics & Automation Society",
  SPS: "Signal Processing Society",
  WIE: "Women in Engineering Affinity Group",
};

const preloadImages = (societies) => {
  Object.values(societies).flat().forEach((m) => {
    const img = new Image();
    img.src = `/Execom25/${m.img}`;
  });
};

const societies = {
  SB: [
    { name: "Dr. Elizabeth Rita Samuel", position: "Student Branch Counselor", img: "Dr. Elizabeth Rita Samuel.png", link: "elizabeth" },
    { name: "Rinza Yunus", position: "IEEE Student Branch Chair", img: "Rinza.jpg", link: "rinza" },
    { name: "Alias Eldo", position: "IEEE Student Branch Vice Chair", img: "AliasEldo.jpg", link: "alias" },
    { name: "Amelin Alexander Rathappillil", position: "Secretary", img: "amelin alexander.jpg", link: "amelin" },
    { name: "Athira Ajay", position: "Treasurer", img: "athira ajay.jpg", link: "athira" },
    { name: "Jala Vishwa Keerthi", position: "Technical Coordinator", img: "jala vishwa keerthi.png", link: "jala" },
    { name: "Adriel Bobby", position: "Electronic Communications Coordinator", img: "Adriel Bobby.jpg", link: "adriel" },
    { name: "Sangeeth M S", position: "Membership Development Coordinator", img: "Sangeeth m s.jpg", link: "sangeeth" },
    { name: "Behanan K Bahanan", position: "Membership Development Coordinator", img: "behanan k bahanan.jpg", link: "behanan" },
    { name: "Krishnapriya M", position: "Membership Development Coordinator", img: "krishnapriya m.jpg", link: "krishnapriya" },
    { name: "Noahan Zachariah Pradeep", position: "Membership Development Coordinator", img: "Noahan zacharia.png", link: "noahan" },
    { name: "Arun Vijo Tharakan", position: "Webmaster", img: "arun vijo.jpeg", link: "arun" },
    { name: "Aparna Mahesh", position: "Webmaster", img: "aparna mahesh.jpg", link: "aparna" },
    { name: "Ryyan Safar", position: "LINK Representative", img: "Ryyan Safar.png", link: "ryyan" },
    { name: "Abhinav s", position: "Design Lead", img: "Sabharish P V.jpg", link: "abhinav" },
    { name: "Sabharish PV", position: "Design Lead", img: "Sabharish P V.jpg", link: "sabharish" },
    { name: "Devamanas S", position: "Media Lead", img: "Devamanas S.JPG", link: "devamanas" },
    
  ],
  CS: [
    { name: "Ms. Anu Maria Joykutty", position: "Chapter Advisor", img: "Ms. Anu Maria Joykutty.png", link: "anu" },
    { name: "Navaneeth K.B", position: "Chair", img: "Navaneeth K.B.jpg", link: "navaneeth" },
    { name: "Richard Sabu", position: "Vice Chair", img: "Richard 1.jpg", link: "richard" },
    { name: "Nihala Nizamudeen", position: "Secretary", img: "NIHALA NIZAMUDEEN.png", link: "nihala" },
    { name: "Punya D", position: "Treasurer", img: "Punya D.JPG", link: "punya" },
  ],
  IAS: [
    { name: "Nitheesh Kurian", position: "IAS Chapter Advisor", img: "Nitheesh Kurian.png", link: "nitheesh" },
    { name: "Namitha Mariam John", position: "Chair", img: "Namitha Mariam John.jpeg", link: "namitha" },
    { name: "Darsan Dileep", position: "Vice Chair", img: "Darsan Dileep.JPG", link: "darsan" },
    { name: "Shreya M", position: "Secretary", img: "Shreya M.JPG", link: "shreya" },
    { name: "Nia Jobby", position: "Treasurer", img: "Nia Jobby .jpg", link: "nia" },
  ],
  PES: [
    { name: "Ginnes K John", position: "PES Chapter Advisor", img: "Ginnes K John.png", link: "ginnes" },
    { name: "Diya Sarah", position: "Chair", img: "Diya Sarah.jpg", link: "diya" },
    { name: "Ashish John Binu", position: "Vice Chair", img: "Ashish John Binu.jpg", link: "ashish" },
    { name: "Neha Biju", position: "Secretary", img: "Neha Biju.JPEG", link: "neha" },
    { name: "Joel John Thumpayil", position: "Treasurer", img: "Joel John Thumpayil.jpg", link: "joel" },
  ],
  RAS: [
    { name: "Dr. Elizabeth Rita Samuel", position: "RAS Chapter Advisor", img: "Dr. Elizabeth Rita Samuel.png", link: "elizabeth" },
    { name: "Abner Sebastian Lopez", position: "Chair", img: "Abner.jpg", link: "abner" },
    { name: "Akul Prasanth", position: "Vice Chair", img: "Akul Prasanth .jpg", link: "akul" },
    { name: "Adheetha krishnaja", position: "Secretary", img: "Adheetha krishnaja .jpg", link: "adheetha" },
    { name: "Milee B Kokkatt", position: "Treasurer", img: "Milee.jpg", link: "milee" },
  ],
  SPS: [
    { name: "Seema Safar", position: "SPS Chapter Advisor", img: "Seema Safar.png", link: "seema" },
    { name: "Jeremy Simon Moncey", position: "Chair", img: "Jeremy.jpg", link: "jeremy" },
    { name: "Jenet Joseph", position: "Vice Chair", img: "Jenet Joseph.jpg", link: "jenet" },
    { name: "Keerthana S", position: "Secretary", img: "Keerthana.jpg", link: "keerthana" },
    { name: "Pooja S Nair", position: "Treasurer", img: "Pooja.jpg", link: "pooja" },
  ],
  WIE: [
    { name: "Dr. Elizabeth Rita Samuel", position: "WIE Chapter Advisor", img: "Dr. Elizabeth Rita Samuel.png", link: "elizabeth" },
    { name: "Sreepriya S", position: "Chair", img: "Sreepriya.jpg", link: "sreepriya" },
    { name: "Anagha N Nath", position: "Vice Chair", img: "Anagha N Nath.jpg", link: "anagha" },
    { name: "Neha R Jacob", position: "Secretary", img: "Neha R Jacob.jpg", link: "nehar" },
    { name: "Ananya Merlyn George", position: "Treasurer", img: "Ananya Merlyn George .jpg", link: "ananya" },
  ],
};

const Execom = () => {
  const navigate = useNavigate();

  useEffect(() => {
    preloadImages(societies);
  }, []);

  const handleRedirect = (linkId) => {
    if (linkId) navigate(`/profile/${linkId}`);
  };

  return (
    <div className="relative py-24 px-6 md:px-20 lg:px-32 bg-[#e9f1fb] text-gray-900 overflow-hidden">
      <div className="relative w-screen h-[400px] -mx-6 md:-mx-20 lg:-mx-32 -mt-24 mb-24 overflow-hidden">
        <img
          src="/banner2.JPG"
          alt="Execom Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our <span className="text-blue-700">Executive Committee</span>
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The dedicated team driving innovation and excellence at IEEE RSET SB
            for the 2025 tenure.
          </motion.p>
        </div>
      </div>

      {Object.entries(societies).map(([societyKey, members]) => (
        <div key={societyKey} className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-extrabold text-gray-800 inline-block relative tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {societyNames[societyKey]}
              <motion.div
                className="absolute bottom-[-12px] left-0 w-full h-1 bg-blue-700 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {members.map((member, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl hover:border-blue-600/60 transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => handleRedirect(member.link)}
              >
                <div className="overflow-hidden h-80 relative min-h-[320px]">
                  <img
                    loading="lazy"
                    src={`/Execom25/${member.img}`}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-5 text-center">
                  <h5 className="text-md font-bold text-gray-800 group-hover:text-blue-700 transition-colors leading-tight truncate">
                    {member.name}
                  </h5>
                  <p className="text-xs text-gray-500 mt-1">
                    {member.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Execom;
