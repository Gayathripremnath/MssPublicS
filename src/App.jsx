import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomePage from './components/HomePage';
import Home from './components/Home';
import FloatingContact from './components/FloatingContact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [isBannerHidden, setIsBannerHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);

      const scrollingDown = currentY > lastScrollY.current;
      const hasLeftHeroArea = currentY > 120;
      const isDesktop = window.innerWidth > 992;

      if (isDesktop && scrollingDown && hasLeftHeroArea) {
        setIsNavHidden(true);
      } else {
        setIsNavHidden(false);
      }

      // Hide the large banner after the user starts scrolling
      const hideThreshold = 80;
      setIsBannerHidden(currentY > hideThreshold);

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        {!isMobileMenuOpen && <TopBar />}
        <Navbar
          isScrolled={isScrolled}
          isNavHidden={isNavHidden}
          isBannerHidden={isBannerHidden}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <Routes>
          <Route path="/" element={
            <>
              <Hero innerRef={heroRef} />
              <HomePage />
              <Home />
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
