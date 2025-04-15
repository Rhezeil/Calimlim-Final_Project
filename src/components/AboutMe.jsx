import React from "react";

const AboutMe = () => {
  return (
    <section className="my-12 p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-lg" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 transition duration-300">
        About Me
      </h2>
      <div className="mt-4 text-lg">
        <p>
          I'm Rhezeil "Glei" Calimlim, an IT student at the University of the Cordilleras, majoring in Network and Security. I'm passionate about tech, fast learner, and I love solving real-world problems through digital solutions.
        </p>
        <div className="my-4 flex justify-center">
          <img src="/images/IMG_6727.jpg" alt="Rhezeil Calimlim" className="rounded-full w-40 h-40 object-cover" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
