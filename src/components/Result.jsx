import React from 'react';
import './Result.css';

const Result = () => {
  // Academic PDF records list tracking the layout shown in the reference image
  const resultRecords = [
    { id: 1, label: "2025 - 2026", fileName: "results.pdf" },
    { id: 2, label: "2024 - 2025 ( 12th Std )", fileName: "XIITH_RESULT_2024-25_20250612_0001.pdf" },
    { id: 3, label: "2024 - 2025 ( 10th Std )", fileName: "XTH_RESULT_2024-25_20250612_0001.pdf" },
    { id: 4, label: "2023 - 2024 ( 12th Std )", fileName: "XII_RESULT_2023-24_20250612_0001.pdf" },
    { id: 5, label: "2023 - 2024 ( 10th Std )", fileName: "XTH_2023-24_RESULT_20250612_0001.pdf" },
    { id: 6, label: "2022 - 2023 ( 12th Std )", fileName: "2022-2023(12thstd).pdf" },
    { id: 7, label: "2022 - 2023 ( 10th Std )", fileName: "2022-2023(10thstd).pdf" },
    { id: 8, label: "2021 - 2022 ( 12th Std )", fileName: "2021-22(12thStd).pdf" },
    { id: 9, label: "2021 - 2022 ( 10th Std )", fileName: "2021-2022(10thstd).pdf" },
    { id: 10, label: "2021", fileName: "2021 -.pdf" },
    {id: 11, label: "2021", fileName:"2021.pdf"},
    { id: 12, label: "2020", fileName: "2020 1.pdf" },
    { id: 13, label: "2020", fileName: "2020 1.pdf" },
    { id: 14, label: "2019", fileName: "2019.pdf" },
  ];

  return (
    <div className="result-page">
      {/* Top Banner section matching site template headers */}
      <div className="result-hero">
        <div className="result-hero-content">
          <h1>Examination Results</h1>
          <div className="result-divider"></div>
          <p>View and download public board examination results and academic reports for M.S.S. Public School.</p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="result-container">
        <div className="result-card-header">
          <h3>Academic Board Results</h3>
          <p>Select the corresponding academic year batch below to download the official compiled result sheet.</p>
        </div>

        {/* 1 Row 2 Columns Grid Container */}
        <div className="result-two-column-grid">
          {resultRecords.map((record) => (
            <div key={record.id} className="result-download-card">
              <span className="batch-label-text">{record.label}</span>
              
             
<a
  href={`/document/Result/${record.fileName}`}
  download={record.fileName}
  className="pdf-trigger-btn"
  title={`Download ${record.label} PDF`}
>
                <div className="pdf-icon-wrapper">
                  <svg className="pdf-svg-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 6c0-.55.45-1 1-1s1 .45 1 1v4h2v-3c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9zm-3.5 4h1.5v1.5H6V16h1.5V17H6v1h3v-5H6v1zm11 1.5c0 .83-.67 1.5-1.5 1.5H14v-5h1.5c.83 0 1.5.67 1.5 1.5v2z" />
                  </svg>
                  <span className="pdf-badge-text">PDF</span>
                </div>
                <div className="download-arrow-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V16M12 16L6 10M12 16L18 10M4 20H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;