"use client";
import { motion } from "framer-motion";
import { C } from "./tokens";
import { Reveal } from "./shared";
import { Flower } from "./FloatingDecor";

// ── MEMORY CARDS CONFIG ────────────────────────────────────────────────
// Edit the caption for each card here.
// To add more cards, copy one object and add it to the array.
const memoryCards = [
  {
    image: "/memories/memory-1.png",
    caption: "where it all started — 07 Nov 2025",
    accentColor: C.pink,
    rotation: -2.5,
  },
  {
    image: "/memories/memory-2.png",
    caption: "5hrs straight, no breaks 💬",
    accentColor: C.sky,
    rotation: 1.8,
  },
  {
    image: "/memories/memory-3.png",
    caption: "when you started teasing me 😛",
    accentColor: "#c084fc",
    rotation: -1.2,
  },
  {
    image: "/memories/memory-4.png",
    caption: "just vibing. one of many quiet good conversations.",
    accentColor: C.pink,
    rotation: 2.4,
  },
  {
    image: "/memories/memory-5.png",
    caption: "\"mistyped\" — you didn't buy it 😭",
    accentColor: C.sky,
    rotation: -1.8,
  },
  {
    image: "/memories/memory-6.png",
    caption: "the unwanted prolsahanam 😭",
    accentColor: "#c084fc",
    rotation: 1.4,
  },
  {
    image: "/memories/memory-7.png",
    caption: "idk why this is funny, it just is 💀",
    accentColor: C.pink,
    rotation: -2.1,
  },
  {
    image: "/memories/memory-8.png",
    caption: "your one weakness 🍦",
    accentColor: C.sky,
    rotation: 1.6,
  },
  {
    image: "/memories/memory-9.png",
    caption: "cuteness overloaded 🤍",
    accentColor: C.pink,
    rotation: -1.3,
  },
  {
    image: "/memories/memory-10.png",
    caption: "first to go in the horror movie 💀",
    accentColor: "#c084fc",
    rotation: 2.2,
  },
  {
    image: "/memories/memory-11.png",
    caption: "she didn't say it. we both knew. 💀",
    accentColor: C.sky,
    rotation: -1.7,
  },
  {
    image: "/memories/memory-12.png",
    caption: "the holy trinity 🍦📶🛏️",
    accentColor: C.pink,
    rotation: 1.9,
  },
];

function PolaroidCard({ card, index }) {
  return (
    <Reveal delay={index * 0.12} y={24}>
      <motion.div
        whileHover={{ scale: 1.04, rotate: 0, y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{
          transform: `rotate(${card.rotation}deg)`,
          transformOrigin: "center bottom",
          cursor: "default",
        }}
      >
        <div style={{
          background: "rgba(255,255,255,0.05)",
          border: `1px solid ${card.accentColor}33`,
          borderRadius: 12,
          padding: "12px 12px 20px",
          backdropFilter: "blur(16px)",
          boxShadow: `0 0 18px ${card.accentColor}22, 0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)`,
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Corner glow */}
          <div style={{
            position: "absolute", top: 0, left: 0, width: 80, height: 80,
            borderRadius: "0 0 80px 0",
            background: `radial-gradient(circle at top left, ${card.accentColor}18, transparent 70%)`,
            pointerEvents: "none",
          }} />

          {/* ═══════════════════════════════════════════════════════════════
              IMAGE PLACEHOLDER — replace below with real screenshot image.

              HOW TO REPLACE:
              1. Add your screenshot to /public/memories/ (e.g. memory-1.png)
              2. Delete the entire placeholder <div> below (lines until END PLACEHOLDER)
              3. Replace it with:

                 <img
                   src="/memories/memory-1.png"
                   alt="short description"
                   style={{ width: "100%", height: 180, objectFit: "cover",
                            borderRadius: 4, display: "block" }}
                 />
          ═══════════════════════════════════════════════════════════════ */}
          {card.image ? (
            <img
              src={card.image}
              alt={card.caption}
              style={{ width: "100%", height: 220, objectFit: "cover", objectPosition: "top", borderRadius: 4, display: "block" }}
            />
          ) : (
          <div style={{
            width: "100%", height: 180,
            background: `linear-gradient(135deg, ${card.accentColor}0d 0%, rgba(255,255,255,0.02) 60%, #080810 100%)`,
            borderRadius: 4,
            border: `1px dashed ${card.accentColor}30`,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: 8, position: "relative", overflow: "hidden",
          }}>
            <div style={{ opacity: 0.18, pointerEvents: "none" }}>
              <Flower color={card.accentColor} size={32} />
            </div>
            <p style={{
              fontFamily: "'Lora', serif", fontSize: 11,
              color: `${card.accentColor}88`,
              letterSpacing: "0.12em", textTransform: "uppercase",
              textAlign: "center", padding: "0 12px",
            }}>add screenshot here</p>
          </div>
          )}

          {/* Caption */}
          <div style={{ marginTop: 12, paddingTop: 10, borderTop: `1px solid ${card.accentColor}22` }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: card.accentColor, opacity: 0.7, flexShrink: 0, marginTop: 5 }} />
              {/* Caption text is set in the memoryCards array at the top of this file */}
              <p style={{
                fontFamily: "'Lora', serif", fontSize: "clamp(11px, 2.5vw, 12.5px)",
                color: "#94a3b8", lineHeight: 1.5, fontStyle: "italic",
              }}>
                {card.caption}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function MemoryPolaroids() {
  return (
    <section style={{ padding: "60px 24px 80px", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Reveal>
          <p style={{
            textAlign: "center", marginBottom: 10,
            fontFamily: "'Lora', serif", fontSize: 13, color: "#94a3b8",
            letterSpacing: "0.1em", textTransform: "uppercase",
          }}>◈ from the archives ◈</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(24px, 6vw, 38px)",
            fontWeight: 700, color: "#f8fafc",
            textAlign: "center", marginBottom: 10,
            textShadow: `0 0 14px #7dd3fc44`,
          }}>A Few Memories</h2>
        </Reveal>
        <Reveal delay={0.08}>
          {/* EDIT: Rewrite this line in your own words */}
          <p style={{
            textAlign: "center", color: "#94a3b8",
            fontFamily: "'Lora', serif", fontSize: "clamp(13px, 3vw, 15px)",
            marginBottom: 52, maxWidth: 480, margin: "0 auto 52px", lineHeight: 1.7,
          }}>
            little moments that didn't feel like much at the time, but actually kind of did
          </p>
        </Reveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "clamp(20px, 4vw, 32px)",
          padding: "10px 4px",
        }}>
          {memoryCards.map((card, i) => (
            <PolaroidCard key={i} card={card} index={i} />
          ))}
        </div>


      </div>
    </section>
  );
}
