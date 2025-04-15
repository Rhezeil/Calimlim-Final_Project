import React from 'react';

const Experience = () => {
  return (
    <section className="my-12 p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-lg" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-600 hover:text-blue-800 transition duration-300">Experience</h2>
      <ul className="mt-4 text-lg list-disc ml-5 space-y-3">
        <li>
          <strong>Personal Assistant – Baguio-Benguet Credit Collector Inc.</strong> (2018–2019)<br />
          Managed schedules, calls, paperwork, and events.
        </li>
        <li>
          <strong>Part-time PA – Travel and Tours 88</strong> (2016–2017)<br />
          Provided admin support, scheduled meetings, and handled travel coordination.
        </li>
      </ul>
    </section>
  );
};

export default Experience;

