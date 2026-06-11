import React from "react";
import "./Curriculum.css";

const Curriculum = () => {
  return (
    <>
      <section className="curriculum-hero">
        <div className="curriculum-overlay">
          <h1>Curriculum</h1>
        </div>
      </section>

      <section className="curriculum">
        <div className="curriculum-container">
          <p className="curriculum-text">
            The school adheres to CBSE syllabus. Text Books published by NCERT
            are taught in classes VI to XII. We follow a curriculum that leads
            to the holistic development of the students through Research
            oriented, Activity oriented and Family oriented learning.
          </p>
        </div>
      </section>
    </>
  );
};

export default Curriculum;