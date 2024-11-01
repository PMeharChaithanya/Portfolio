import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'AI/ML Engineer',
        'Deep Learning Enthusiast',
        'Full Stack Developer',
        'UI/UX Enthusiast',
        'Problem Solver',
        'Tech Explorer'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="text-xl md:text-2xl text-gray-400">
      <span>I'm a </span>
      <span ref={el} className="text-blue-400" />
    </div>
  );
};

export default TypedText;
