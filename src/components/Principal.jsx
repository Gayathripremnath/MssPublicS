import React from 'react';
import './Principal.css';
import sindhu from '../assets/sindhu_incharge.jpg';
import img1 from '../assets/04.jpg';

const PrincipalMessage = () => {
  return (
    <div className="principal-container">
      {/* Hero / Landing Background Section */}
      <div className="principal-hero">
        <div className="hero-overlay">
          <h1>Principal's Message</h1>
          <p className="hero-subtitle">Nurturing Minds, Inspiring Futures</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="principal-content-wrapper">
        <div className="principal-grid">
          
          {/* Left Column: Image & Bio */}
          <div className="principal-sidebar">
            <div className="image-card">
              {/* Replace URL below with your actual teacher/principal image path */}
              <img 
                src={sindhu} 
                alt="Principal Sindhu.B.P" 
                className="principal-image"
              />
              <div className="principal-meta">
                <h3>Sindhu.B.P</h3>
                <p className="credentials">M.A. , B.Ed.</p>
                <p className="designation">Principal, M.S.S Public School</p>
              </div>
            </div>
          </div>

          {/* Right Column: Message Text */}
          <div className="principal-text-section">
            <p className="intro-text">
              <strong>M.S.S Public School (Senior Secondary)</strong>, run by Muslim Service Society, 
              offers universally accepted education through the CBSE stream. M.S.S Public School therefore 
              meets the long-felt need of the students and parents for a standard school offering effective 
              child-centric education that concentrates on all-round development of body, mind, and spirit.
            </p>

            <p>
              The biggest challenge faced by the educators of today is to prepare students for the challenges 
              of a globalised world. Students of today face a world that continually demands new knowledge and 
              abilities, a world that requires the students to become adaptable, life-long learners, in an ever 
              changing scenario of new skills and competencies. They also need to be good communicators and 
              should be able to relate themselves with other people, think critically and creatively. M.S.S School 
              is committed towards imparting these skills and also provides students an opportunity not only to learn, 
              but also how to assimilate syllabi taught in the school and beyond as well.
            </p>

            <blockquote>
              "The crux of education is after all, the education of the heart. We want our pupils to develop 
              valuable life skills and become more independent and confident individuals."
            </blockquote>

            <p>
              Education at M.S.S Public School develops among the students a global outlook and perspective while 
              maintaining respect for their homeland. The curriculum is designed to sensitize them with current 
              developments taking place worldwide. This institution helps them to equip themselves for the future 
              so that, they can be culturally versatile and be comfortable while working by communicating and 
              collaborating with people all over the world. However, what students learn at M.S.S. Public School is 
              not just based on curriculum but the whole host of co-curricular activities which they are exposed 
              and can effectively contribute to the holistic development of their personality.
            </p>

            <p>
              Our education system helps them to come out of their comfort zones and deal confidently with the 
              uncertainties or challenges that may test them in future. Our team of qualified and experienced 
              teachers have been specially trained to provide individual attention to students.
            </p>

            <p>
              It will be a constant endeavour of M.S.S Public School to move forward in the true spirit of 
              ability-driven education. The School will continue its endeavour towards providing quality education. 
              The teachers are adept in infusing each and every student with the zeal to be passionate about 
              learning as well as to be engaged and inspired. We want every student to be nurtured into strong 
              reflective and responsive individuals who are confident and adaptable in meeting the challenges 
              and opportunities of this rapidly changing world.
            </p>
            
            <div className="sign-off">
              <p>Warm Regards,</p>
              <h4>Sindhu.B.P</h4>
              <span>Principal</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;