"use client";
import { motion } from "framer-motion";
import { C } from "./tokens";
import { Reveal, GlassCard, SectionHeading } from "./shared";

const traits = [
  { label: "Best Friend", desc: "The kind of person I don't need to explain myself to. You just get it, every time.", icon: "✦", color: C.pink },
  { label: "Caring", desc: "Genuinely there for you. The type who checks in, listens, and makes hard days a little softer.", icon: "✿", color: C.sky },
  { label: "One of a Kind", desc: "Creative, funny, thoughtful, and real. There's seriously no one else quite like you.", icon: "◈", color: "#c084fc" },
];

export default function CreativeCards() {
  return (
    <section style={{ padding: "80px 24px", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Reveal><SectionHeading accent="#c084fc">What Makes Juliet, Juliet</SectionHeading></Reveal>
        <Reveal>
          <p style={{ textAlign: "center", color: C.muted, marginBottom: 52, fontFamily: "'Lora', serif", fontSize: "clamp(13px, 3vw, 16px)", maxWidth: 500, margin: "0 auto 52px" }}>
            Beyond the GFX, the art, and the aesthetics — this is who you actually are.
          </p>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {traits.map((t, i) => (
            <Reveal key={i} delay={i * 0.14}>
              <motion.div whileHover={{ scale: 1.04, y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
                <GlassCard glow={t.color} style={{ padding: "32px 24px", textAlign: "center", cursor: "default" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%", margin: "0 auto 18px",
                    background: `${t.color}18`, border: `1px solid ${t.color}44`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, color: t.color, boxShadow: `0 0 14px ${t.color}44`,
                  }}>{t.icon}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: t.color, marginBottom: 10 }}>{t.label}</h3>
                  <p style={{ fontFamily: "'Lora', serif", fontSize: 13, color: C.muted, lineHeight: 1.7 }}>{t.desc}</p>
                </GlassCard>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
