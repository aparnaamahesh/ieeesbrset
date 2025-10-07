import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// ... (all your other component imports remain the same)
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Execom from './components/Execom';
import Societies from './components/Societies';
import Navbar from './components/Navbar';
import Events from './components/Events';
import Profile from './components/Profile';
import EventDetail from './components/EventDetails';
import Newsletters from './components/Newsletters';
import Announcements from './components/Announcements';
import IEEEMembership from './components/IEEEMembership';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => (
  <>
    <Header />
    <About />
    <IEEEMembership/>
    <Societies />
    <Announcements />
    <Newsletters />
    <Gallery />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

// Layout component to conditionally apply background
const Layout = ({ children }) => {
  const location = useLocation();
  const noBgPages = ['/events', '/execom'];

  // ❌ REMOVED: This line was incorrectly hiding the background on event detail pages.
  // const isEventDetailPage = location.pathname.startsWith('/event/');
  
  // ✅ CHANGED: Simplified the logic to only check the noBgPages array.
  const isNoBg = noBgPages.includes(location.pathname);

  return (
    <div
      className="w-full min-h-screen overflow-hidden"
      style={
        !isNoBg
          ? {
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url('/bg.jpg')",
              backgroundAttachment: 'fixed',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      <ToastContainer />
      <Navbar />
      {children}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/execom" element={<Execom />} />
          <Route path="/profile/:memberId" element={<Profile />} />
          <Route path="/event/:eventId" element={<EventDetail />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;