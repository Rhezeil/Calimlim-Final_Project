import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // ← You forgot to uncomment this!

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load theme from localStorage if available
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-pink-100 text-gray-900'}`}>
      {/* Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 bg-white text-black dark:bg-gray-700 dark:text-white px-4 py-2 rounded-full shadow-md transition-colors duration-300"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Header */}
      <header className="text-center py-8 bg-pink-300 dark:bg-gray-800 text-white shadow-lg transition duration-300">
        <h1 className="text-5xl font-bold tracking-wide">Rhezeil Calimlim</h1>
        <p className="text-lg mt-2">Network & Security • Web Developer</p>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-6 py-10 space-y-12">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />

        {/* Optional Dark Mode Demo */}
        <div className="bg-white/70 dark:bg-gray-700 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg">
          This div will change its background and text color based on dark mode.
        </div>
      </main>
    </div>
  );
}

export default App;
