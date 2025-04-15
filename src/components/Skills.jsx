import React from 'react';

const Skills = () => {
  return (
    <section
      className="my-12 p-6 bg-white/70 dark:bg-gray-800 backdrop-blur-md rounded-xl shadow-lg"
      data-aos="fade-up"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 transition duration-300">
          Skills
        </h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 text-lg text-center text-gray-800 dark:text-gray-200">
          <div className="hover:scale-105 transition-transform duration-300">Tech-savvy</div>
          <div className="hover:scale-105 transition-transform duration-300">Calendar Management</div>
          <div className="hover:scale-105 transition-transform duration-300">Administrative Support</div>
          <div className="hover:scale-105 transition-transform duration-300">Google & MS Office</div>
          <div className="hover:scale-105 transition-transform duration-300">Confidentiality</div>
          <div className="hover:scale-105 transition-transform duration-300">Project Management</div>
          <div className="hover:scale-105 transition-transform duration-300">Photoshop (Basic)</div>
          <div className="hover:scale-105 transition-transform duration-300">Video Editing</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
