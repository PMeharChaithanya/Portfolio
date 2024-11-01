import { useState, useEffect, useRef } from 'react';

export const useAudio = (url) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(url);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [url]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Playback prevented:", error);
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  const adjustVolume = (newVolume) => {
    setVolume(Math.max(0, Math.min(1, newVolume)));
  };

  return {
    isPlaying,
    toggle,
    volume,
    adjustVolume
  };
};
