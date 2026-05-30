import React, { useState, useEffect } from "react";
import "./Students.css";

const Students = () => {
  const [activeTab, setActiveTab] = useState("incharges");
  const [activeFeeSubTab, setActiveFeeSubTab] = useState("inst1");
  useEffect(() => {
    if (window.location.hash === "#fees") {
      setTimeout(() => {
        setActiveTab("fees");
      }, 0);
    }
  }, []);

  // 1. Class Incharges Data
  const inchargesData = [
    { class: "KG I A", teacher: "ASWATHI K M", strength: 38 },
    { class: "KG I B", teacher: "JESITHA N K", strength: 39 },
    { class: "KG II A", teacher: "KAVYASREE V V", strength: 27 },
    { class: "KG II B", teacher: "SHYMA K", strength: 27 },
    { class: "KG II C", teacher: "SENHA N", strength: 26 },
    { class: "I A", teacher: "RIMNA N K", strength: 37 },
    { class: "I B", teacher: "USHAKUMARI G V", strength: 37 },
    { class: "I C", teacher: "SHAHILA K T", strength: 37 },
    { class: "II A", teacher: "SINI C V", strength: 26 },
    { class: "II B", teacher: "ABHIJA P V", strength: 27 },
    { class: "II C", teacher: "SREEVIDYA K", strength: 28 },
    { class: "III A", teacher: "SNIJA CHANDRAN", strength: 29 },
    { class: "III B", teacher: "AARATHI C M", strength: 27 },
    { class: "III C", teacher: "PRAGITHA P", strength: 26 },
    { class: "IV A", teacher: "JIJI P R", strength: 30 },
    { class: "IV B", teacher: "AMRUTHA N S", strength: 31 },
    { class: "IV C", teacher: "SUHARA P", strength: 31 },
    { class: "V A", teacher: "AGHILA C S", strength: 31 },
    { class: "V B", teacher: "SHIFA V", strength: 32 },
    { class: "V C", teacher: "NAINA JAGADISH", strength: 33 },
    { class: "VI A", teacher: "REMYA E", strength: 26 },
    { class: "VI B", teacher: "SMITHA NAIR", strength: 29 },
    { class: "VI C", teacher: "FEMINA", strength: 28 },
    { class: "VII A", teacher: "DHURGA P", strength: 32 },
    { class: "VII B", teacher: "JISHA P", strength: 32 },
    { class: "VII C", teacher: "DEESHITHA P", strength: 30 },
    { class: "VIII A", teacher: "PADMAJA K", strength: 42 },
    { class: "VIII B", teacher: "RENU N V", strength: 32 },
    { class: "IX A", teacher: "HASEENA P", strength: 23 },
    { class: "IX B", teacher: "PRIYA P", strength: 23 },
    { class: "X A", teacher: "BABITHA K V", strength: 25 },
    { class: "X B", teacher: "SHARMIDA T K", strength: 25 },
    { class: "XI A", teacher: "UNNIMAYA M", strength: 23 },
    { class: "XI B", teacher: "SUBHA K", strength: 7 },
    { class: "XII A", teacher: "LINDA JAMES", strength: 16 },
    { class: "XII B", teacher: "JAYA P", strength: 7 }
  ];

  // Fee Dataset Headers
  const feeHeaders = ["ITEM", "KG - I & II", "I & II", "III - V", "VI -VIII", "IX - X", "SS", "COMM"];

  // 2. Fee Structure - Instalment 1
  const feeInst1 = {
    rows: [
      { item: "Tution Fee", values: [6500, 7000, 7500, 8000, 8500, 9000, 8500] },
      { item: "Medical Fee", values: [300, 400, 400, 500, 700, 700, 700] },
      { item: "Stationary Fee", values: [400, 400, 400, 500, 700, 700, 700] },
      { item: "Examination Fee", values: [400, 500, 500, 700, 800, 800, 800] },
      { item: "Festival Fee", values: [300, 400, 500, 600, 700, 700, 700] },
      { item: "Co-Curricular Fee", values: [500, 600, 700, 800, 900, 900, 900] },
      { item: "Computer Fee", values: ["-", 1000, 1600, 1600, 1800, 1100, 1000] },
      { item: "Laboratory Fee", values: ["-", "-", "-", "-", 600, 2200, 1000] },
      { item: "Magazine Fee", values: [200, 200, 200, 200, 200, 200, 200] }
    ],
    totals: [8600, 10500, 11800, 12900, 14700, 16200, 14400]
  };

  // 3. Fee Structure - Instalment 2
  const feeInst2 = {
    rows: [
      { item: "Tution Fee", values: [6500, 7000, 7500, 8000, 8500, 9000, 8500] },
      { item: "Medical Fee", values: [300, 400, 400, 500, 600, 600, 600] },
      { item: "Stationary Fee", values: [400, 400, 400, 500, 700, 700, 700] },
      { item: "Examination Fee", values: [400, 500, 500, 700, 800, 800, 800] },
      { item: "Festival Fee", values: [300, 400, 500, 600, 700, 700, 700] },
      { item: "Co-Curricular Fee", values: [500, 600, 700, 800, 900, 900, 900] },
      { item: "Computer Fee", values: ["-", 1000, 1600, 1600, 1800, 1100, 1000] },
      { item: "Laboratory Fee", values: ["-", "-", "-", "-", 500, 2200, 1000] }
    ],
    totals: [8400, 10300, 11600, 12700, 14500, 16000, 14200]
  };

  // 4. Total Fee Structural Data
  const feeTotalData = {
    rows: [
      { item: "Tution Fee", values: [13000, 14000, 15000, 16000, 17000, 18000, 17000] },
      { item: "Medical Fee", values: [600, 800, 800, 1000, 1200, 1200, 1200] },
      { item: "Stationary Fee", values: [800, 800, 800, 1000, 1400, 1400, 1400] },
      { item: "Examination Fee", values: [800, 1000, 1000, 1400, 1600, 1600, 1600] },
      { item: "Festival Fee", values: [600, 800, 1000, 1200, 1400, 1400, 1400] },
      { item: "Co-Curricular Fee", values: [1000, 1200, 1400, 1600, 1800, 1800, 1800] },
      { item: "Computer Fee", values: ["-", 2000, 3200, 3200, 3600, 2200, 2000] },
      { item: "Laboratory Fee", values: ["-", "-", "-", "-", 1000, 4400, 2000] },
      { item: "Magazine Fee", values: [200, 200, 200, 200, 200, 200, 200] }
    ],
    totals: [17000, 20800, 23400, 25600, 29200, 32200, 28600]
  };

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
                      <th>Total Strength</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inchargesData.map((row, idx) => (
                      <tr key={idx}>
                        <td className="font-weight-medium">{row.class}</td>
                        <td className="teacher-name">{row.teacher}</td>
                        <td>{row.strength}</td>
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
                {/* Sub Tab Switchers for Instalments */}
                <div className="fee-sub-tabs">
                  <button 
                    className={`sub-tab-btn ${activeFeeSubTab === "inst1" ? "active" : ""}`}
                    onClick={() => setActiveFeeSubTab("inst1")}
                  >
                    Instalment 1
                  </button>
                  <button 
                    className={`sub-tab-btn ${activeFeeSubTab === "inst2" ? "active" : ""}`}
                    onClick={() => setActiveFeeSubTab("inst2")}
                  >
                    Instalment 2
                  </button>
                  <button 
                    className={`sub-tab-btn ${activeFeeSubTab === "total" ? "active" : ""}`}
                    onClick={() => setActiveFeeSubTab("total")}
                  >
                    Total Annual Fee
                  </button>
                </div>
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
                    {/* Dynamic Row Rendering logic depending on subtab */}
                    {(activeFeeSubTab === "inst1" ? feeInst1.rows : activeFeeSubTab === "inst2" ? feeInst2.rows : feeTotalData.rows).map((row, idx) => (
                      <tr key={idx}>
                        <td className="font-weight-medium item-column">{row.item}</td>
                        {row.values.map((val, valIdx) => (
                          <td key={valIdx} className={val === "-" ? "empty-cell" : ""}>
                            {val !== "-" ? `₹${val}` : "-"}
                          </td>
                        ))}
                      </tr>
                    ))}
                    {/* Dynamically Loaded Total Row */}
                    <tr className="total-row">
                      <td className="total-label">TOTAL</td>
                      {(activeFeeSubTab === "inst1" ? feeInst1.totals : activeFeeSubTab === "inst2" ? feeInst2.totals : feeTotalData.totals).map((total, idx) => (
                        <td key={idx} className="total-amount">₹{total}</td>
                      ))}
                    </tr>
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