import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi'; // Import icons for mobile menu
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);
  const { isDark } = useTheme();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const previous = scrollPosition;
      setScrollPosition(latest);
      setHidden(latest > previous && latest > 50);
    });
  }, [scrollY, scrollPosition]);

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  const handleNavClick = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm ${
          isDark 
            ? 'bg-primary-dark/80' 
            : 'bg-light-bg/80 border-b border-light-border'
        }`}
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#hero"
              className={`text-2xl font-bold ${
                isDark ? 'text-white' : 'text-light-text'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.a>
            
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${
                    isDark 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-light-muted hover:text-light-text'
                  } transition-colors duration-200`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <div className="bg-black/95 backdrop-blur-lg border-b border-white/10 py-4">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className="text-gray-300 hover:text-white py-2 text-center"
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.button>
                ))}
                <motion.a
                  href="/resume.pdf" // Add your resume file
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-opacity text-center"
                  whileTap={{ scale: 0.95 }}
                >
                  Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
