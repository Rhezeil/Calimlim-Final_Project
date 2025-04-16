// src/components/Skills.jsx
import React from "react";

const Skills = () => {
  return (
    <section className="card-section border-l-[1px] border-blue-600 p-4 mb-6" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 transition duration-300">
        Skills
      </h2>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg">
        <div>Tech-savvy</div>
        <div>Calendar Management</div>
        <div>Administrative Support</div>
        <div>Google & MS Office</div>
        <div>Confidentiality</div>
        <div>Project Management</div>
        <div>Photoshop (Basic)</div>
        <div>Video Editing</div>
      </div>
    </section>
  );
};

export default Skills;

