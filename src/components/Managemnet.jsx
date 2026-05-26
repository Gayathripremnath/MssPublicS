import React from 'react';
import { 
  Users, 
  ShieldAlert, 
  HeartPulse, 
  Scale, 
  FileText, 
  Phone, 
  User, 
  Briefcase 
} from 'lucide-react';
import './Management.css';

const Management = () => {
  // Managing Committee Data
  const smcMembers = [
    { sl: "01", name: "P O Hashim", relation: "Ahamed Koya Hajee", role: "Chairman", offPhone: "495 2374584", resPhone: "9846090799" },
    { sl: "02", name: "A P Kunhamu", relation: "Hussain", role: "Secretary", offPhone: "0495 2731948", resPhone: "" },
    { sl: "03", name: "Shahila K. T", relation: "Abdul Najeeb", role: "Member (Teacher Of The School)", offPhone: "", resPhone: "9539038638" },
    { sl: "04", name: "Suja C", relation: "Suresh. S", role: "Member (Teacher Of The School)", offPhone: "", resPhone: "9446432174" },
    { sl: "05", name: "Shabeer", relation: "Shajila", role: "Parent Member", offPhone: "", resPhone: "9387526910" },
    { sl: "06", name: "Muhammed Faizy", relation: "Abdul Majeed. T", role: "Parent Member", offPhone: "", resPhone: "9961441080" },
    { sl: "07", name: "Sheeba Ramdas", relation: "Ramdas", role: "Vedavyasa Vidyalayam", offPhone: "", resPhone: "9344942079" },
    { sl: "08", name: "T.M. Safia", relation: "P. K. Salim", role: "Member (Teacher Of Other School, Nominated)", offPhone: "", resPhone: "9895991253" },
    { sl: "09", name: "T. K Chandran", relation: "—", role: "Principal K.V.No.1 (To Be Nominated By Board)", offPhone: "", resPhone: "" },
    { sl: "10", name: "Sri Mahipal Singh", relation: "—", role: "Principal K.V.No.2 (To Be Nominated By Board)", offPhone: "", resPhone: "" },
    { sl: "11", name: "Kothoor Muhammed", relation: "Alikunhi", role: "Member", offPhone: "", resPhone: "9446344431" },
    { sl: "12", name: "P T Moideen Kutty", relation: "Unnimoyi", role: "Member", offPhone: "", resPhone: "9895762660" },
    { sl: "13", name: "Dr. V M Abdurahiman", relation: "Imbichi Mothi Haji. V", role: "Member", offPhone: "", resPhone: "8547365897" },
    { sl: "14", name: "C P Kunhu Mohammed", relation: "M. K. C. Aboo Hajee", role: "Member", offPhone: "", resPhone: "9895099990" },
    { sl: "15", name: "K Muhammed Haris", relation: "K. P Umer Haji", role: "Member", offPhone: "", resPhone: "9847011299" },
    { sl: "16", name: "R P Ashraf", relation: "Nambyarambathe Ahammed Hajee", role: "Member", offPhone: "", resPhone: "9847000202" },
    { sl: "17", name: "Prof. K. V. Umar Farooq", relation: "Kunhi Koya. M", role: "Member", offPhone: "", resPhone: "9846777041" },
    { sl: "18", name: "M. C. Mamu", relation: "Hussain. M.C", role: "Member", offPhone: "", resPhone: "9446466505" },
    { sl: "19", name: "P P Abdu Raheem", relation: "P. K. Ummer", role: "Member", offPhone: "", resPhone: "9349165092" },
    { sl: "20", name: "C V Musthafa", relation: "Kunhammed Koya", role: "Treasurer", offPhone: "", resPhone: "9847298684" }
  ];

  return (
    <div className="mgmt-page-container">
      {/* Top Banner */}
      <div className="mgmt-hero-banner">
        <div className="mgmt-hero-overlay">
          <h1 className="mgmt-hero-title">Governance & Welfare</h1>
          <div className="mgmt-hero-underline"></div>
          <p className="mgmt-hero-subtitle">
            Ensuring academic excellence, student safety, and holistic well-being through responsible leadership and dedicated support frameworks.
          </p>
        </div>
      </div>

      <div className="mgmt-content-wrapper">
        
        {/* SECTION 1: HEALTH & WELFARE CARDS */}
        <div className="mgmt-grid-twocol">
          <div className="welfare-card-box">
            <div className="welfare-icon-title">
              <HeartPulse className="welfare-icon text-maroon" />
              <h2>Health & Medical Check-up</h2>
            </div>
            <p className="welfare-text">
              We are conducting Medical Check-up to all students in every 3 Months. First aid and pharmacy medical care are provided to students in school time as and when required.
            </p>
          </div>

          <div className="welfare-card-box">
            <div className="welfare-icon-title">
              <Users className="welfare-icon text-maroon" />
              <h2>Counselling Services</h2>
            </div>
            <p className="welfare-text">
              Services of a qualified student's counselor are available in the campus. The counselor visits the campus periodically and gives proper guidance to students in need.
            </p>
          </div>
        </div>


        {/* SECTION 3: SMC MANAGEMENT TABLE */}
        <div className="smc-table-section">
          <div className="section-heading-block">
            <FileText className="heading-icon" />
            <h2>School Managing Committee Member Details</h2>
            <p>The School Managing Committee consists of the following active members.</p>
          </div>

          <div className="smc-table-responsive">
            <table className="smc-custom-table">
              <thead>
                <tr>
                  <th width="8%">Sl.No.</th>
                  <th width="25%">Name</th>
                  <th width="25%">Father/Spouse</th>
                  <th width="24%">Designation in SMC</th>
                  <th width="18%">Phone (Off / Res)</th>
                </tr>
              </thead>
              <tbody>
                {smcMembers.map((member, idx) => (
                  <tr key={idx}>
                    <td className="text-center font-bold text-muted">{member.sl}</td>
                    <td className="font-semibold text-dark">{member.name}</td>
                    <td>{member.relation}</td>
                    <td>
                      <span className={`role-tag ${member.role.toLowerCase().includes('chairman') ? 'tag-gold' : member.role.toLowerCase().includes('secretary') ? 'tag-silver' : ''}`}>
                        {member.role}
                      </span>
                    </td>
                    <td className="phone-cells">
                      {member.offPhone && (
                        <div className="phone-item">
                          <Briefcase size={13} className="inline-icon" /> {member.offPhone}
                        </div>
                      )}
                      {member.resPhone && (
                        <div className="phone-item">
                          <Phone size={13} className="inline-icon" /> {member.resPhone}
                        </div>
                      )}
                      {!member.offPhone && !member.resPhone && <span className="text-muted">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Management;