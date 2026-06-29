"use client";
import { C } from "./tokens";
import { Reveal, GlassCard, SectionHeading } from "./shared";

const timelineItems = [
  { year: "2025", title: "We became friends.", icon: "✦", color: C.pink },
  { year: "Daily talks", title: "Random chats somehow became part of the routine.", icon: "◈", color: C.sky },
  { year: "GFX lessons", title: "You helped me understand cute aesthetic watermark design.", icon: "✧", color: "#c084fc" },
  { year: "Creative chaos", title: "Ideas, edits, random moments, and small memories.", icon: "❋", color: C.pink },
  { year: "Today", title: "A small birthday world made just to celebrate you.", icon: "✦", color: C.sky },
];

export default function Timeline() {
  return (
    <section style={{ padding: "80px 24px", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <Reveal><SectionHeading accent={C.sky}>Our Journey</SectionHeading></Reveal>
        <Reveal><p style={{ textAlign: "center", color: C.muted, marginBottom: 56, fontFamily: "'Lora', serif", fontSize: 14 }}>◈ moments that stayed ◈</p></Reveal>
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", left: "clamp(18px, 4vw, 40px)", top: 0, bottom: 0, width: 1.5,
            background: `linear-gradient(180deg, ${C.pink}44, ${C.sky}44, #c084fc44)`,
          }} />
          {timelineItems.map((item, i) => (
            <Reveal key={i} delay={i * 0.12} y={20}>
              <div style={{ display: "flex", gap: "clamp(20px, 5vw, 48px)", marginBottom: 36, alignItems: "flex-start", paddingLeft: "clamp(8px, 2vw, 20px)" }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                  background: `${item.color}22`, border: `1.5px solid ${item.color}88`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 0 12px ${item.color}44`, fontSize: 14, color: item.color, position: "relative", zIndex: 1,
                }}>{item.icon}</div>
                <GlassCard style={{ flex: 1, padding: "18px 22px" }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(13px, 3vw, 16px)", color: item.color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{item.year}</p>
                  <p style={{ fontFamily: "'Lora', serif", fontSize: "clamp(13px, 3vw, 15px)", color: "#cbd5e1", lineHeight: 1.6 }}>{item.title}</p>
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
