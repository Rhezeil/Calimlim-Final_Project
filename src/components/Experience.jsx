import React from 'react';

const Experience = () => {
  return (
    <section className="my-12 p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-lg" data-aos="fade-up">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 transition duration-300">
          Experience
        </h2>
        <ul className="mt-6 text-lg text-center text-gray-800 dark:text-gray-200 space-y-4">
          <li>
            <strong>Personal Assistant – Baguio-Benguet Credit Collector Inc.</strong> (2018–2019)
            <p className="mt-2">Managed schedules, calls, paperwork, and events.</p>
          </li>
          <li>
            <strong>Part-time PA – Travel and Tours 88</strong> (2016–2017)
            <p className="mt-2">Provided admin support, scheduled meetings, and handled travel coordination.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;

