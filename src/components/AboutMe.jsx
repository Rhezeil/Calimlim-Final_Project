import React from 'react';

const AboutMe = () => {
  return (
    <section className="w-full max-w-3xl p-6 bg-white dark:bg-gray-800 backdrop-blur-md rounded-xl shadow-lg" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">About Me</h2>
      <img src="/IMG_6727.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md" />
      <p className="text-lg leading-relaxed text-center">
        I'm Rhezeil "Glei" Calimlim, an IT student at the University of the Cordilleras, majoring in Network and Security.
        I'm passionate about tech, a fast learner, and I love solving real-world problems through digital solutions.
      </p>
    </section>
  );
};

export default AboutMe;
