import React, { useState } from 'react';
import './Senior.css';

const SeniorAdmission = () => {
  const [formData, setFormData] = useState({
    nameInFull: '',
    dob: '',
    sex: '',
    nationalityCommunity: '',
    aadharNumber: '',
    bplApl: '',
    belongsToScSt: '',
    localAddressPhone: '',
    parentNameOccupationAddress: '',
    relationshipWithGuardian: '',
    regNoYearPassing: '',
    schoolPreviouslyAttended: '',
    qualifyingExamName: '',
    aggregateMarksObtained: '',
    // Class X Breakdown Marks
    markEnglish: '',
    markSecondLanguage: '',
    markMathematics: '',
    markSocialStudies: '',
    markScience: '',
    markTotal: '',
    // Stream Group Preferences
    firstPreference: '',
    secondPreference: '',
    thirdPreference: '',
    coCurricularPerformance: '',
  });

  const [files, setFiles] = useState({
    passportPhoto: null,
    uploadAadhar: null,
    uploadBirthCertificate: null,
  });

  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files: uploadedFiles } = e.target;
    setFiles((prev) => ({ ...prev, [name]: uploadedFiles[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isCaptchaChecked) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }
    console.log('Senior Secondary Form Data Submitted:', formData);
    console.log('Uploaded Files:', files);
    alert('Senior Secondary Admission Form Submitted Successfully!');
  };

  return (
    <div className="sr-admission-container">
      {/* Top Main Heading block */}
      <div className="sr-form-header">
        <div className="sr-header-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <h1 className="sr-form-title">Application Form for Admission to Senior Secondary ( Class XI & XII )</h1>
      </div>

      <form onSubmit={handleSubmit} className="sr-admission-form">
        
        {/* SECTION 1: Student Primary Profile Matrix */}
        <div className="sr-form-grid">
          <div className="sr-form-group">
            <label>Name in Full* <span className="sr-sub-label">( In BBlock Letters )</span></label>
            <input type="text" name="nameInFull" placeholder="Name in Full" required onChange={handleInputChange} />
          </div>

          <div className="sr-form-group">
            <label>Date of Birth *</label>
            <input type="date" name="dob" required onChange={handleInputChange} />
          </div>

          <div className="sr-form-group">
            <label>Sex *</label>
            <select name="sex" required value={formData.sex} onChange={handleInputChange}>
              <option value="">-- Select --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="sr-form-group">
            <label>Nationality, Community *</label>
            <input type="text" name="nationalityCommunity" placeholder="Nationality, Religion, Community" required onChange={handleInputChange} />
          </div>

          <div className="sr-form-group">
            <label>Aadhar Number *</label>
            <input type="text" name="aadharNumber" placeholder="Enter Aadhaar Number" required onChange={handleInputChange} />
          </div>

          <div className="sr-form-group">
            <label>BPL/APL *</label>
            <input type="text" name="bplApl" placeholder="BPL/APL" required onChange={handleInputChange} />
          </div>

          <div className="sr-form-group">
            <label>Whether the applicant belongs to SC/ST *</label>
            <input type="text" name="belongsToScSt" placeholder="Whether the applicant belongs to SC/ST" required onChange={handleInputChange} />
          </div>

          <div className="sr-form-group">
            <label>Applicant's Local Address & Telephone No *</label>
            <textarea name="localAddressPhone" placeholder="Applicants Local Address & Telephone No" rows="2" required onChange={handleInputChange}></textarea>
          </div>

          <div className="sr-form-group">
            <label>Name & occupation of Parent / Guardian with permanent address *</label>
            <textarea name="parentNameOccupationAddress" placeholder="Name & occupation of parent" rows="2" required onChange={handleInputChange}></textarea>
          </div>

          <div className="sr-form-group">
            <label>Relationship of Guardian with the applicant *</label>
            <input type="text" name="relationshipWithGuardian" placeholder="Relationship of Guardian with the applicant" required onChange={handleInputChange} />
          </div>

          <div className="sr-form-group">
            <label>Reg No and year of passing std. X *</label>
            <input type="text" name="regNoYearPassing" placeholder="Reg No and year of passing std" required onChange={handleInputChange} />
          </div>

          <div className="sr-form-group">
            <label>Name & address of the school previously attended and medium of instruction*</label>
            <textarea name="schoolPreviouslyAttended" placeholder="Name & address of the school previously attended and medium of instruction" rows="2" required onChange={handleInputChange}></textarea>
          </div>

          <div className="sr-form-group">
            <label>Name of the qualifying examination ( AISSE / ICSE / SSLC )</label>
            <input type="text" name="qualifyingExamName" placeholder="Name of the qualifying examination" onChange={handleInputChange} />
          </div>

          <div className="sr-form-group">
            <label>Aggregate Marks / Grade obtained*</label>
            <input type="text" name="aggregateMarksObtained" placeholder="Aggregate Marks / Grade obtained" required onChange={handleInputChange} />
          </div>
        </div>

        <div className="sr-section-divider"></div>

        {/* SECTION 2: Class X Score Breakdown Grid Sheet */}
        <h2 className="sr-section-subtitle">Marks obtained in the Qualifying examination ( FOR AISSE / ICSE / SSLC )</h2>
        
        <div className="sr-form-grid">
          <div className="sr-form-group">
            <label>English ( <strong>Marks/Grade Obtained</strong> ) *</label>
            <input type="text" name="markEnglish" placeholder="English - Marks/Grade Obtained" required onChange={handleInputChange} />
          </div>

          <div className="sr-form-group">
            <label>Second Language ( <strong>Marks/Grade Obtained</strong> )*</label>
            <input type="text" name="markSecondLanguage" placeholder="Second Language - Marks/Grade Obtained" required onChange={handleInputChange} />
          </div>

          <div className="sr-form-group">
            <label>Mathematics ( <strong>Marks/Grade Obtained</strong> )*</label>
            <input type="text" name="markMathematics" placeholder="Mathematics - Marks/Grade Obtained" required onChange={handleInputChange} />
          </div>

          <div className="sr-form-group">
            <label>Social Studies ( <strong>Marks/Grade Obtained</strong> )*</label>
            <input type="text" name="markSocialStudies" placeholder="Social Studies - Marks/Grade Obtainedd" required onChange={handleInputChange} />
          </div>

          <div className="sr-form-group">
            <label>Science ( <strong>Marks/Grade Obtained</strong> )*</label>
            <input type="text" name="markScience" placeholder="Science - Marks/Grade Obtained" required onChange={handleInputChange} />
          </div>

          <div className="sr-form-group">
            <label>Total ( <strong>Marks/Grade Obtained</strong> )*</label>
            <input type="text" name="markTotal" placeholder="Total - Marks/Grade Obtained" required onChange={handleInputChange} />
          </div>
        </div>

        <div className="sr-section-divider"></div>

        {/* SECTION 3: Stream Combinations Informational Reference Blocks */}
        <div className="sr-stream-showcase-grid">
          <div className="sr-stream-card">
            <h3>Group A</h3>
            <ul>
              <li>English Score</li>
              <li>Mathematics</li>
              <li>Computer Science</li>
              <li>Physics</li>
              <li>Chemistry</li>
            </ul>
          </div>

          <div className="sr-stream-card">
            <h3>Group B</h3>
            <ul>
              <li>English Score</li>
              <li>Mathematics</li>
              <li>Biology</li>
              <li>Physics</li>
              <li>Chemistry</li>
            </ul>
          </div>

          <div className="sr-stream-card">
            <h3>Group C</h3>
            <ul>
              <li>English Score</li>
              <li>Biology</li>
              <li>Computer Science</li>
              <li>Physics</li>
              <li>Chemistry</li>
            </ul>
          </div>

          <div className="sr-stream-card">
            <h3>Group D</h3>
            <ul>
              <li>English Score</li>
              <li>Business Studies</li>
              <li>Economics</li>
              <li>Accountancy</li>
              <li>Mathematics / Informatics</li>
              <li>Skill Subject - Banking</li>
            </ul>
          </div>
        </div>

        {/* SECTION 4: Preference Selection Fields */}
        <div className="sr-preference-section">
          <div className="sr-form-group">
            <label>First Preference</label>
            <select name="firstPreference" value={formData.firstPreference} onChange={handleInputChange}>
              <option value="">First Preference</option>
              <option value="Group A">Group A</option>
              <option value="Group B">Group B</option>
              <option value="Group C">Group C</option>
              <option value="Group D">Group D</option>
            </select>
          </div>

          <div className="sr-form-group">
            <label>Second Preference</label>
            <select name="secondPreference" value={formData.secondPreference} onChange={handleInputChange}>
              <option value="">Second Preference</option>
              <option value="Group A">Group A</option>
              <option value="Group B">Group B</option>
              <option value="Group C">Group C</option>
              <option value="Group D">Group D</option>
            </select>
          </div>

          <div className="sr-form-group">
            <label>Third Preference</label>
            <select name="thirdPreference" value={formData.thirdPreference} onChange={handleInputChange}>
              <option value="">Third Preference</option>
              <option value="Group A">Group A</option>
              <option value="Group B">Group B</option>
              <option value="Group C">Group C</option>
              <option value="Group D">Group D</option>
            </select>
          </div>
        </div>

        <div className="sr-section-divider"></div>

        {/* Miscellaneous Information Row */}
        <div className="sr-form-group sr-full-width">
          <label>Out Standing performance in co-curricular activities / Sports ( State level & National Level )</label>
          <input type="text" name="coCurricularPerformance" placeholder="Out Standing performance" onChange={handleInputChange} />
        </div>

        <div className="sr-section-divider"></div>

        {/* SECTION 5: Mandatory File Upload Rows */}
        <div className="sr-file-upload-block">
          <div className="sr-file-item">
            <label>Passport Size Photo *</label>
            <input type="file" name="passportPhoto" required onChange={handleFileChange} />
          </div>

          <div className="sr-file-item">
            <label>Upload Aadhaar *</label>
            <input type="file" name="uploadAadhar" required onChange={handleFileChange} />
          </div>

          <div className="sr-file-item">
            <label>Upload Birth Certificate *</label>
            <input type="file" name="uploadBirthCertificate" required onChange={handleFileChange} />
          </div>
        </div>

        {/* SECTION 6: Standard Google reCAPTCHA Simulator Layout */}
        <div className="sr-captcha-wrapper">
          <div className="sr-captcha-box">
            <div className="sr-captcha-left">
              <input 
                type="checkbox" 
                id="sr-recaptcha" 
                checked={isCaptchaChecked} 
                onChange={(e) => setIsCaptchaChecked(e.target.checked)} 
              />
              <label htmlFor="sr-recaptcha">I'm not a robot</label>
            </div>
            <div className="sr-captcha-right">
              <div className="sr-recaptcha-logo"></div>
              <span className="sr-captcha-text">reCAPTCHA</span>
            </div>
          </div>
        </div>

        <button type="submit" className="sr-submit-btn">Submit</button>

      </form>
    </div>
  );
};

export default SeniorAdmission;