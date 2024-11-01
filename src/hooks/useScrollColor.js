import { useState, useEffect } from 'react';

export const useScrollColor = () => {
  const [backgroundColor, setBackgroundColor] = useState('bg-[#030014]');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop - windowHeight / 2 && 
            scrollPosition < sectionTop + sectionHeight - windowHeight / 2) {
          switch(index) {
            case 0: // Hero
              setBackgroundColor('bg-gradient-to-b from-[#030014] to-[#0a0026]');
              break;
            case 1: // About
              setBackgroundColor('bg-gradient-to-b from-[#0a0026] to-[#10003b]');
              break;
            case 2: // Skills
              setBackgroundColor('bg-gradient-to-b from-[#10003b] to-[#1a0040]');
              break;
            case 3: // Projects
              setBackgroundColor('bg-gradient-to-b from-[#1a0040] to-[#10003b]');
              break;
            case 4: // Contact
              setBackgroundColor('bg-gradient-to-b from-[#10003b] to-[#030014]');
              break;
            default:
              setBackgroundColor('bg-[#030014]');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return backgroundColor;
};
