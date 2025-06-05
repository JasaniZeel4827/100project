import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CommandPaletteProvider } from './context/CommandPaletteContext';
import { CommandPalette } from './components/ui/CommandPalette';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { About } from './components/sections/About';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <CommandPaletteProvider>
        <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-dark-900 text-black dark:text-white">
          <CommandPalette />
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <Projects />
            <About />
            <Blog />
            <Contact />
          </main>
          <Footer />
        </div>
      </CommandPaletteProvider>
    </ThemeProvider>
  );
}

export default App;