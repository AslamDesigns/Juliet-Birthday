"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "../components/tokens";
import { SparkleField, GlobalDecor } from "../components/FloatingDecor";
import { Divider } from "../components/shared";
import IntroScreen from "../components/IntroScreen";
import Hero from "../components/Hero";
import BirthdayMessage from "../components/BirthdayMessage";

import MemoryPolaroids from "../components/MemoryPolaroids";
import CreativeCards from "../components/CreativeCards";
import GiftReveal from "../components/GiftReveal";
import FinalCard from "../components/FinalCard";

function Footer() {
  return (
    <footer style={{
      padding: "40px 24px", textAlign: "center",
      position: "relative", zIndex: 2,
      borderTop: "1px solid rgba(255,255,255,0.1)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 12, fontSize: 16 }}>
        <span style={{ color: C.pink }}>✿</span>
        <span style={{ color: C.sky }}>✿</span>
        <span style={{ color: "#c084fc" }}>✿</span>
      </div>
      <p style={{ fontFamily: "'Lora', serif", fontSize: 13, color: C.muted, letterSpacing: "0.04em" }}>
        Made with respect, gratitude, and too many floating petals.
      </p>
      <p style={{ color: "rgba(148,163,184,0.35)", fontSize: 11, marginTop: 8, fontFamily: "monospace" }}>
        ✦ Juliet&apos;s Creative World · 2026 ✦
      </p>
    </footer>
  );
}

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <div style={{ minHeight: "100vh", background: C.bg, position: "relative", overflowX: "hidden" }}>
      <SparkleField />
      <GlobalDecor />
      <AnimatePresence>
        {showIntro && <IntroScreen onDone={() => setShowIntro(false)} />}
      </AnimatePresence>
      {!showIntro && (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Hero />
          <Divider color={C.pink} />
          <BirthdayMessage />
          <Divider color={C.sky} />
          <MemoryPolaroids />
          <Divider color="#c084fc" />
          <CreativeCards />
          <Divider color={C.pink} />
          <GiftReveal />
          <Divider color="#c084fc" />
          <FinalCard />
          <Footer />
        </motion.main>
      )}
    </div>
  );
}
