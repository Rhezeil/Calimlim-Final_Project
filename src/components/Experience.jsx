import React from "react";

const Experience = () => {
  return (
    <section className="bg-white dark:bg-secondary-dark p-6 rounded-2xl shadow-md mb-[20px]" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400 pb-2 mb-6 text-center">
        Experience
      </h2>
      <ul className="text-lg list-disc ml-5 space-y-6">
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
    </section>
  );
};

export default Experience;
