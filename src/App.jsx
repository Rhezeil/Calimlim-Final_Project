import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css'; // Ensure this is present
import Header from './components/Header';


import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className={`min-h-screen w-full transition duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-pink-100 text-gray-900'}`}>
      
      {/* Dark Mode Toggle (top-left) */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 left-4 z-50 bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-full shadow transition duration-300"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>

      {/* Header */}
      <header className="flex flex-col items-center justify-center py-8 bg-pink-300 dark:bg-gray-800 text-white w-full shadow-md">
        <h1 className="text-4xl font-bold tracking-wide">Rhezeil Calimlim</h1>
        <p className="text-lg mt-1">Network & Security • Web Developer</p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12 flex flex-col items-center text-center">
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
