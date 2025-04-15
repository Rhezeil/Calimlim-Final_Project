import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-pink-100 text-gray-900'}`}>
      
      {/* Header */}
      <header className="flex flex-col items-center justify-center text-center py-10 bg-pink-300 dark:bg-gray-800 shadow-lg space-y-2">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">Rhezeil Calimlim</h1>
        <p className="text-lg">Network & Security • Web Developer</p>
        <button
          onClick={toggleDarkMode}
          className="mt-4 bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-full shadow hover:scale-105 transition"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 py-12 space-y-12">
        <div className="w-full max-w-4xl space-y-10">
          <AboutMe />
          <Education />
          <Experience />
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
