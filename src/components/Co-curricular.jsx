import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Co-curricular.css';
import co1 from '../assets/07.jpg';
import mag from '../assets/mag.jpg';
import eng from '../assets/eng.jpg';
import pta from '../assets/44001.jpg';
import sci from '../assets/04.jpg';
import nat from '../assets/img4.jpg';

const CoCurricular = () => {
  // Modal State tracking
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate();

  // Hardcoded rich text contents mapped directly from screenshots and portal details
  const facilitiesList = [
    { id: 'library', name: 'Library', desc: 'Our Library is set around an area of 30x20sq feet and is a store house of knowledge with more than 8000 books including Referance Books (KG - 200 Nos.,LP - 1000 Nos.,UP - 1500 Nos.,HS - 2300 Nos.,HSS - 3000 Nos). Our P.T.A has played a prominent role in embellishing the library with the help our students to out reach and get well equipped with knowledge in different fields. Weekly Periodicals - Sports star, The Week, Out look, Balarama Digest, Mathruboomi Azhchapadippu, Madhyamam Azhchapadippu, Time, India Today (Malayalam) etc. Fortnightly Periodicals - Magic Pot, Fortune etc. Monthly Periodicals like Tell me Why, School Master (IX &X) Basha Poshini, National Geographic, Competition Success Review, Science Refreshner, P.C.M Childrens Magazine, Competiton Refreshioner, G.K refreshner, Hoot &Toot Pallikkodam, India Today (Hindi) Champak, Gokulam, Out look (Hindi), Yathra, Sports magazine (Mathrubhumi), Children’s Digest, Tinkle, India Today (Malayalam) etc. make the world come in to the hands of our children. News Papers - The Hindu, Indian express, mathrubhumi, Malayala Manorama, Deshabhimani and Decan Chronicle make the students well informed and the peaceful atmosphere in the library sets a an ideal enviorment for reading.' },
    { id: 'laboratory', name: 'Laboratory', desc: 'Fully modernized hands-on experimental setup stations curated for high school and senior secondary practical courses adhering to the latest national curriculum parameters.' },
    { id: 'physics-lab', name: 'Physics Lab', desc: 'Equipped with precision optical benches, advanced electronic circuit kits, and mechanics experiment gear to give empirical dimension to core physics principles.' },
    { id: 'biology-lab', name: 'Biology Lab', desc: 'Fitted with advanced digital microscopes, biological models, preserved specimens, and anatomy skeletons facilitating detailed exploration of organic systems.' },
    { id: 'chemistry-lab', name: 'Chemistry Lab', desc: 'Features standard reagent sets, individualized safety fume hoods, and distillation set-ups allowing controlled chemical reactions and advanced compounding practices safely.' },
    { id: 'computer-lab', name: 'Computer Lab', desc: 'Hi-tech workstation lab featuring multi-core processing terminals networked into dedicated high-speed broadband fiber matrices supporting Python, databases, and software setups.' },
    { id: 'sports', name: 'Sports', desc: 'Holistic outdoor track arenas, modern football turf infrastructure, professional volleyball setups, and structured athletic coaching paths built for complete physical training programs.' },
    { id: 'amenities', name: 'Other Amenities', desc: 'Includes safe filter-purified drinking setups, high-sanitation smart wash areas, a complete basic first aid emergency healthcare center room, and visual smart classroom panels.' }
  ];

  const gridActivities = [
    {
      id: 'co-curricular-main',
      title: 'Co-Curricular Activities',
      shortDesc: 'M.S.S. Public School follows a holistic approach towards co-curricular activities. We aim at the all round personality development of learners...',
      fullDesc: 'M.S.S. Public School follows a holistic approach towards co-curricular activities. We aim at the all round personality development of learners, ensuring equal importance for co-curricular setups alongside core curriculums. From art, crafts, music, debating platforms to national canvas talent shows, we hone individual skills.',
      image: co1  
    },
    {
      id: 'magazine-activity',
      title: 'Magazine & Creative Outlets',
      shortDesc: 'School magazine and class magazines are releasing every year. It provides ample opportunities for the students to showcase their creative and imaginative ideas...',
      fullDesc: 'School magazine and class magazines are releasing every year. It provides ample opportunities for the students to showcase their creative and imaginative ideas across prose, drawings, self-written Malayalam, English, Arabic poetry lines, and local socio-scientific columns.',
      image: mag 
    },
    {
      id: 'english-skills',
      title: 'Special Program for English Communication',
      shortDesc: 'A number of novel and innovative programmes, for enhancing the English speaking skills, are introduced in the school. We are availing service of native speakers...',
      fullDesc: 'A number of novel and innovative programmes, for enhancing the English speaking skills, are introduced across all standards. We are availing curated training systems, group speech activities, communication drills, and specialized native speaker standard interaction setups to foster global fluency from primary batches onwards.',
      image: eng
    },
    {
      id: 'pta-body',
      title: 'PTA (Parent Teacher Association)',
      shortDesc: 'Parents are one of the main stake holders of school system. Our school is maintaining a good rapport with parents. Parents are part of all activities...',
      fullDesc: 'Parents are one of the main stake holders of our entire school structure ecosystem. Our school is maintaining an excellent rapport with parents via periodic transparent bodies. Parents are seamlessly woven as an integral part of academic trackers, fest reviews, moral modules, and school infrastructure reviews.',
      image: pta
    },
    {
      id: 'science-club',
      title: 'Science Club in collaboration with Planetarium',
      shortDesc: 'An innovative science lab is set up in the campus in collaboration with Regional Science Centre Kozhikode. It provides opportunities for students...',
      fullDesc: 'An innovative science lab framework is set up inside our campus grounds in direct collaborative tie-ups with Regional Science Centre Kozhikode. It provides highly immersive, rich opportunities for the student groups to perform space trackers, robotech modules, and custom physics engineering innovations.',
      image: sci
    },
    {
      id: 'nature-conservation',
      title: 'Nature Conservations & Eco Protection',
      shortDesc: 'Special programmes are conducting to make the students aware about the importance of conservation of Nature and environment. Our campus is maintained green...',
      fullDesc: 'Special interactive micro-programmes are conducted to instill deep eco-awareness regarding the vital preservation of nature and biodiversity. Our school campus is consciously maintained as an expansive zero-plastic green zone, teaching organic farming habits, waste recycling protocols, and global warming remediation values.',
      image: nat
    }
  ];

  const handleOpenModal = (item) => {
    setActiveModal(item);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="cocurricular-page">
      {/* Dynamic Modern Banner */}
      <div className="cc-hero-banner">
        <div className="cc-hero-overlay">
          <h1> Facilities & Co-Curricular </h1>
        </div>
      </div>

      <div className="cc-main-wrapper">
        {/* Left Side Navigation Panel: School Facilities */}
        <aside className="cc-sidebar-nav">
          <div className="sidebar-sticky-header">
            <h3>Infrastructure & Labs</h3>
            <p>Click any amenity to preview details</p>
          </div>
          <ul className="facility-links-list">
            {facilitiesList.map((fac) => (
              <li key={fac.id}>
                <button 
                  className="facility-nav-btn"
                  onClick={() => navigate(`/facilities/${fac.id}`)}
                >
                  <span className="bullet-dot"></span>
                  {fac.name}
                  <svg className="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Side: Modern Responsive Activity Grid */}
        <main className="cc-content-grid-area">
          <div className="grid-header-section">
            <h2>Holistic Development Modules</h2>
            <p>Explore our flagship co-curricular activities and school student clubs</p>
          </div>

          <div className="cc-cards-layout">
            {gridActivities.map((act) => (
              <div key={act.id} className="cc-feature-card">
                <div className="card-image-box">
                  <img src={act.image} alt={act.title} />
                  <div className="card-badge">M.S.S. Programs</div>
                </div>
                <div className="card-body-content">
                  <h4>{act.title}</h4>
                  <p>{act.shortDesc}</p>
                  <button 
                    className="cc-readmore-trigger"
                    onClick={() => handleOpenModal(act)}
                  >
                    <span>Read Full Details</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Reusable Interactive details Modal Component */}
      {activeModal && (
        <div className="cc-modal-backdrop" onClick={handleCloseModal}>
          <div className="cc-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top-bar">
              <h3>{activeModal.title}</h3>
              <button className="modal-close-btn" onClick={handleCloseModal}>
                &times;
              </button>
            </div>
            <div className="modal-inner-body">
              {activeModal.image && (
                <img src={activeModal.image} alt={activeModal.title} className="modal-banner-img" />
              )}
              <div className="modal-rich-text">
                <p>{activeModal.fullDesc}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-dismiss-action" onClick={handleCloseModal}>Close View</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoCurricular;