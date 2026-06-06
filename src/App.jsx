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
import Aboutus from './components/Aboutus';
import Gallery from './components/Gallery';
import Result from './components/Result';
import ContactUs from './components/Contactus';
import Students from './components/Students';
import CoCurricular from './components/Co-curricular';
import Management from './components/Managemnet';
import Facilities from './components/Facilities';
import FacilityDetails from './components/FacilityDetails';
import AboutUs from './components/Aboutus';
import Mandatory from './components/Mandatory';
import PrincipalMessage from './components/Principal';
import Faculty from './components/Faculty';
import GalleryDetails from './components/GalleryDetails';
import Transfer from './components/Transfer';
import TransferDetails from './components/TransferDetails';
import Activities from './components/Activities';

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
          <Route path="/home" element={
            <>
              <Hero innerRef={heroRef} />
              <HomePage />
              <Home />
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/result" element={<Result />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cocurricular" element={<CoCurricular />} />
          <Route path="/management" element={<Management />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/facilities/:id" element={<FacilityDetails />} />
          <Route path="/mandatory" element={<Mandatory />} />
          <Route path="/principal" element={<PrincipalMessage />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/gallery/:id" element={<GalleryDetails />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/transfer/:id" element={<TransferDetails />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>

        <FloatingContact />
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
