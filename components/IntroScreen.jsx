"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { C } from "./tokens";
import { Moon } from "./FloatingDecor";

export default function IntroScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3200);
    return () => clearTimeout(t);
  }, [onDone]);

  const text = "a little something, for my best friend Juliet...".split("");

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: C.bg,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 28,
      }}
    >
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "backOut" }}
      >
        <Moon />
      </motion.div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", maxWidth: 340, padding: "0 20px" }}>
        {text.map((ch, i) => (
          <motion.span key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.045, duration: 0.35 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(15px, 4vw, 20px)",
              color: C.muted,
              letterSpacing: "0.04em",
              whiteSpace: ch === " " ? "pre" : "normal",
            }}>{ch}</motion.span>
        ))}
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.6, duration: 1.2, ease: "easeInOut" }}
        style={{
          width: 120, height: 1.5, transformOrigin: "left",
          background: `linear-gradient(90deg, transparent, ${C.pink}, ${C.sky}, transparent)`,
        }}
      />
    </motion.div>
  );
}
