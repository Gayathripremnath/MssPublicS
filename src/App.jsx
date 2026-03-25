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
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';


function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        {!isMobileMenuOpen && <TopBar />}
        <Navbar 
          isScrolled={isScrolled} 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <HomePage />
              <AboutSection />
              <PrincipalMessage />
              <StudyResources />
              <BlogSection />
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
