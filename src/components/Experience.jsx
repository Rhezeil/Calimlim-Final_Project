// src/components/Experience.jsx
import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-secondary-light dark:bg-secondary-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2 mb-6">
          Experience
        </h2>
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <li>
            <strong>Personal Assistant – Baguio-Benguet Credit Collector Inc.</strong> (2018–2019)
            <br />
            Managed schedules, calls, paperwork, and events.
          </li>
          <li>
            <strong>Part-time PA – Travel and Tours 88</strong> (2016–2017)
            <br />
            Provided admin support, scheduled meetings, and handled travel coordination.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
