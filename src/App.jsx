// src/App.jsx
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
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center transition duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-pink-100 text-gray-900'}`}>
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-full shadow"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>

      <header className="flex flex-col items-center py-10 bg-pink-300 text-white shadow-md w-full">
        <h1 className="text-5xl font-bold tracking-wide">Rhezeil Calimlim</h1>
        <p className="text-lg mt-2">Network & Security • Web Developer</p>
      </header>

      <div className="flex justify-center items-center mt-8">
       
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12 w-full">
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
