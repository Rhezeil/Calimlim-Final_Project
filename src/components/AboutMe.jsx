import React from "react";

const AboutMe = () => {
  return (
    <section className="card-section" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2 mb-6 transition duration-300 hover:text-pink-500 hover:scale-105 hover:cursor-pointer">
  About Me
</h2>
      <div className="text-lg mt-4 leading-relaxed space-y-4">
        <p>
          I'm Rhezeil "Glei" Calimlim, an IT student at the University of the
          Cordilleras.
        </p>
        <div className="flex justify-center">
        <img
            src="/images/Glei.jpg"
            alt="Rhezeil Calimlim"
            className="rounded-full object-cover border border-blue-400 dark:border-blue-300 shadow-md mx-auto"
            style={{ width: '300px', height: '450px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
