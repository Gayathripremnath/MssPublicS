import React, { useState } from 'react';
import './Faculty.css';
import suja from '../assets/suja.jpg';
import thara from '../assets/thara.jpg';
import shimna from '../assets/shimna.jpg';
import nameer from '../assets/nameer.jpg';
import pragitha from '../assets/pragitha.jpg';
import haseena from '../assets/Haseena.jpg';
import rinsha from '../assets/rinsha.jpg';
import priya from '../assets/priya.jpg';
import shahila from '../assets/Shahila.jpg';
import suhara from '../assets/Suhara.jpg';
import kavyasree from '../assets/kavyasree.jpg';
import sindhu from '../assets/sindhu_incharge.jpg';

const Faculty = () => {
  const [activeTab, setActiveTab] = useState('admin');

  // 1. Administration & In-Charges Data (With placeholder images)
  // 1. Administration & In-Charges Data (FULLY UPDATED)
  const administration = [
    { name: "Mrs. Sindhu B. P", designation: "Principal", img: sindhu },
    { name: "Mrs. Suja. C", designation: "Vice Principal", img:suja },
    { name: "Mrs. Thara. S", designation: "Academic Co-ordinator", img:thara },
    { name: "Mrs. Shimna K P", designation: "Staff Secretary", img: shimna },
    { name: "Mr. Nameer N V", designation: "Event Co-ordinator", img: nameer },
    { name: "Mrs. Pragitha P", designation: "Programme Co-Ordinator", img: pragitha },
    { name: "Mrs. Rinsa C P", designation: "H.S.S Section Incharge", img: rinsha },
    { name: "Mrs. Haseena P", designation: "H.S. Section Incharge", img: haseena },
    { name: "Mrs. Priya P", designation: "U.P. Section Incharge", img: priya },
    { name: "Mrs. Shahila K T", designation: "L.P Junior Section Incharge", img: shahila },
    { name: "Mrs. Suhara K T", designation: "L.P Senior Section Incharge", img: suhara },
    { name: "Mrs. Kavyasree V V", designation: "K.G Section Incharge", img: kavyasree }
  ];

  // 2. Full Teaching Staff List
  const teachingStaff = [
    { id: "01", name: "Mrs. Thara. S", role: "Academic Co-ordinator" },
    { id: "02", name: "Thara. S", role: "P.G.T" },
    { id: "03", name: "Linda James", role: "P.G.T" },
    { id: "04", name: "Jaya. P", role: "P.G.T" },
    { id: "05", name: "Rinsa. C. P", role: "P.G.T" },
    { id: "06", name: "Subha K", role: "P.G.T" },
    { id: "07", name: "Chitra P K", role: "P.G.T" },
    { id: "08", name: "Shahala Jabin P C", role: "P.G.T" },
    { id: "09", name: "Aswathy K", role: "P.G.T" },
    { id: "10", name: "Nameer N. K", role: "P.E.T" },
    { id: "11", name: "Unnimaya M", role: "P.G.T" },
    { id: "12", name: "Babitha. K. V", role: "T.G.T" },
    { id: "13", name: "Deepamani. P", role: "T.G.T" },
    { id: "14", name: "Dhurga. P", role: "T.G.T" },
    { id: "15", name: "Padmaja. K", role: "T.G.T" },
    { id: "16", name: "Priya. P", role: "T.G.T" },
    { id: "17", name: "Smitha Nair", role: "T.G.T" },
    { id: "18", name: "Haseena", role: "T.G.T" },
    { id: "19", name: "Jesina K V", role: "T.G.T" },
    { id: "20", name: "Jisha P", role: "T.G.T" },
    { id: "21", name: "Sreethumol V S", role: "T.G.T" },
    { id: "22", name: "Faseela. M. P", role: "T.G.T" },
    { id: "23", name: "Shimna. K. P", role: "T.G.T" },
    { id: "24", name: "Deeshitha G. P", role: "T.G.T" },
    { id: "25", name: "Ramya E", role: "T.G.T" },
    { id: "26", name: "Fathima Shirin", role: "T.G.T" },
    { id: "27", name: "Gayathri B S", role: "T.G.T" },
    { id: "28", name: "Muhammed T. K", role: "T.G.T" },
    { id: "29", name: "Sabira V K", role: "P.E.T" },
    { id: "30", name: "Ushakumari. G. V", role: "P.R.T" },
    { id: "31", name: "Subaida P", role: "P.R.T" },
    { id: "32", name: "Roshitha K B", role: "P.R.T" },
    { id: "33", name: "Jiji. P. R", role: "P.R.T" },
    { id: "34", name: "Sini C V", role: "P.R.T" },
    { id: "35", name: "Bimal Raj. K", role: "P.R.T" },
    { id: "36", name: "Chithralekha K", role: "P.R.T" },
    { id: "37", name: "Suhara P", role: "P.R.T" },
    { id: "38", name: "Sabish V K", role: "P.R.T" },
    { id: "39", name: "Pragitha P", role: "P.R.T" },
    { id: "40", name: "Arathi C. M", role: "P.R.T" },
    { id: "41", name: "Shiny Augustine", role: "P.R.T" },
    { id: "42", name: "Aghila. C. S", role: "P.R.T" },
    { id: "43", name: "Babu. V", role: "P.R.T" },
    { id: "44", name: "Snija Chandran U", role: "P.R.T" },
    { id: "45", name: "Naina Jagadish", role: "P.R.T" },
    { id: "46", name: "Abhija P. V", role: "P.R.T" },
    { id: "47", name: "Sreevidya", role: "P.R.T" },
    { id: "48", name: "Rimna N. K", role: "P.R.T" },
    { id: "49", name: "Shifa V", role: "P.R.T" },
    { id: "50", name: "Amrutha N. S", role: "P.R.T" },
    { id: "51", name: "Shahila K. T", role: "K.G.T" },
    { id: "52", name: "Shyma K", role: "K.G.T" },
    { id: "53", name: "Aswathi K M", role: "K.G.T" },
    { id: "54", name: "Jesitha. N. K", role: "K.G.T" },
    { id: "55", name: "Senha N", role: "K.G.T" },
    { id: "56", name: "Kavyasree V. V", role: "K.G.T" },
    { id: "57", name: "Bindumol. T", role: "Librarian" }
  ];

  // 3. Non-Teaching & Contract Staff List
  const nonTeachingStaff = [
    { name: "Sandhya K", role: "Office Superintendent" },
    { name: "Vijina A. K", role: "Accountant" },
    { name: "Megha V", role: "Office Assistant" },
    { name: "Sheeba Premjith Lal", role: "Office Assistant" },
    { name: "Ani K Louis", role: "Non - Teaching Staff" },
    { name: "Rajamani. K", role: "Non - Teaching Staff" },
    { name: "Rasiya. T. K", role: "Non - Teaching Staff" },
    { name: "Leela. N", role: "Non - Teaching Staff" },
    { name: "Mallika P K", role: "Non - Teaching Staff" },
    { name: "Leela N", role: "Non - Teaching Staff" },
    { name: "Sheeba. E. M", role: "Non - Teaching Staff" },
    { name: "Raihanath. P. T", role: "Non - Teaching Staff" },
    { name: "Sreeja K V", role: "Non - Teaching Staff" },
    { name: "Subina K", role: "Non - Teaching Staff" },
    { name: "Ummar Koya", role: "Driver" },
    { name: "Sadanandan", role: "Driver (Contract)" },
    { name: "Madhusoodanan", role: "Driver (Contract)" },
    { name: "Jayaprakashan", role: "Helper (Contract)" },
    { name: "Ranjith", role: "Helper (Contract)" },
    { name: "Raveendran. K", role: "Security (Contract)" },
    { name: "Asharaf", role: "Security (Contract)" },
    { name: "Jaya. V. R", role: "Non - Teaching Staff (Contract)" },
    { name: "Vasudevan", role: "Helper (Contract)" }
  ];

  return (
    <div className="faculty-container">
      {/* Edge-to-Edge Premium Institutional Banner */}
      <div className="faculty-hero">
        <div className="hero-overlay">
          <span>Academic Year 2025 - 2026</span>
          <h1>Our Faculty & Staff</h1>
        
        </div>
      </div>

      {/* Main Container Wrapper */}
      <div className="faculty-content-wrapper">
        
        {/* Navigation Tabs */}
        <div className="faculty-tabs">
          <button className={activeTab === 'admin' ? 'tab-btn active' : 'tab-btn'} onClick={() => setActiveTab('admin')}>
            Administration & In-Charges
          </button>
          <button className={activeTab === 'teaching' ? 'tab-btn active' : 'tab-btn'} onClick={() => setActiveTab('teaching')}>
            Teaching Staff ({teachingStaff.length})
          </button>
          <button className={activeTab === 'non-teaching' ? 'tab-btn active' : 'tab-btn'} onClick={() => setActiveTab('non-teaching')}>
            Support & Non-Teaching ({nonTeachingStaff.length})
          </button>
          <button className={activeTab === 'salary' ? 'tab-btn active' : 'tab-btn'} onClick={() => setActiveTab('salary')}>
            Salary & Scale of Pay
          </button>
        </div>

        {/* Tab content area */}
        <div className="tab-content-panel">
          
          {/* TAB 1: ADMINISTRATION GRID */}
          {activeTab === 'admin' && (
            <div className="admin-grid-view">
              {administration.map((staff, idx) => (
                <div className="staff-profile-card" key={idx}>
                  <div className="avatar-wrapper">
                    <img src={staff.img} alt={staff.name} />
                  </div>
                  <div className="card-info">
                    <h3>{staff.name}</h3>
                    <p className="badge-designation">{staff.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: TEACHING STAFF TABLE */}
          {activeTab === 'teaching' && (
            <div className="table-responsive-wrapper">
              <table className="faculty-data-table">
                <thead>
                  <tr>
                    <th>Sl.No</th>
                    <th>Full Name</th>
                    <th>Designation / Cadre</th>
                  </tr>
                </thead>
                <tbody>
                  {teachingStaff.map((teacher) => (
                    <tr key={teacher.id}>
                      <td>{teacher.id}</td>
                      <td className="bold-name">{teacher.name}</td>
                      <td><span className="cadre-pill">{teacher.role}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 3: NON-TEACHING STAFF TABLE */}
          {activeTab === 'non-teaching' && (
            <div className="table-responsive-wrapper">
              <table className="faculty-data-table">
                <thead>
                  <tr>
                    <th>Sl.No</th>
                    <th>Full Name</th>
                    <th>Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {nonTeachingStaff.map((staff, idx) => (
                    <tr key={idx}>
                      <td>{(idx + 1).toString().padStart(2, '0')}</td>
                      <td className="bold-name">{staff.name}</td>
                      <td><span className="cadre-pill support">{staff.role}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 4: SALARY STRUCTURE & MODE OF PAYMENT */}
          {activeTab === 'salary' && (
            <div className="salary-layout-section">
              <div className="salary-grid">
                <div>
                  <h3>Teaching Staff Structure</h3>
                  <table className="salary-table">
                    <thead>
                      <tr>
                        <th>Designation Cadre</th>
                        <th className="align-right">Scale of Pay (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Principal</td><td className="align-right bold-pay">70,000 - 1,000,000</td></tr>
                      <tr><td>Vice Principal</td><td className="align-right bold-pay">50,000 - 70,000</td></tr>
                      <tr><td>P.G.T</td><td className="align-right bold-pay">23,000 - 40,000</td></tr>
                      <tr><td>T.G.T</td><td className="align-right bold-pay">18,000 - 35,000</td></tr>
                      <tr><td>P.R.T</td><td className="align-right bold-pay">13,000 - 25,000</td></tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h3>Non-Teaching Staff Structure</h3>
                  <table className="salary-table">
                    <thead>
                      <tr>
                        <th>Designation Cadre</th>
                        <th className="align-right">Scale of Pay (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Office Superintendent</td><td className="align-right bold-pay">42,000 - 60,000</td></tr>
                      <tr><td>Clerk / Accountant</td><td className="align-right bold-pay">13,000 - 25,000</td></tr>
                      <tr><td>Class IV Staff</td><td className="align-right bold-pay">7,500 - 15,000</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mode of Payment Alert Callout Box */}
              <div className="payment-method-callout">
                <div className="callout-icon">🏦</div>
                <div className="callout-content">
                  <h4>Mode of Salary Disbursement</h4>
                  <p>
                    The school processes monthly salary disbursements completely through direct digital bank transfers 
                    via <strong>Canara Bank, Kunduparamba Branch</strong>.
                  </p>
                  <p className="ifsc-code">IFSC Code: <span>CNRB0014408</span></p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Faculty;