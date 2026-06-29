"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { C } from "./tokens";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // We start paused. Audio autoplay is usually blocked by browsers anyway.
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>
      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 90,
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: `1px solid ${C.pink}44`,
          background: "rgba(13, 13, 26, 0.7)",
          backdropFilter: "blur(8px)",
          color: isPlaying ? C.pink : C.muted,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: isPlaying ? `0 0 16px ${C.pink}33` : "none",
          fontSize: 18,
        }}
      >
        {isPlaying ? "♪" : "♫"}
      </motion.button>
    </>
  );
}
