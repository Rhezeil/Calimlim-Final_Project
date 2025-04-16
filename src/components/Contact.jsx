// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-secondary-light dark:bg-secondary-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2 mb-6">
          Contact
        </h2>
        <div className="text-lg space-y-2">
          <p>
            <strong>Email:</strong>
            <a href="mailto:rhezeilgeli@gmail.com" className="text-blue-500 underline">rhezeilgeli@gmail.com</a>
          </p>
          <p><strong>Phone:</strong> +63 966 736 6729</p>
          <p><strong>Location:</strong> #50 Nevada Rd, Sto.Rosario Valley, Baguio City 2600</p>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
