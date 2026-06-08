import React, { useState } from 'react';
import './Activities.css';
import img1 from '../assets/05.jpg';
import img2 from '../assets/44001.jpg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpg';

// Replace these placeholder strings with your actual image file paths or imports
const images = {
  landingBg: img2, 
  curriculum: img4,
  training: img3,
  pta:  img1
};

const Activities = () => {
  const [activeTab, setActiveTab] = useState('curriculum');

  return (
    <div className="page-wrapper">
      
      {/* 1. Landing Hero Banner Section */}
      <header 
        className="landing-hero" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images.landingBg})` }}
      >
        <div className="hero-content">
          <span className="hero-badge">Annual Report Update</span>
          <h1>School Academic Profile & Co-Curricular Activities</h1>
          <p>Explore our curriculum framework, continuous professional learning, and vibrant community milestones.</p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="activity-container">
        
        {/* 2. Pill Navigation Bar (Matches layout from Screenshot 2026-06-06 143048.png) */}
        <nav className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'curriculum' ? 'active' : ''}`}
            onClick={() => setActiveTab('curriculum')}
          >
            Curriculum & Assessment
          </button>
          <button 
            className={`tab-btn ${activeTab === 'training' ? 'active' : ''}`}
            onClick={() => setActiveTab('training')}
          >
            Teacher's Training
          </button>
          <button 
            className={`tab-btn ${activeTab === 'pta' ? 'active' : ''}`}
            onClick={() => setActiveTab('pta')}
          >
            Parent Teachers Association
          </button>
        </nav>

        {/* 3. Dynamic Tab View Windows */}
        <div className="tab-panel1">
          
          {/* TAB 1: CURRICULUM AND ASSESSMENT */}
          {activeTab === 'curriculum' && (
            <div className="split-view animate-fade-in">
              <div className="media-column">
                <img src={images.curriculum} alt="Curriculum and Assessment" className="section-img" />
              </div>
              <div className="text-column">
                <h2>Curriculum and Assessment</h2>
                <p>
                  We are Following the NCERT Curriculum and the syllabus follows prescribed by the CBSE, 
                  The Assessment structure and examination for classes I to V comprises to two terms. 
                  The evaluation of first term (June to October) will be completed with the examination to 
                  be held at the end of October and second term (November to March) will be completed by 
                  March with term examination. Examination of IX and X is comprising pre midterm, post mid term and annual exam.
                </p>
                
                <div className="schedule-box">
                  <h3>Examination Schedule</h3>
                  <div className="table-responsive">
                    <table className="custom-table">
                      <thead>
                        <tr>
                          <th>Pre Midterm</th>
                          <th>Midterm</th>
                          <th>Post Midterm</th>
                          <th>Annual</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>August</td>
                          <td>December</td>
                          <td>January</td>
                          <td>March</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="extra-info">
                  Evaluation system in XI and XII will be based on the examination marks. The examinations 
                  comprising of unit tests and term examinations conducted by school and annual examination 
                  held by the Board decides the pupils’ promotion to the next standard. Annual examination 
                  in XI will be conducted by school and in Class XII, the tests are conducted by CBSE.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: TEACHER'S TRAINING */}
          {activeTab === 'training' && (
            <div className="split-view animate-fade-in">
              <div className="media-column">
                <img src={images.training} alt="Teacher Training" className="section-img" />
              </div>
              <div className="text-column">
                <h2>Teacher's Training</h2>
                <p>
                  A true teacher should be a lifelong learner too. By keeping this in mind many training 
                  programmes were arranged during this year. Our teachers attended various orientation 
                  programmes organized by many book pulishers, sahodaya and CBSE.
                </p>
                <div className="highlight-callout">
                  A three days work shop was organized in the school in December. There is plan for 
                  introducing more regular training programmes to improve teaching skills, in future.
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PTA */}
          {activeTab === 'pta' && (
            <div className="split-view animate-fade-in">
              <div className="media-column">
                <img src={images.pta} alt="Parent Teachers Association" className="section-img" />
              </div>
              <div className="text-column">
                <h2>Parent Teachers Association</h2>
                <p>
                  Parents, Teachers, Students and Management are the four pillars of school system. 
                  We are encouraging active parents participation in all the school programmes. PTA executive 
                  committee meetings are convened monthly and on special occasions. A section wise parent 
                  meeting was convened after first semester examination.
                </p>
                <p>
                  Regular Parent-Teacher Interaction is inevitable to bring the desired development in students. 
                  Most of the parents are regularly attending the open houses conducted after each assessments.
                </p>
                
                <div className="activities-box">
                  <h4>PTA Arranged Activities & Programmes:</h4>
                  <p className="activities-list">
                    Construction of pathway, counseling classes for students and parents of KG, Swimming, 
                    Guitar, Chess, Karate, Yoga, Table tennis, Volleyball, Football, Violin, Badminton, 
                    Band, Drawing, Music, Dance and keyboard classes.
                  </p>
                </div>

                <div className="signature-footer">
                  <strong>Mr. Shajil K K</strong>, President of PTA, and all executive committee members 
                  of PTA always extend their whole hearted support and cooperation.
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default Activities;