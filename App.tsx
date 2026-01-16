import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Departments } from './components/Departments';
import { Services } from './components/Services';
import { Documents } from './components/Documents';
import { Gallery } from './components/Gallery';
import { CovidGuidelines } from './components/CovidGuidelines';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <Departments />
        <Documents />
        <Gallery />
        <CovidGuidelines />
      </main>
      <Footer />
    </div>
  );
};

export default App;