import React from "react";

const Skills = () => {
  return (
    <section className="card-section" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2 mb-6 transition duration-300 hover:text-pink-500 hover:scale-105 hover:cursor-pointer">
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
