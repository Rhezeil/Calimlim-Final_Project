// In AboutMe.jsx
import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="py-12 bg-secondary-light dark:bg-secondary-dark">
      <div className="container mx-auto px-6 text-center">
        <h2
          className="text-3xl font-bold text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2 mb-6"
          data-aos="fade-up"
        >
          About Me
        </h2>
        <div className="flex justify-center mb-6" data-aos="zoom-in">
          <img
            src="/images/Glei.jpg"
            alt="Rhezeil Calimlim"
            className="rounded-full object-cover border border-blue-400 dark:border-blue-300 shadow-md mx-auto"
            style={{ width: '300px', height: '450px' }}
          />
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300" data-aos="fade-up">
          I'm Rhezeil "Glei" Calimlim, an IT student at the University of the Cordilleras, passionate about technology and digital solutions.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
