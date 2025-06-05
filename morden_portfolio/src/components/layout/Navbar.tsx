import React from 'react';
import { motion } from 'framer-motion';
import { Code, Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { navItems } from '../../data/navItems';
import { useCommandPalette } from '../../context/CommandPaletteContext';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { openCommandPalette } = useCommandPalette();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-neutral-dark-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-dark-700">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Code className="h-8 w-8 text-accent-500" />
            </motion.div>
            <span className="font-bold text-xl">Kunj Jarsaniya</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a 
                key={item.path} 
                href={item.path}
                className="px-4 py-2 text-neutral-700 hover:text-accent-500 dark:text-neutral-200 dark:hover:text-accent-300 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* Command Palette Trigger + Theme Toggle */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={openCommandPalette}
              className="px-3 py-1.5 text-sm border-2 border-black dark:border-white rounded-lg flex items-center hover:bg-neutral-100 dark:hover:bg-neutral-dark-700 transition-colors"
            >
              <span className="mr-2">⌘</span>
              <span className="mr-1">K</span>
            </button>
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-neutral-700 dark:text-neutral-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neutral-200 dark:border-neutral-dark-700 overflow-hidden"
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a 
                    key={item.path} 
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 text-neutral-700 hover:text-accent-500 dark:text-neutral-200 dark:hover:text-accent-300 font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <button 
                  onClick={openCommandPalette}
                  className="px-4 py-2 text-left text-neutral-700 hover:text-accent-500 dark:text-neutral-200 dark:hover:text-accent-300 font-medium transition-colors"
                >
                  Command Palette (⌘K)
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const AnimatePresence = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};