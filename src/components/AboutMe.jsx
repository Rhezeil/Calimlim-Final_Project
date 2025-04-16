import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-white dark:bg-secondary-dark p-6 rounded-2xl shadow-md mb-[20px]" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400 pb-2 mb-6 text-center">
        About Me
      </h2>
      <div className="text-lg leading-relaxed space-y-6 text-center">
        <p>
          I'm Rhezeil "Glei" Calimlim, an IT student at the University of the Cordilleras.
        </p>
        <div className="flex justify-center">
        <img
            src="/images/Glei.jpg"
            alt="Rhezeil Calimlim"
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-400 dark:border-blue-300 shadow-lg transition-all duration-300"
          />


        </div>
      </div>
    </section>
  );
};

export default AboutMe;
