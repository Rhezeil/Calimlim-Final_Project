// src/components/AboutMe.jsx
import React from "react";

const AboutMe = () => {
  return (
    <section className="mb-8" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4 dark:text-blue-400">
        About Me
      </h2>
      <div className="text-lg mt-4 leading-relaxed space-y-4">
        <p>
          I'm Rhezeil "Glei" Calimlim, an IT student at the University of the
          Cordilleras.
        </p>
        <div className="flex justify-center">
          <img
            src="/images/IMG_6727.jpg"
            alt="Rhezeil Calimlim"
            className="w-40 h-40 rounded-full object-cover border-4 border-gray-800 dark:border-white shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;