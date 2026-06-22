import React, { useState } from 'react';
import './Admission.css';

const Admission = () => {
  const [formData, setFormData] = useState({
    nameOfPupil: '',
    sex: '',
    aadharNumber: '',
    age: '',
    dob: '',
    placeOfBirth: '',
    state: '',
    nationality: '',
    standardSought: '',
    livingWith: '',
    religion: '',
    community: '',
    tcDetails: '',
    schoolType: '',
    mediumOfInstruction: '',
    motherTongue: '',
    // Father's Details
    fatherName: '',
    fatherOccupation: '',
    fatherQualification: '',
    fatherDesignation: '',
    fatherIncome: '',
    // Mother's Details
    motherName: '',
    motherOccupation: '',
    motherQualification: '',
    motherDesignation: '',
    motherIncome: '',
    // Addresses & Contact
    permanentAddress: '',
    permanentContact: '',
    localAddress: '',
    localContact: '',
    localGuardianName: '',
    localGuardianAddress: '',
    siblingsInInstitution: '',
    whetherInoculated: '',
  });

  const [files, setFiles] = useState({
    birthCertificate: null,
    passportPhoto: null,
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
      alert('Please check the reCAPTCHA box to verify you are not a robot.');
      return;
    }
    
    // Process form data & files here
    console.log('Form Submitted Data:', formData);
    console.log('Uploaded Files:', files);
    alert('Admission Form Submitted Successfully!');
  };

  return (
    <div className="admission-container">
      <div className="form-header">
        <div className="header-icon">
          {/* Document Layout SVG Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <h1 className="form-title">Application Form for Admission</h1>
      </div>

      <form onSubmit={handleSubmit} className="admission-form">
        
        {/* SECTION 1: Personal Details */}
        <div className="form-grid">
          <div className="form-group">
            <label>Name of Pupil* <span className="sub-label">( In Block Letters )</span></label>
            <input type="text" name="nameOfPupil" placeholder="Name of Pupil" required onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Sex *</label>
            <select name="sex" required value={formData.sex} onChange={handleInputChange}>
              <option value="">-- Select --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Aadhar Number *</label>
            <input type="text" name="aadharNumber" placeholder="Enter Aadhar Number" required onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Age *</label>
            <input type="number" name="age" placeholder="Enter Age" required onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Date of Birth *</label>
            <input type="date" name="dob" required onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Place of Birth *</label>
            <input type="text" name="placeOfBirth" placeholder="Place of Birth" required onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>State *</label>
            <input type="text" name="state" placeholder="Enter State" required onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Nationality *</label>
            <input type="text" name="nationality" placeholder="Enter Nationality" required onChange={handleInputChange} />
          </div>
        </div>

        <div className="section-divider"></div>

        {/* SECTION 2: Academic Background */}
        <div className="form-grid">
          <div className="form-group">
            <label>Standard to which admission is sought *</label>
            <input type="text" name="standardSought" placeholder="Standard to which admission to sought" required onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Whether living with Parent / Guardian *</label>
            <input type="text" name="livingWith" placeholder="Whether living with Parent / Guardian" required onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Religion *</label>
            <input type="text" name="religion" placeholder="Enter Religion" required onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Community*</label>
            <input type="text" name="community" placeholder="Enter Community" required onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Number & Date of T.C from the School last attended by pupil *</label>
            <input type="text" name="tcDetails" placeholder="Number & Date of T.C from the School last attended by pupil" required onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Whether Private or Recognized*</label>
            <input type="text" name="schoolType" placeholder="Whether Private or Recognized" required onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Medium of Instruction*</label>
            <input type="text" name="mediumOfInstruction" placeholder="Medium of Instruction" required onChange={handleInputChange} />
          </div>
        </div>

        <div className="section-divider"></div>

        {/* SECTION 3: Mother Tongue & Parent Details */}
        <div className="form-group full-width">
          <label>Mother tongue *</label>
          <input type="text" name="motherTongue" placeholder="Enter Mother tongue" required onChange={handleInputChange} />
        </div>

        <div className="section-divider"></div>

        {/* Father's Info */}
        <div className="form-grid">
          <div className="form-group">
            <label>Name of Father*</label>
            <input type="text" name="fatherName" placeholder="Name of Father" required onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Occupation of Father*</label>
            <input type="text" name="fatherOccupation" placeholder="Occupation of Father" required onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Educational Qualification*</label>
            <input type="text" name="fatherQualification" placeholder="Educational Qualification" required onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Official Designation*</label>
            <input type="text" name="fatherDesignation" placeholder="Official Designation" required onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Annual income*</label>
            <input type="text" name="fatherIncome" placeholder="Annual income" required onChange={handleInputChange} />
          </div>
        </div>

        <div className="section-divider"></div>

        {/* Mother's Info */}
        <div className="form-grid">
          <div className="form-group">
            <label>Name of Mother*</label>
            <input type="text" name="motherName" placeholder="Name of Mother" required onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Occupation of Mother*</label>
            <input type="text" name="motherOccupation" placeholder="Occupation of Mother" required onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Educational Qualification*</label>
            <input type="text" name="motherQualification" placeholder="Educational Qualification" required onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Official Designation*</label>
            <input type="text" name="motherDesignation" placeholder="Official Designation" required onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Annual income*</label>
            <input type="text" name="motherIncome" placeholder="Annual income" required onChange={handleInputChange} />
          </div>
        </div>

        <div className="section-divider"></div>

        {/* Addresses & Logistics */}
        <div className="form-group full-width">
          <label>Permanent Address</label>
          <textarea name="permanentAddress" placeholder="paddress" rows="4" onChange={handleInputChange}></textarea>
        </div>

        <div className="form-group full-width">
          <label>Permanent Contact Number</label>
          <input type="text" name="permanentContact" placeholder="Permanent Contact Number" onChange={handleInputChange} />
        </div>

        <div className="section-divider"></div>

        <div className="form-group full-width">
          <label>Local Address</label>
          <textarea name="localAddress" placeholder="laddress" rows="4" onChange={handleInputChange}></textarea>
        </div>

        <div className="form-group full-width">
          <label>Local Contact Number</label>
          <input type="text" name="localContact" placeholder="Local Contact Number" onChange={handleInputChange} />
        </div>

        <div className="section-divider"></div>

        <div className="form-group full-width">
          <label>Local Guardian Name</label>
          <input type="text" name="localGuardianName" placeholder="Local Guadian Name" onChange={handleInputChange} />
        </div>

        <div className="form-group full-width">
          <label>Local Guardian Address</label>
          <textarea name="localGuardianAddress" placeholder="Local Guadian Address" rows="4" onChange={handleInputChange}></textarea>
        </div>

        <div className="section-divider"></div>

        <div className="form-group full-width">
          <label>List of Name of own brothers & sisters studying in this Institution and class</label>
          <input type="text" name="siblingsInInstitution" placeholder="List of Name of Own brothers & Sisiers studying in this Institution and class" onChange={handleInputChange} />
        </div>

        <div className="form-group full-width">
          <label>Whether Inoculated *</label>
          <input type="text" name="whetherInoculated" placeholder="Whether Inoculated" required onChange={handleInputChange} />
        </div>

        <div className="section-divider"></div>

        {/* SECTION 4: File Uploads */}
        <div className="file-upload-section">
          <div className="file-group">
            <label>Photo copy of Birth Certificate *</label>
            <input type="file" name="birthCertificate" required onChange={handleFileChange} />
          </div>

          <div className="file-group">
            <label>Passport Size Photo of Pupil *</label>
            <input type="file" name="passportPhoto" required onChange={handleFileChange} />
          </div>
        </div>

        {/* SECTION 5: CAPTCHA & Submission */}
        <div className="captcha-container">
          <div className="captcha-box">
            <div className="captcha-left">
              <input 
                type="checkbox" 
                id="recaptcha" 
                checked={isCaptchaChecked} 
                onChange={(e) => setIsCaptchaChecked(e.target.checked)} 
              />
              <label htmlFor="recaptcha">I'm not a robot</label>
            </div>
            <div className="captcha-right">
              <div className="recaptcha-logo"></div>
              <span className="captcha-text">reCAPTCHA</span>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">submit</button>

      </form>
    </div>
  );
};

export default Admission;