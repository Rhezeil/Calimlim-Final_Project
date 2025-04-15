import React from 'react';

const Skills = () => {
  return (
    <section className="w-full max-w-3xl p-6 bg-white dark:bg-gray-800 backdrop-blur-md rounded-xl shadow-lg" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">Skills</h2>
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
