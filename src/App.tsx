import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Home from './components/sections/Home';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className='relative z-10'>
          
          <Home />
          <Achievements />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        
      </div>
    </ThemeProvider>
  );
}

export default App;