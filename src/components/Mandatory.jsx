import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mandatory.css';

const Mandatory = () => {
  return (
    <div className="disclosure-container">
      <h1 className="disclosure-title">As Per CBSE Direction</h1>
      
      <div className="table-responsive">
        <table className="disclosure-table">
          <tbody>
            {/* General Information */}
            <tr>
              <td className="field-label">Name of the School</td>
              <td className="field-value font-semibold">M.S.S. Public School</td>
            </tr>
            <tr>
              <td className="field-label">Address</td>
              <td className="field-value">
                M.S.S. Public School, ( Senior Secondary ), Mavilikadavu, Kozhikode - 673010
              </td>
            </tr>
            <tr>
              <td className="field-label">Email</td>
              <td className="field-value email-link">msspublicschool@gmail.com</td>
            </tr>
            <tr>
              <td className="field-label">Phone</td>
              <td className="field-value">+91 495 - 2374584, 2374585, 9072993855</td>
            </tr>
            <tr>
              <td className="field-label">Fax</td>
              <td className="field-value">--</td>
            </tr>
            <tr>
              <td className="field-label">Year of establishment of School</td>
              <td className="field-value">2000</td>
            </tr>
            <tr>
              <td className="field-label">Is the School recognised</td>
              <td className="field-value">Yes</td>
            </tr>
            <tr>
              <td className="field-label">If yes by which Authority</td>
              <td className="field-value font-semibold">CBSE</td>
            </tr>
            <tr>
              <td className="field-label">Whether NOC from State/UT or recommendation of Embassy of India obtained</td>
              <td className="field-value">Yes</td>
            </tr>
            <tr>
              <td className="field-label">Name of Trust/Society/Company Registered under Section 25 of the Company Act, 1956.</td>
              <td className="field-value font-semibold">MUSLIM SERVICE SOCIETY (M.S.S.)</td>
            </tr>
            <tr>
              <td className="field-label">Period upto which Registration of Trust/Society is valid</td>
              <td className="field-value">--</td>
            </tr>
            <tr>
              <td className="field-label">Name of Manager/President /Chairman/Correspondent</td>
              <td className="field-value">A P Kunhamu (Secretary SMC)</td>
            </tr>
            <tr>
              <td className="field-label">Email & Phone</td>
              <td className="field-value">+91 9446464948</td>
            </tr>
            <tr>
              <td className="field-label">Name of the Grievance/redressal officials with E-mail and Fax No.</td>
              <td className="field-value">--</td>
            </tr>
            <tr>
              <td className="field-label">Name of Sexual Harassment Member</td>
              <td className="field-value">A P Kunhamu (Secretary SMC)</td>
            </tr>
            <tr>
              <td className="field-label">Academic session period from</td>
              <td className="field-value">June to March</td>
            </tr>
            <tr>
              <td className="field-label">Vaccation period from</td>
              <td className="field-value">April to May</td>
            </tr>
            <tr>
              <td className="field-label">Admission period from</td>
              <td className="field-value">November to March</td>
            </tr>
            <tr>
              <td className="field-label">Status of affiliation</td>
              <td className="field-value">--</td>
            </tr>
            <tr>
              <td className="field-label">Premanent/Regular/Provisional:</td>
              <td className="field-value">Provisional</td>
            </tr>
            <tr>
              <td className="field-label">Affilation No.</td>
              <td className="field-value font-semibold">930511</td>
            </tr>
            <tr>
              <td className="field-label">Affiliation with Board since</td>
              <td className="field-value">2005</td>
            </tr>
            <tr>
              <td className="field-label">Extension of affiliation upto:</td>
              <td className="field-value">2028</td>
            </tr>

            {/* Campus Infrastructure Details */}
            <tr>
              <td className="field-label" rowSpan="9">Area of school campus</td>
              <td className="field-value sub-row"><strong className="sub-label">School</strong> - 2.38 acre (9631.51829 Sq. mtrs.)</td>
            </tr>
            <tr>
              <td className="field-value sub-row"><strong className="sub-label">Playground</strong> - 750 Sq. mtr.</td>
            </tr>
            <tr>
              <td className="field-value sub-row"><strong className="sub-label">Swimming pool</strong> - NO</td>
            </tr>
            <tr>
              <td className="field-value sub-row"><strong className="sub-label">Indoor games</strong> - YES</td>
            </tr>
            <tr>
              <td className="field-value sub-row"><strong className="sub-label">Dance rooms</strong> - YES</td>
            </tr>
            <tr>
              <td className="field-value sub-row"><strong className="sub-label">Gymnasium</strong> - NO</td>
            </tr>
            <tr>
              <td className="field-value sub-row"><strong className="sub-label">Music rooms</strong> - YES</td>
            </tr>
            <tr>
              <td className="field-value sub-row"><strong className="sub-label">Hostels</strong> - NO</td>
            </tr>
            <tr>
              <td className="field-value sub-row"><strong className="sub-label">Health and medical check up Tick</strong> - YES</td>
            </tr>

            {/* Other Facilities Buttons */}
            <tr>
              <td className="field-label">Other facilities</td>
              <td className="field-value">
  <button 
    className="disclosure-btn" 
    onClick={() => window.location.href = '/facilities'}
  >
    View Facilities
  </button>
</td>
            </tr>
<tr>
  <td className="field-label">Details of fee (Yearly total fee)</td>
  <td className="field-value">
    <button 
      className="disclosure-btn" 
      onClick={() => window.location.href = '/students#fees'}
    >
      View Fee details
    </button>
  </td>
</tr>

            {/* Transport Section */}
            <tr>
              <td className="field-label" rowSpan="2">Transport facility</td>
              <td className="field-value sub-row"><strong className="sub-label">Own Bus</strong> - Yes</td>
            </tr>
            <tr>
              <td className="field-value sub-row"><strong className="sub-label">buses hired on contract basis</strong> - 0</td>
            </tr>

            {/* Teaching Staff Button */}
            <tr>
              <td className="field-label">Number of teaching staff (to be updated from time to time)</td>
              <td className="field-value">
                <button className="disclosure-btn" onClick={() => alert('Viewing Staff Details...')}>View details</button>
              </td>
            </tr>

            {/* Library Section */}
            <tr>
              <td className="field-label" rowSpan="2">Library facilities</td>
              <td className="field-value sub-row"><strong className="sub-label">Size of the Library in sq.feet</strong> - 30x20sq feet</td>
            </tr>
            <tr>
              <td className="field-value sub-row"><strong className="sub-label">No.of Reference books class-wise</strong> - 8000</td>
            </tr>

            {/* Enrolment */}
            <tr>
              <td className="field-label">Class wise Enrolment of school for current session</td>
              <td className="field-value">--</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mandatory;