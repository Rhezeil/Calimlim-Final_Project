import React from "react";

const Contact = () => {
  return (
    <section className="card-section" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 transition duration-300">
        Contact
      </h2>
      <div className="mt-4 text-lg space-y-2 text-center">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:rhezeilgeli@gmail.com" className="text-blue-500 underline">
            rhezeilgeli@gmail.com
          </a>
        </p>
        <p><strong>Phone:</strong> +63 966 736 6729</p>
        <p><strong>Location:</strong> #50 Nevada Rd, Sto.Rosario Valley, Baguio City 2600</p>
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
    </section>
  );
};

export default Contact;
