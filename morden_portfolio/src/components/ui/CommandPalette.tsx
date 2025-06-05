import React, { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { useCommandPalette } from '../../context/CommandPaletteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../../data/navItems';
import { CommandIcon, Search } from 'lucide-react';

export const CommandPalette: React.FC = () => {
  const { isOpen, closeCommandPalette } = useCommandPalette();
  const [search, setSearch] = useState('');

  // Reset search when closed
  useEffect(() => {
    if (!isOpen) {
      setSearch('');
    }
  }, [isOpen]);

  const handleSelect = (path: string) => {
    window.location.href = path;
    closeCommandPalette();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCommandPalette}
          />
          <motion.div
            className="fixed inset-x-0 top-[20%] mx-auto max-w-xl bg-white dark:bg-neutral-dark-800 border-2 border-black dark:border-white rounded-lg shadow-brutal dark:shadow-brutal-light z-50 overflow-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Command 
              className="w-full" 
              label="Command Palette"
            >
              <div className="flex items-center px-4 border-b-2 border-neutral-200 dark:border-neutral-dark-700">
                <Search className="mr-2 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                <Command.Input 
                  value={search}
                  onValueChange={setSearch}
                  className="cmd-palette-input"
                  placeholder="Type a command or search..."
                  autoFocus
                />
                <div className="rounded border border-neutral-200 dark:border-neutral-dark-600 px-1.5 py-0.5 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  ESC
                </div>
              </div>
              <Command.List className="max-h-80 overflow-auto p-2 overflow-y-auto overflow-x-hidden">
                <Command.Empty className="py-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
                  No results found.
                </Command.Empty>
                
                <Command.Group heading="Navigation">
                  {navItems.map((item) => (
                    <Command.Item
                      key={item.path}
                      className="flex items-center px-3 py-2 rounded-lg text-neutral-700 dark:text-neutral-200 aria-selected:bg-accent-500 aria-selected:text-white cursor-pointer"
                      onSelect={() => handleSelect(item.path)}
                    >
                      <CommandIcon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};