import React from "react";

const Skills = () => {
  return (
    <section className="bg-white dark:bg-secondary-dark p-6 rounded-2xl shadow-md mb-[20px]" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400 pb-2 mb-6 text-center">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg text-center space-y-4">
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
