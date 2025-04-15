import React, { useEffect, useState } from 'react';
import AOS from 'aos';
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
    <div className={`min-h-screen flex flex-col items-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-pink-100 text-gray-900'}`}>
      {/* Header */}
      <header className="flex flex-col items-center py-8 bg-pink-300 text-white shadow-lg w-full">
        <h1 className="text-5xl font-bold tracking-wide">Rhezeil Calimlim</h1>
        <p className="text-lg mt-2">Network & Security • Web Developer</p>
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 z-50 bg-white text-black dark:bg-black dark:text-white px-4 py-2 rounded-full shadow"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </header>

      {/* Centered Image */}
      <div className="flex justify-center items-center my-12">
        <img
          src="/images/IMG_6727.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-800 dark:border-white"
        />
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-10 space-y-12 w-full flex flex-col items-center">
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
