import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-primary-light dark:bg-primary-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2 mb-6" data-aos="fade-up">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-lg">
          <div className="bg-white dark:bg-secondary-dark p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Tech-savvy</h3>
          </div>
          <div className="bg-white dark:bg-secondary-dark p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Project Management</h3>
          </div>
          <div className="bg-white dark:bg-secondary-dark p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Confidentiality</h3>
          </div>
          <div className="bg-white dark:bg-secondary-dark p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Google & MS Office</h3>
          </div>
          <div className="bg-white dark:bg-secondary-dark p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Photoshop (Basic)</h3>
          </div>
          <div className="bg-white dark:bg-secondary-dark p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Video Editing</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
