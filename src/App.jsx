import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomePage from './components/HomePage';
import PrincipalMessage from './components/PrincipalMessage';
import StudyResources from './components/StudyResources';
import FloatingContact from './components/FloatingContact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        <TopBar />
        <Navbar isScrolled={isScrolled} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <HomePage />

              <PrincipalMessage />
              <StudyResources />
            </>
          } />
          {/* Add more routes here as the website grows */}
        </Routes>
        <FloatingContact />
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
