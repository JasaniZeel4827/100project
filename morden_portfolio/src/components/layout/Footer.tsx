import React from 'react';
import { Heart } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useCommandPalette } from '../../context/CommandPaletteContext';

export const Footer: React.FC = () => {
  const { openCommandPalette } = useCommandPalette();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-neutral-100 dark:bg-neutral-dark-900 border-t border-neutral-200 dark:border-neutral-dark-700">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-neutral-700 dark:text-neutral-300 text-center md:text-left">
              &copy; {currentYear} Kunj Jarsaniya. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center">
              {/* Built with */}
              <Heart size={14} className="mx-1 text-red-500" fill="currentColor" />
              {/* using React & TailwindCSS */}
            </p>
            
            <div className="flex items-center space-x-3">
              <button 
                onClick={openCommandPalette}
                className="px-3 py-1.5 text-sm border border-black dark:border-white rounded-lg flex items-center hover:bg-neutral-200 dark:hover:bg-neutral-dark-700 transition-colors"
                aria-label="Open command palette"
              >
                <span className="mr-2">⌘</span>
                <span className="mr-1">K</span>
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};