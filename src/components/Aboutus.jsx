import React from 'react';
import { Layers } from 'lucide-react';
import './Aboutus.css';
import museumImg from '../assets/44001.jpg';
import libraryImg from '../assets/lib.jpg';
import labImg from '../assets/lab.jpg';
import phy from '../assets/phy.jpg';
import bio from '../assets/bio.jpg';
import chem from '../assets/chemi.jpg';
import sports from '../assets/sports.jpeg';
import amen from '../assets/amenities.jpg';
import comp from '../assets/comp.jpg';

const AboutUs = () => {
  return (
    <div className="editorial-about-container">
      
      {/* ROW 0: HERO LANDING BANNER */}
      <div className="landing-banner">
        <div className="banner-overlay-gradient">
          <h1 className="banner-main-title">About Our Institution</h1>
          <div className="banner-gold-line"></div>
          <p className="banner-subtext">
            Education goes beyond textbooks and classrooms. We believe in empowering students to explore their passions and challenge conventions.
          </p>
        </div>
      </div>

      <div className="editorial-wrapper">
        
        {/* ROW 1: PREMIUM SPLIT - LEFT IMAGE & RIGHT CONTENT */}
        <div className="editorial-row row-intro-split">
          
          {/* Left Side: Elegant Focused Feature Image */}
          <div className="intro-split-image-zone">
            <div className="premium-frame-wrapper">
              <img 
                src={museumImg} 
                alt="M.S.S. Public School Campus Life" 
                className="premium-split-image"
              />
              <div className="frame-bottom-accent"></div>
            </div>
          </div>

          {/* Right Side: Clean Structured Core Content */}
          <div className="intro-split-text-zone">
            <span className="edi-meta-tag">KNOW OUR LEGACY</span>
            <h2 className="edi-main-title">Nurturing Excellence, Compassion & Values</h2>
            
            <div className="editorial-body-wrapper">
              <p className="edi-body-text highlighted-lead">
                Owned and managed by the well-known social and educational organization <strong>MUSLIM SERVICE SOCIETY (M.S.S.), Calicut</strong>, M.S.S. Public School offers kids the right atmosphere to learn regular lessons, understand the power of education and enjoy co-curricular activities.
              </p>
              <p className="edi-body-text">
                The school is open for boys and girls belonging to all sections, strata and communities. Our curriculum is fine-tuned to give children effective coaching, individual attention, diligent care and systematic study habits.
              </p>
            </div>

           

            {/* Minimal counter badges positioned cleanly under core copy */}
            <div className="edi-stats-row">
              <div className="edi-stat-pill"><strong>1100</strong><span>Active Students</span></div>
              <div className="edi-stat-pill"><strong>59</strong><span>Teaching Staff</span></div>
              <div className="edi-stat-pill"><strong>24</strong><span>Non-Teaching Staff</span></div>
            </div>
          </div>
          
        </div>

        {/* ROW 2: FACILITIES BANNER (Asymmetric Tall Columns Grid) */}
        <div className="editorial-section-header">
          <span className="section-vertical-tag">FACILITIES</span>
          <div className="section-title-block">
            <h2>Our World-Class Facilities</h2>
            <p>Providing cutting-edge spaces to support theoretical, practical, and sports instruction layouts.</p>
          </div>
        </div>

        <div className="editorial-facilities-strip">
          <div className="fac-tall-column">
            <img src={sports} alt="Sports" />
            <div className="column-over-gradient"></div>
            <div className="fac-content-block">
              <div className="fac-num">01</div>
              <h3>Sports</h3>
              <p>M.S.S. Public School gives much importance to physical activities like sports and athletics to foster physical fitness.</p>
            </div>
          </div>
          <div className="fac-tall-column">
            <img src={comp} alt="Computer Lab" />
            <div className="column-over-gradient"></div>
            <div className="fac-content-block">
              <div className="fac-num">02</div>
              <h3>Computer Lab</h3>
              <p>A modern, well-networked computer lab containing multiple high-end terminals for comprehensive digital learning.</p>
            </div>
          </div>
          <div className="fac-tall-column">
            <img src={chem} alt="Chemistry Lab" />
            <div className="column-over-gradient"></div>
            <div className="fac-content-block">
              <div className="fac-num">03</div>
              <h3>Chemistry Lab</h3>
              <p>Spread over 50x20 sq. feet area, fully equipped with premium apparatus and a strictly monitored separate safety chemical store.</p>
            </div>
          </div>
          <div className="fac-tall-column">
            <img src={bio} alt="Biology Lab" />
            <div className="column-over-gradient"></div>
            <div className="fac-content-block">
              <div className="fac-num">04</div>
              <h3>Biology Lab</h3>
              <p>Designed with a purpose to provide students an immersive hands-on experience with modern biological equipment.</p>
            </div>
          </div>
          <div className="fac-tall-column">
            <img src={phy} alt="Physics Lab" />
            <div className="column-over-gradient"></div>
            <div className="fac-content-block">
              <div className="fac-num">05</div>
              <h3>Physics Lab</h3>
              <p>Spacious 30x20 sq. feet laboratory featuring top-tier apparatus to observe and demonstrate advanced physical principles.</p>
            </div>
          </div>
          <div className="fac-tall-column">
            <img src={libraryImg} alt="Library" />
            <div className="column-over-gradient"></div>
            <div className="fac-content-block">
              <div className="fac-num">06</div>
              <h3>Library</h3>
              <p>Spread across 30x20 sq. feet, functioning as a storehouse of knowledge with more than 5,000 reference volumes and journals.</p>
            </div>
          </div>
        </div>

        {/* ROW 3: INFRASTRUCTURE & BOUNDARIES */}
        <div className="editorial-row row-infra-boundaries">
          
          {/* Campus Infrastructure Panel */}
          <div className="edi-panel-block infra-panel">
            <div className="panel-header-minimal">
              <Layers size={16} className="panel-icon-svg" />
              <h3>Campus Infrastructure</h3>
            </div>
            <p className="panel-intro-desc">
              The total area of the land that school and its premises spans is <strong>2.38 Acre (9631.51829 Sq. mtrs.)</strong>.
            </p>
            <ul className="panel-list-items">
              <li>Three storied RC building with 61 rooms for academic and administrative purposes as per the CBSE prescribed norms ensure safety and comfort of our pupils.</li>
              <li>This School has a well-equipped playground (The total area of the playground is 750 Sq. mtr.). This space provides ample facilities for physical education & Games Training.</li>
              <li>An Open air Auditorium that can accommodate our students without space constrictions is truly unique.</li>
              <li>We also have a special hall for organizing the various academic and CCA activities.</li>
            </ul>
          </div>

          {/* School Boundaries Panel */}
          <div className="edi-panel-block boundary-panel">
            <div className="panel-header-minimal">
              <h3>School Boundaries</h3>
            </div>
            <div className="boundary-editorial-grid">
              <div className="bg-cell"><span>NORTH</span><strong>Puthiyangadi - Thanneerpanthal Road</strong></div>
              <div className="bg-cell"><span>SOUTH</span><strong>Canal</strong></div>
              <div className="bg-cell"><span>EAST</span><strong>Canal</strong></div>
              <div className="bg-cell"><span>WEST</span><strong>Govt. ITI</strong></div>
            </div>
            <div className="panel-footer-noc">
              <p><strong>NOC & Affiliation:</strong> School has received the Non Objection Certificate from Kerala State vide No. 13075/N3/2003/G.Edn. Dated 23/04/2003.</p>
              <p>The school is run by Muslim Service Society - Registered under the charitable societies vide registration No. 139/80 dated May, 1980.</p>
            </div>
          </div>

        </div>

        {/* ROW 4: ADMISSION GUIDELINES & FEES (1 Row, 2 Columns Split Layout) */}
        <div className="editorial-section-header">
          <span className="section-vertical-tag">ADMISSIONS</span>
          <div className="section-title-block">
            <h2>Admission Guidelines & Fees</h2>
            <p>Important timelines, eligibility norms, and payment regulations for parents.</p>
          </div>
        </div>

        <div className="editorial-admission-split-grid">
          
          {/* COLUMN 1: ADMISSION RULES & ELIGIBILITY */}
          <div className="adm-split-left-content">
            
            <div className="adm-text-block">
              <h4>Admission Protocols & Timeline</h4>
              <p>
                Admissions to all classes except K.G are done during the month of April. K.G admissions will be done in the month of November. Classes begin on the first working day of June. Those who seek admission to LKG should apply for registration before 31st December.
              </p>
              <p>
                A application forms & prospectus are issued only after the interview/qualifying test. Incomplete application and application without requisite documents are liable to be rejected. Admissions are deemed to be completed only on payment of stipulated fees.
              </p>
              <p>
                All admissions are subjected to terms and conditions stipulated by the management. The Management reserves all rights to change the aim and objectives of the school from time to time as per the need present the structure and demands of the time. Admission to XI std will be based on the performance of the students in classes.
              </p>
            </div>

            <div className="adm-text-block-row">
              <div className="adm-sub-info-card">
                <h5>Age Limit for Admission</h5>
                <p>
                  Children between the age group of 3 and 4 will be admitted to LKG. Those who have completed 5 years as on first June will only be admitted to Class I. Students shall satisfy the age requirement as laid down by K.E.R.
                </p>
              </div>

              <div className="adm-sub-info-card">
                <h5>Certificates to be Produced</h5>
                <p>
                  At the time of admission transfer certificate and conduct certificate from the school last attended should be produced. Birth certificate issued by competent authorities is to be attached along with the application form. Original birth certificate should be produced at the time of interview.
                </p>
              </div>
            </div>

          </div>

          {/* COLUMN 2: PREMIUM MAROON PAYMENT BOX */}
          <div className="adm-split-right-card colored-dark-accent colored-matrix-container">
            <div className="matrix-card-content">
              <h4>Payment of Fees</h4>
              <p>
                Tuition fee shall be paid in two installments, one at the time of admission or on before 10th May and the second installment on or before 10th September.
              </p>
              
              <div className="warning-note">
                <strong>Important Notice:</strong><br />
                For belated payment up to one month a fine will be levied. Defaulters will not be allowed to attend the class after these dates.
              </div>

              <div className="deposit-note-box">
                <h5>Caution Deposit</h5>
                <p>
                  The caution deposit will be refunded to the student only after the deduction of dues, if any.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutUs;