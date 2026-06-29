"use client";
import { motion } from "framer-motion";
import { C } from "./tokens";
import { Float, Moon, Cloud, Flower } from "./FloatingDecor";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      position: "relative", textAlign: "center", padding: "80px 24px 60px", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse 60% 40% at 50% 20%, ${C.pink}18 0%, transparent 70%),
          radial-gradient(ellipse 40% 30% at 80% 70%, ${C.sky}14 0%, transparent 60%),
          radial-gradient(ellipse 50% 35% at 20% 80%, #c084fc10 0%, transparent 60%)
        `,
      }} />
      <Float duration={7} amplitude={10} style={{ top: "10%", right: "12%", zIndex: 2 }}><Moon /></Float>
      <Float duration={9} amplitude={6} delay={1} style={{ top: "18%", left: "2%", zIndex: 2 }}><Cloud /></Float>
      <Float duration={11} amplitude={8} delay={2} style={{ top: "25%", right: "5%", zIndex: 2 }}><Cloud /></Float>
      <Float duration={5} amplitude={14} delay={0.5} style={{ top: "30%", left: "8%", zIndex: 2 }}><Flower color="#c084fc" size={32} /></Float>
      <Float duration={6} amplitude={10} delay={1.5} style={{ top: "35%", right: "9%", zIndex: 2 }}><Flower color={C.sky} size={26} /></Float>

      <div style={{ position: "relative", zIndex: 3, maxWidth: 700 }}>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.1, ease: "backOut" }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(11px, 3vw, 14px)",
            color: C.sky, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 20,
          }}>30 · June · 2026</p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 10vw, 80px)",
            fontWeight: 700, lineHeight: 1.1, color: C.white,
            textShadow: `0 0 30px ${C.pink}44, 0 0 60px ${C.pink}22, 0 0 20px ${C.sky}22`,
            marginBottom: 24,
          }}>
            Happy Birthday<br />
            <span style={{ color: C.pink }}>Juliet</span>
          </h1>
          <p style={{
            fontFamily: "'Lora', serif", fontSize: "clamp(14px, 3.5vw, 18px)",
            color: C.muted, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 36px",
          }}>
            A little gift for the person who somehow became my best friend.
          </p>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}
            style={{ color: C.pink, fontSize: 22, opacity: 0.6 }}>✦</motion.div>
        </motion.div>
      </div>
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 120, zIndex: 2,
        background: `linear-gradient(transparent, ${C.bg})`,
      }} />
    </section>
  );
}
