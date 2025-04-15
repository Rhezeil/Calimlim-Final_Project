import React from 'react';

const Contact = () => {
  return (
    <section className="w-full max-w-3xl p-6 bg-white dark:bg-gray-800 backdrop-blur-md rounded-xl shadow-lg" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">Contact</h2>
      <div className="mt-4 text-lg space-y-2">
        <p><strong>Email:</strong> <a href="mailto:rhezeilgeli@gmail.com" className="text-blue-500 underline">rhezeilgeli@gmail.com</a></p>
        <p><strong>Phone:</strong> +63 966 736 6729</p>
        <p><strong>Location:</strong> #50 Nevada Rd, Sto.Rosario Valley, Baguio City 2600</p>
        
      </div>
    </section>
  );
};

export default Contact;
