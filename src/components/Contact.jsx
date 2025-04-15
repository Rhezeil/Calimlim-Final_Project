import React from 'react';

const Contact = () => {
  return (
    <section className="my-12 p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-lg" data-aos="fade-up">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 transition duration-300">
          Contact
        </h2>
        <div className="mt-6 text-lg space-y-4 text-center text-gray-800 dark:text-gray-200">
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:rhezeilgeli@gmail.com" className="text-blue-500 underline">
              rhezeilgeli@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +63 966 736 6729
          </p>
          <p>
            <strong>Location:</strong> #7 Regidor Street, Pacdal, Baguio City 2600
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/rhezeil-calimlim-276513292/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 underline"
            >
              linkedin.com/in/rhezeil-calimlim
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

