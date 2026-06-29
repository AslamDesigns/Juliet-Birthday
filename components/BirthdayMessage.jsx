"use client";
import { C } from "./tokens";
import { Reveal, GlassCard, SectionHeading } from "./shared";
import { Flower } from "./FloatingDecor";

export default function BirthdayMessage() {
  return (
    <section style={{ padding: "80px 24px", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <Reveal><SectionHeading>A Message for You</SectionHeading></Reveal>
        <Reveal><p style={{ textAlign: "center", color: C.muted, marginBottom: 36, fontFamily: "'Lora', serif", fontSize: 15 }}>✦ from your best friend, who means every word ✦</p></Reveal>
        <Reveal delay={0.15}>
          <GlassCard glow={C.pink} style={{ padding: "clamp(28px, 6vw, 52px)" }}>
            <div style={{ position: "absolute", top: 16, right: 20, opacity: 0.4 }}><Flower color={C.pink} size={22} /></div>
            <div style={{ position: "absolute", bottom: 16, left: 20, opacity: 0.3 }}><Flower color={C.sky} size={18} /></div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: "clamp(14px, 3.5vw, 17px)", color: C.white, lineHeight: 1.85, position: "relative" }}>
              <p style={{ color: C.pink, fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px, 4vw, 24px)", marginBottom: 24, fontWeight: 600 }}>
                Happy birthday, Juliet. 🎂
              </p>
              <p style={{ marginBottom: 18, color: "#e2e8f0" }}>I'm not the best with words, but I wanted to do something real for you. Not just a message.</p>
              <p style={{ marginBottom: 18, color: "#e2e8f0" }}>You're not just someone I met online. You're my best friend. The daily talks, that one time we went 5 hours straight without even noticing — that stuff is rare, and I don't take it for granted.</p>
              <p style={{ marginBottom: 18, color: "#e2e8f0" }}>You make me laugh almost every time we talk, which is one of the biggest reasons I love you. You always know exactly how to cheer me up and make me smile, no matter what's going on.</p>
              <p style={{ marginBottom: 18, color: "#e2e8f0" }}>You've been there through a lot. You listen, you care, you make things lighter just by being around. That's not something everyone does.</p>
              <p style={{ color: C.pinkLight }}>This website is a birthday gift, yes — but more than that, it's proof that you matter to me. A lot. Happy birthday, bestie. 🩷</p>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
