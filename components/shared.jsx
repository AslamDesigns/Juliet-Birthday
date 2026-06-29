"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { C, glow } from "./tokens";

export function Reveal({ children, delay = 0, y = 28 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function GlassCard({ children, style, glow: glowColor }) {
  return (
    <div style={{
      background: C.glass,
      border: `1px solid ${C.border}`,
      borderRadius: 20,
      backdropFilter: "blur(18px)",
      position: "relative",
      boxShadow: glowColor
        ? `0 0 20px ${glowColor}44, 0 0 40px ${glowColor}22, inset 0 1px 0 rgba(255,255,255,0.1)`
        : "inset 0 1px 0 rgba(255,255,255,0.08)",
      ...style,
    }}>
      {children}
    </div>
  );
}

export function SectionHeading({ children, accent = C.pink }) {
  return (
    <h2 style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "clamp(26px, 6vw, 42px)",
      fontWeight: 700,
      color: C.white,
      textAlign: "center",
      marginBottom: 8,
      textShadow: `0 0 16px ${accent}44, 0 0 32px ${accent}22`,
    }}>{children}</h2>
  );
}

export function Divider({ color = C.pink }) {
  return (
    <div style={{ padding: "0 24px", position: "relative", zIndex: 2 }}>
      <div style={{
        height: 1, maxWidth: 500, margin: "0 auto",
        background: `linear-gradient(90deg, transparent, ${color}44, transparent)`,
      }} />
    </div>
  );
}
