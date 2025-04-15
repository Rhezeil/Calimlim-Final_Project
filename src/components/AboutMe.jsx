import React from 'react';

const AboutMe = () => {
  return (
    <section className="my-12 p-6 bg-white/60 dark:bg-gray-800 backdrop-blur-md rounded-xl shadow-lg" data-aos="fade-up">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 transition duration-300">
          About Me
        </h2>
        <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
          <img
            src="/images/IMG_6727.jpg"
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover shadow-md border-4 border-blue-400 dark:border-blue-600"
          />
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            I'm Rhezeil "Glei" Calimlim, an IT student at the University of the Cordilleras, majoring in Network and Security. I'm passionate about tech, a fast learner, and I love solving real-world problems through digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
