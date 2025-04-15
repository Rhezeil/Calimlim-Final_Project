import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FaMoon, FaSun } from 'react-icons/fa'; // Import Font Awesome icons

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Make animations occur only once
    });
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-pink-100 text-gray-900'}`}>
      <header className="text-center py-8 bg-pink-300 text-white shadow-lg flex justify-center items-center">
        <div>
          <h1 className="text-5xl font-bold tracking-wide">Rhezeil Calimlim</h1>
          <p className="text-lg mt-2">Network & Security • Web Developer</p>
        </div>
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 z-50 bg-white text-black dark:bg-black dark:text-white p-4 rounded-full shadow-lg"
        >
          {darkMode ? (
            <FaSun size={24} /> // Show the sun icon in dark mode
          ) : (
            <FaMoon size={24} /> // Show the moon icon in light mode
          )}
        </button>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen px-6 py-10 space-y-12">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;