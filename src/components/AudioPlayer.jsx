import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('https://www.chosic.com/wp-content/uploads/2023/05/lofi-study-112191.mp3'));

  const togglePlay = async () => {
    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.3;
        audioRef.current.loop = true;
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Audio playback error:', error);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={togglePlay}
      className="fixed bottom-4 right-4 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 z-50 group"
    >
      <motion.div
        animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }}
        transition={{ repeat: isPlaying ? Infinity : 0, duration: 2 }}
      >
        {isPlaying ? (
          <HiVolumeUp className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
        ) : (
          <HiVolumeOff className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default AudioPlayer;
