// src/components/AboutMe.jsx
import React from "react";

const AboutMe = () => {
  return (
    <section className="py-12 mb-16" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400 pb-2 mb-6 text-center">
        About Me
      </h2>
      <div className="text-lg mt-4 leading-relaxed space-y-4 text-center">
        <p>
          I'm Rhezeil "Glei" Calimlim, an IT student at the University of the
          Cordilleras.
        </p>
        <div className="flex justify-center">
          <img
            src="/images/IMG_6727.jpg"
            alt="Rhezeil Calimlim"
            className="w-40 h-40 rounded-full object-cover border-2 border-gray-300 dark:border-white shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
