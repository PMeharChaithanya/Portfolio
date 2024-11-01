import React from 'react';
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`fixed top-20 right-4 p-3 rounded-full backdrop-blur-sm border z-50 ${
        isDark 
          ? 'bg-white/10 border-white/20' 
          : 'bg-light-card border-light-border shadow-lg'
      }`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <HiSun className="w-6 h-6 text-yellow-400" />
        ) : (
          <HiMoon className="w-6 h-6 text-light-accent" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeSwitcher;
