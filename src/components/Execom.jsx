import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// --- DATA (Unchanged) ---
const societyNames = {
  SB: "Student Branch",
  CS: "Computer Society",
  IAS: "Industry Applications Society",
  PES: "Power & Energy Society",
  RAS: "Robotics & Automation Society",
  SPS: "Signal Processing Society",
  WIE: "Women in Engineering Affinity Group",
};

const societies = {
  SB: [
    { name: "Rinza Yunus", position: "IEEE Student Branch Chair", img: "Rinza.jpg", link: "rinza" },
    { name: "Alias Eldo", position: "IEEE Student Branch Vice Chair", img: "AliasEldo.jpg", link: "alias" },
    { name: "Amelin Alexander Rathappillil", position: "Secretary", img: "Amelin.jpg", link: "amelin" },
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
    { name: "Navaneeth K.B", position: "Chair", img: "Navaneeth K.B.jpg", link: "navaneeth" },
    { name: "Richard Sabu", position: "Vice Chair", img: "Richard 1.jpg", link: "richard" },
    { name: "Nihala Nizamudeen", position: "Secretary", img: "NIHALA NIZAMUDEEN .HEIC", link: "nihala" },
    { name: "Punya D", position: "Treasurer", img: "Punya D.JPG", link: "punya" },
  ],
  IAS: [
    { name: "Namitha Mariam John", position: "Chair", img: "Namitha Mariam John.jpeg", link: "namitha" },
    { name: "Darsan Dileep", position: "Vice Chair", img: "Darsan Dileep.JPG", link: "darsan" },
    { name: "Shreya M", position: "Secretary", img: "Shreya M.JPG", link: "shreya" },
    { name: "Nia Jobby", position: "Treasurer", img: "Nia Jobby .jpg", link: "nia" },
  ],
  PES: [
    { name: "Diya Sarah", position: "Chair", img: "Diya Sarah.jpg", link: "diya" },
    { name: "Ashish John Binu", position: "Vice Chair", img: "Ashish John Binu.jpg", link: "ashish" },
    { name: "Neha Biju", position: "Secretary", img: "Neha Biju.JPEG", link: "neha" },
    { name: "Joel John Thumpayil", position: "Treasurer", img: "Joel John Thumpayil.jpg", link: "joel" },
  ],
  RAS: [
    { name: "Abner Sebastian Lopez", position: "Chair", img: "Abner.jpg", link: "abner" },
    { name: "Akul Prasanth", position: "Vice Chair", img: "Akul Prasanth .jpg", link: "akul" },
    { name: "Adheetha krishnaja", position: "Secretary", img: "Adheetha krishnaja .jpg", link: "adheetha" },
    { name: "Milee B Kokkatt", position: "Treasurer", img: "Milee.jpg", link: "milee" },
  ],
  SPS: [
    { name: "Jeremy Simon Moncey", position: "Chair", img: "Jeremy.jpg", link: "jeremy" },
    { name: "Jenet Joseph", position: "Vice Chair", img: "Jenet Joseph.jpg", link: "jenet" },
    { name: "Keerthana S", position: "Secretary", img: "Keerthana.jpg", link: "keerthana" },
    { name: "Pooja S Nair", position: "Treasurer", img: "Pooja.jpg", link: "pooja" },
  ],
  WIE: [
    { name: "Sreepriya S", position: "Chair", img: "Sreepriya.jpg", link: "sreepriya" },
    { name: "Anagha N Nath", position: "Vice Chair", img: "Anagha N Nath.jpg", link: "anagha" },
    { name: "Neha R Jacob", position: "Secretary", img: "Neha R Jacob.jpg", link: "nehar" },
    { name: "Ananya Merlyn George", position: "Treasurer", img: "Ananya Merlyn George .jpg", link: "ananya" },
  ],
};

// --- UTILITY ---
const preloadImages = (societies) => {
  Object.values(societies).flat().forEach((m) => {
    const img = new Image();
    img.src = `/Execom25/${m.img}`;
  });
};

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// --- Reusable MemberCard Component ---
const MemberCard = ({ member, onClick }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -5 }}
    className="member-card group" // ✅ CORRECTED: 'group' class is here
    onClick={onClick}
  >
    <div className="member-card-image-wrapper">
      <img
        loading="lazy"
        src={`/Execom25/${member.img}`}
        alt={member.name}
        className="member-card-image"
      />
    </div>
    <div className="member-card-content">
      <h5 className="member-card-name">{member.name}</h5>
      <p className="member-card-position">{member.position}</p>
    </div>
  </motion.div>
);

// --- Main Execom Page Component ---
const Execom = () => {
  const navigate = useNavigate();

  useEffect(() => {
    preloadImages(societies);
  }, []);

  const handleRedirect = (linkId) => {
    if (linkId) navigate(`/profile/${linkId}`);
  };

  return (
    <div className="execom-page">
      {/* --- HERO BANNER --- */}
      <header className="hero-banner">
        <img
          src="/banner2.JPG"
          alt="Execom Banner"
          className="hero-banner-bg"
        />
        <div className="hero-banner-overlay" />
        <div className="hero-banner-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Executive Committee <span className="hero-title-accent">2025</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Meet the dedicated team driving innovation and excellence at IEEE RSET SB.
          </motion.p>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="main-content">
        {Object.entries(societies).map(([societyKey, members]) => (
          <section key={societyKey} className="society-section">
            <div className="society-header">
              <motion.h2
                className="society-title"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {societyNames[societyKey]}
                <span className="society-title-underline"></span>
              </motion.h2>
            </div>

            <motion.div
              className="member-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {members.map((member, i) => (
                <MemberCard
                  key={`${societyKey}-${i}`}
                  member={member}
                  onClick={() => handleRedirect(member.link)}
                />
              ))}
            </motion.div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Execom;