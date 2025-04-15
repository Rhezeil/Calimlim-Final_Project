import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Make animations occur once
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
      <header className="text-center py-8 bg-pink-300 text-white shadow-lg">
        <h1 className="text-5xl font-bold tracking-wide">Rhezeil Calimlim</h1>
        <p className="text-lg mt-2">Network & Security • Web Developer</p>
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 z-50 bg-white text-black dark:bg-black dark:text-white px-4 py-2 rounded shadow"
        >
          Toggle Dark Mode
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-12">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
        
        {/* Dark Mode Test */}
        <div className="bg-pink-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg">
          This div will change its background and text color based on dark mode.
        </div>
      </main>
    </div>
  );
}

export default App;
