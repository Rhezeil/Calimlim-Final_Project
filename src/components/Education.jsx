// src/components/Education.jsx
import React from "react";

const Education = () => {
  return (
    <section className="card-section border-l-[1px] border-blue-600 p-4 mb-6" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 transition duration-300">
        Education
      </h2>
      <div className="mt-4 text-lg text-center">
        <strong>BS in Information Technology – Network and Security</strong>
        <br />
        University of the Cordilleras
        <br />
        2023 to present
      </div>
    </section>
  );
};

export default Education;
