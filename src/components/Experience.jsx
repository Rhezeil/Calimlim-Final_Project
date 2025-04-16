import React from "react";

const Experience = () => {
  return (
    <section className="card-section" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2 mb-6 transition duration-300 hover:text-pink-500 hover:scale-105 hover:cursor-pointer">
  Experience
</h2>

      <ul className="mt-4 text-lg list-disc ml-5 space-y-3">
        <li>
          <strong>Personal Assistant – Baguio-Benguet Credit Collector Inc.</strong> (2018–2019)
          <br />
          Managed schedules, calls, paperwork, and events.
        </li>
        <p></p>
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
