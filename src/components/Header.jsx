// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary-light dark:bg-primary-dark py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Glei's Portfolio</h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><a href="#about" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600">About Me</a></li>
            <li><a href="#skills" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600">Skills</a></li>
            <li><a href="#experience" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600">Experience</a></li>
            <li><a href="#education" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600">Education</a></li>
            <li><a href="#contact" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
