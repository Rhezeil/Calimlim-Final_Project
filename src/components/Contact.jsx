import React from "react";

const Contact = () => {
  return (
    <section className="bg-white dark:bg-secondary-dark p-6 rounded-2xl shadow-md mb-[20px]" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400 pb-2 mb-6 text-center">
        Contact
      </h2>
      <div className="text-lg space-y-2 text-center">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:rhezeilgeli@gmail.com" className="text-blue-500 underline">
            rhezeilgeli@gmail.com
          </a>
        </p>
        <p><strong>Phone:</strong> +63 966 736 6729</p>
        <p><strong>Location:</strong> #50 Nevada Rd, Sto.Rosario Valley, Baguio City 2600</p>
        <p>
          <strong>LinkedIn:</strong>{" "}
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
