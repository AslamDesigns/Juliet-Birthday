"use client";
import { motion } from "framer-motion";
import { C } from "./tokens";
import { Reveal, GlassCard } from "./shared";
import { Flower, Moon, Butterfly } from "./FloatingDecor";

export default function FinalCard() {
  return (
    <section style={{ padding: "80px 24px 60px", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: 660, margin: "0 auto" }}>
        <Reveal>
          <GlassCard glow={C.sky} style={{ padding: "clamp(32px, 7vw, 56px)", textAlign: "center", position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 28 }}>
              <Flower color={C.pink} size={22} />
              <Moon style={{ width: 32, height: 32 }} />
              <Flower color={C.sky} size={22} />
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px, 5vw, 28px)", color: C.pink, marginBottom: 28, textShadow: `0 0 12px ${C.pink}44` }}>
              You're one of the best things about my online life, Juliet.
            </h3>
            <div style={{ fontFamily: "'Lora', serif", fontSize: "clamp(13px, 3vw, 16px)", color: "#cbd5e1", lineHeight: 1.85 }}>
              <p style={{ marginBottom: 16 }}>I hope this year is genuinely good to you — full of peace, fun, things that make you laugh, and all the things you've been working towards.</p>
              <p style={{ color: C.muted }}>You deserve someone in your corner, and I want you to know I'm not going anywhere. Best friends stick around. Happy birthday, Juliet 🩷🌸</p>
            </div>
            <div style={{ marginTop: 32, display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
              {["✦", "✿", "◈", "✧", "❋"].map((s, i) => (
                <motion.span key={i}
                  style={{ color: [C.pink, C.sky, "#c084fc", C.pinkLight, C.sky][i], fontSize: 16 }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
                >{s}</motion.span>
              ))}
            </div>
            <div style={{ position: "absolute", top: 16, left: 16, opacity: 0.4 }}><Butterfly color={C.pink} size={20} /></div>
            <div style={{ position: "absolute", top: 16, right: 16, opacity: 0.4 }}><Butterfly color={C.sky} size={20} /></div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
