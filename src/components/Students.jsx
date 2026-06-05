import React, { useState, useEffect } from "react";
import "./Students.css";

const Students = () => {
  const [activeTab, setActiveTab] = useState("incharges");
  useEffect(() => {
    if (window.location.hash === "#fees") {
      setTimeout(() => {
        setActiveTab("fees");
      }, 0);
    }
  }, []);

  // 1. Class Incharges Data
 const inchargesData = [
  { slNo: 1, teacher: "LINDA JAMES", classCharge: "XII A" },
  { slNo: 2, teacher: "JAYA P", classCharge: "XII B" },
  { slNo: 3, teacher: "CHITRA P K", classCharge: "XI A" },
  { slNo: 4, teacher: "SUBHA K", classCharge: "XI B" },
  { slNo: 5, teacher: "BABITHA K V", classCharge: "X A" },
  { slNo: 6, teacher: "PRIYA P", classCharge: "X B" },
  { slNo: 7, teacher: "PADMAJA P", classCharge: "IX A" },
  { slNo: 8, teacher: "HASEENA P", classCharge: "IX B" },
  { slNo: 9, teacher: "GAYATHRI B S", classCharge: "VIII A" },
  { slNo: 10, teacher: "DHURGA P", classCharge: "VIII B" },
  { slNo: 11, teacher: "SREETHUMOL V S", classCharge: "VII A" },
  { slNo: 12, teacher: "DEESHITHA G P", classCharge: "VII B" },
  { slNo: 13, teacher: "JISHA P", classCharge: "VII C" },
  { slNo: 14, teacher: "SMITHA NAIR", classCharge: "VI A" },
  { slNo: 15, teacher: "RAMYA E", classCharge: "VI B" },
  { slNo: 16, teacher: "SHIMNA K P", classCharge: "VI C" },
  { slNo: 17, teacher: "NAINA JAGADISH", classCharge: "V A" },
  { slNo: 18, teacher: "SUHARA P", classCharge: "V B" },
  { slNo: 19, teacher: "AGHILA C S", classCharge: "V C" },
  { slNo: 20, teacher: "ARATHI C M", classCharge: "IV A" },
  { slNo: 21, teacher: "AMNA MINNATH M A", classCharge: "IV B" },
  { slNo: 22, teacher: "JIJI P R", classCharge: "IV C" },
  { slNo: 23, teacher: "PRAGITHA P", classCharge: "III A" },
  { slNo: 24, teacher: "SHYNI AUGUSTINE", classCharge: "III B" },
  { slNo: 25, teacher: "SHIFA V", classCharge: "III C" },
  { slNo: 26, teacher: "SUPRABHA M", classCharge: "II A" },
  { slNo: 27, teacher: "SINI C V", classCharge: "II B" },
  { slNo: 28, teacher: "SNIJA CHANDRAN U", classCharge: "II C" },
  { slNo: 29, teacher: "RIMNA N K", classCharge: "I A" },
  { slNo: 30, teacher: "SHYMA K", classCharge: "I B" },
  { slNo: 31, teacher: "SHAHILA K T", classCharge: "I C" },
  { slNo: 32, teacher: "SENHA", classCharge: "KG II A" },
  { slNo: 33, teacher: "KAVYASREE V V", classCharge: "KG II B" },
  { slNo: 34, teacher: "JESITHA N K", classCharge: "KG I A" },
  { slNo: 35, teacher: "ASWATHI K M", classCharge: "KG I B" }
];

  const feeHeaders = ["CLASS", "1ST INSTALLMENT", "2ND INSTALLMENT", "TOTAL"];

  const feeTotalsByClass = [
    { className: "KG - I & II", firstInstallment: 9600, secondInstallment: 9400, total: 19000 },
    { className: "I - II", firstInstallment: 12700, secondInstallment: 11400, total: 24100 },
    { className: "III", firstInstallment: 14100, secondInstallment: 12800, total: 26900 },
    { className: "IV - V", firstInstallment: 14200, secondInstallment: 12800, total: 27000 },
    { className: "VI - VIII", firstInstallment: 15400, secondInstallment: 14000, total: 29400 },
    { className: "IX - X", firstInstallment: 16200, secondInstallment: 16000, total: 32200 },
    { className: "XI & XII SCIENCE", firstInstallment: 17600, secondInstallment: 17400, total: 35000 },
    { className: "XI & XII COMMERCE", firstInstallment: 15200, secondInstallment: 14800, total: 30000 }
  ];

  return (
    <div className="students-page">
      {/* Hero Banner */}
      <div className="students-hero">
        <div className="students-hero-content">
          <h1>Student & Campus Portal</h1>
          <div className="students-divider"></div>
          <p>Academic details, fee structures, student welfare boards, and council committees for 2025 - 2026.</p>
        </div>
      </div>

      <div className="students-container">
        {/* Main Navigation Tabs */}
        <div className="students-tabs-bar">
          <button
            className={`tab-btn ${activeTab === "incharges" ? "active" : ""}`}
            onClick={() => setActiveTab("incharges")}
          >
            Class Incharges & Strength
          </button>
          <button
            className={`tab-btn ${activeTab === "fees" ? "active" : ""}`}
            onClick={() => setActiveTab("fees")}
          >
            Fee Structure Cards
          </button>
          <button
            className={`tab-btn ${activeTab === "welfare" ? "active" : ""}`}
            onClick={() => setActiveTab("welfare")}
          >
            Committees & Welfare
          </button>
        </div>

        {/* Content Render Card Wrapper */}
        <div className="table-card-wrapper">
          
          {/* TAB 1: CLASS INCHARGES */}
          {activeTab === "incharges" && (
            <div className="table-section animate-fade-in">
              <h2>Class Incharges 2025 - 26</h2>
              <div className="table-responsive">
                <table className="custom-table incharges-table">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Name of Teacher</th>
                      <th>Class Charge</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inchargesData.map((row, idx) => (
                      <tr key={idx}>
                        <td className="font-weight-medium">{row.slNo}</td>
                        <td className="teacher-name">{row.teacher}</td>
                        <td>{row.classCharge}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: FEE STRUCTURES */}
         {activeTab === "fees" && (
  <div id="fees" className="table-section animate-fade-in">
              <div className="fee-header-flex">
                <h2>Fee Structure Details</h2>
              </div>

              <p className="fee-notice-text">
                As per the CBSE circular, we have installed online facility for remitting academic fee. 
                Parents can remit the fee by using net banking / Credit or Debit card facility. HDFC Bank, Civilstation calicut is our banker for fee remitt access.
              </p>

              <div className="table-responsive">
                <table className="custom-table fee-table">
                  <thead>
                    <tr>
                      {feeHeaders.map((header, idx) => (
                        <th key={idx}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {feeTotalsByClass.map((row, idx) => (
                      <tr key={idx}>
                        <td className="font-weight-medium item-column">{row.className}</td>
                        <td>₹{row.firstInstallment}</td>
                        <td>₹{row.secondInstallment}</td>
                        <td>₹{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: COMMITTEES, REDRESSAL BOARDS & CLINICAL WELFARE */}
          {activeTab === "welfare" && (
            <div className="welfare-section animate-fade-in">
              
              {/* Health and Medical Section */}
              <div className="welfare-grid-row">
                <div className="info-welfare-card highlight-border">
                  <h3>Health and Medical Check-up</h3>
                  <p> We are conducting Medical Check-up to all students in every 3 Months. First aid and pharmacy medical care are provided to students in school time as and when required.</p>
                </div>
                <div className="info-welfare-card highlight-border">
                  <h3>Academic Counselling</h3>
                  <p> Services of a qualified student’s counselor are available in the campus. The counselor visits the campus periodically and gives proper guidance to students in need.</p>
                </div>
              </div>

              <h2 className="section-subtitle">School Regulatory Committees & Councils</h2>

              <div className="committees-grid">
                {/* Board 1 */}
                <div className="committee-card">
                  <h4>Committee For Protection From Sexual Harassment Of Women At Work Place (Act 2013)</h4>
                  <ul>
                    <li><strong>Sindhu B. P</strong> (Principal)</li>
                    <li><strong>Suja C</strong> (Vice Principal)</li>
                    <li><strong>Mrs. Thara.S</strong> (Academic Coordinator)</li>
                    <li><strong>Bimal Raj</strong> (Member)</li>
                    <li><strong>Sandhya K</strong> (Office Superintendent)</li>
                  </ul>
                </div>

                {/* Board 2 */}
                <div className="committee-card">
                  <h4>School Complaint Redressal Committee</h4>
                  <ul>
                    <li><strong>Sindhu B. P</strong> (Principal) - Convenor</li>
                    <li><strong>Suja C</strong> (Vice Principal) - Member</li>
                    <li><strong>Mrs. Thara.S</strong> (Academic Coordinator)</li>
                    <li><strong>Dhurga . P</strong> - Member</li>
                    <li><strong>Nameer N. K</strong> - Member</li>
                    <li><strong>Babitha K V</strong> - Member</li>
                  </ul>
                </div>

                {/* Board 3 */}
                <div className="committee-card full-width-card">
                  <h4>Committee for Protection of Children from Sexual Offence (Posco Act 2012)</h4>
                  <div className="posco-flex-list">
                    <ul>
                      <li><strong>Sindhu B. P</strong> (Principal)</li>
                      <li><strong>Suja C</strong> (Vice Principal)</li>
                      <li><strong>Bimal Raj</strong> (Member)</li>
                    </ul>
                    <ul>
                      <li><strong>Sharij V Shaji</strong> (School Head Boy)</li>
                      <li><strong>Nazra Nisamudheen</strong> (School Head Girl)</li>
                      <li><strong>Sandhya. K</strong> (Office Superintendent)</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Students;