"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "./tokens";
import { Reveal, SectionHeading } from "./shared";
import { Flower, Butterfly } from "./FloatingDecor";

function WatermarkPreview() {
  return (
    <div style={{
      position: "relative", width: "100%", maxWidth: 360, margin: "0 auto",
      borderRadius: 18,
      boxShadow: `0 0 24px ${C.pink}66, 0 0 48px ${C.pink}33, 0 0 16px ${C.sky}22`,
      overflow: "hidden",
    }}>
      <img
        src="/Juliet.png"
        alt="Juliet Watermark"
        style={{ width: "100%", height: "auto", display: "block", borderRadius: 18 }}
      />
    </div>
  );
}

export default function GiftReveal() {
  const [opened, setOpened] = useState(false);
  return (
    <section style={{ padding: "80px 24px", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <Reveal><SectionHeading>A Small Gift for You</SectionHeading></Reveal>
        <Reveal><p style={{ color: C.muted, fontFamily: "'Lora', serif", fontSize: 14, marginBottom: 44 }}>✧ a custom watermark concept, made for you ✧</p></Reveal>
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div key="closed" exit={{ opacity: 0, scale: 0.85 }} transition={{ duration: 0.4 }}>
              <Reveal>
                <motion.button onClick={() => setOpened(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} style={{
                  background: `linear-gradient(135deg, ${C.pinkDark}, #3b82f6)`, border: "none", borderRadius: 50,
                  padding: "16px 44px", color: C.white, fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 20, fontWeight: 600, cursor: "pointer",
                  boxShadow: `0 0 18px ${C.pink}44, 0 0 36px #3b82f622`, letterSpacing: "0.06em",
                }}>✦ Open Gift ✦</motion.button>
              </Reveal>
            </motion.div>
          ) : (
            <motion.div key="opened" initial={{ opacity: 0, scale: 0.7, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, ease: "backOut" }}>
              <WatermarkPreview />
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <p style={{ color: C.muted, fontFamily: "'Lora', serif", fontSize: 13, marginTop: 20, marginBottom: 16 }}>
                  A custom aesthetic watermark concept — yours to keep.
                </p>
                <motion.a href="/Juliet.png" download="Juliet-Watermark.png" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{
                  display: "inline-block", background: "transparent",
                  border: `1px solid ${C.pink}66`, borderRadius: 50,
                  padding: "10px 28px", color: C.pink, fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 16, cursor: "pointer", letterSpacing: "0.06em", textDecoration: "none",
                }}>↓ Download Watermark</motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
