import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  // Use a spring to smooth out the progress bar's movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,  // Lower stiffness for smoother transitions
    damping: 20,    // Balanced damping for smooth deceleration
  });

  // Transform the smooth progress to scaleX
  const scaleX = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left z-50"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
