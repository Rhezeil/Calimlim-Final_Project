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

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-pink-100 text-gray-900'}`}>
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 bg-white text-black dark:bg-black dark:text-white px-4 py-2 rounded-full shadow transition duration-300"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>

      {/* Header Section */}
      <header className="flex flex-col items-center justify-center py-8 bg-pink-300 text-white dark:bg-gray-800 w-full text-center shadow-lg">
        <h1 className="text-5xl font-bold tracking-wide">Rhezeil Calimlim</h1>
        <p className="text-lg mt-2">Network & Security • Web Developer</p>
      </header>

      

      {/* Main Content Sections */}
      <main className="w-full max-w-4xl px-6 mx-auto space-y-12">
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
