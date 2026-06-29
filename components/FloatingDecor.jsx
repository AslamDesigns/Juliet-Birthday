"use client";
import { motion } from "framer-motion";
import { C } from "./tokens";

export const Butterfly = ({ style, color = C.pink, size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 40 30" style={style} fill="none">
    <ellipse cx="10" cy="12" rx="9" ry="6" fill={color} opacity="0.7" transform="rotate(-20 10 12)" />
    <ellipse cx="10" cy="20" rx="6" ry="4" fill={color} opacity="0.5" transform="rotate(15 10 20)" />
    <ellipse cx="30" cy="12" rx="9" ry="6" fill={color} opacity="0.7" transform="rotate(20 30 12)" />
    <ellipse cx="30" cy="20" rx="6" ry="4" fill={color} opacity="0.5" transform="rotate(-15 30 20)" />
    <rect x="19" y="8" width="2" height="16" rx="1" fill={color} opacity="0.9" />
  </svg>
);

export const Petal = ({ style, color = "#f9a8d4" }) => (
  <svg width="16" height="22" viewBox="0 0 16 22" style={style} fill="none">
    <ellipse cx="8" cy="11" rx="6" ry="10" fill={color} opacity="0.6" />
  </svg>
);

export const Star = ({ style, color = C.pinkLight, size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" style={style}>
    <polygon points="10,1 12.4,7.6 19.5,7.6 13.9,12 16.2,18.6 10,14.5 3.8,18.6 6.1,12 0.5,7.6 7.6,7.6" fill={color} opacity="0.85" />
  </svg>
);

export const Moon = ({ style }) => (
  <svg width="56" height="56" viewBox="0 0 56 56" style={style} fill="none">
    <circle cx="28" cy="28" r="22" fill="#fde68a" opacity="0.18" />
    <circle cx="28" cy="28" r="16" fill="#fde68a" opacity="0.28" />
    <path d="M38 18 Q48 28 38 42 Q26 52 18 44 Q28 44 32 36 Q38 26 38 18Z" fill="#fef3c7" opacity="0.85" />
  </svg>
);

export const Flower = ({ style, color = C.pink, size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" style={style} fill="none">
    {[0, 60, 120, 180, 240, 300].map((a, i) => (
      <ellipse key={i} cx="20" cy="20" rx="5" ry="10" fill={color} opacity="0.65"
        transform={`rotate(${a} 20 20) translate(0 -6)`} />
    ))}
    <circle cx="20" cy="20" r="5" fill="#fde68a" opacity="0.9" />
  </svg>
);

export const Cloud = ({ style }) => (
  <svg width="90" height="50" viewBox="0 0 90 50" style={style} fill="none">
    <ellipse cx="45" cy="35" rx="38" ry="15" fill="white" opacity="0.07" />
    <ellipse cx="30" cy="28" rx="18" ry="14" fill="white" opacity="0.06" />
    <ellipse cx="55" cy="25" rx="20" ry="15" fill="white" opacity="0.06" />
    <ellipse cx="42" cy="22" rx="14" ry="12" fill="white" opacity="0.05" />
  </svg>
);

export function Float({ children, duration = 4, delay = 0, amplitude = 12, style }) {
  return (
    <motion.div
      style={{ position: "absolute", ...style }}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SparkleField() {
  const sparks = Array.from({ length: 38 }, (_, i) => ({
    id: i,
    x: (i * 17 + 3) % 100,
    y: (i * 23 + 7) % 100,
    size: 4 + (i % 3) * 3,
    delay: (i * 0.4) % 5,
    dur: 2 + (i % 4) * 0.7,
    color: [C.pinkLight, C.sky, C.lavender, "#fef9c3"][i % 4],
  }));
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {sparks.map(s => (
        <motion.div key={s.id} style={{
          position: "absolute", left: `${s.x}%`, top: `${s.y}%`,
          width: s.size, height: s.size, borderRadius: "50%",
          background: s.color, filter: `blur(${s.size * 0.3}px)`,
        }}
          animate={{ opacity: [0, 0.7, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function GlobalDecor() {
  const items = [
    { type: "butterfly", top: "8%", left: "5%", color: C.pink, delay: 0, dur: 5, amp: 16 },
    { type: "butterfly", top: "22%", right: "7%", color: C.sky, delay: 1.2, dur: 6, amp: 12 },
    { type: "butterfly", top: "55%", left: "3%", color: C.lavender, delay: 2, dur: 4.5, amp: 10 },
    { type: "butterfly", top: "75%", right: "4%", color: C.pink, delay: 0.8, dur: 5.5, amp: 14 },
    { type: "petal", top: "15%", left: "18%", delay: 1, dur: 6, amp: 18 },
    { type: "petal", top: "40%", right: "12%", delay: 2.5, dur: 5, amp: 14, color: C.sky },
    { type: "petal", top: "65%", left: "10%", delay: 0.5, dur: 7, amp: 20 },
    { type: "petal", top: "85%", right: "20%", delay: 3, dur: 4, amp: 10 },
    { type: "flower", top: "30%", right: "3%", delay: 1.5, dur: 5, amp: 8, color: C.lavender, size: 22 },
    { type: "flower", top: "60%", left: "2%", delay: 0.3, dur: 6, amp: 10, color: C.sky, size: 18 },
    { type: "star", top: "12%", right: "22%", delay: 0.6, dur: 3, amp: 6 },
    { type: "star", top: "48%", left: "25%", delay: 2.1, dur: 4, amp: 8 },
    { type: "star", top: "78%", right: "30%", delay: 1.8, dur: 3.5, amp: 5 },
  ];
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
      {items.map((item, i) => {
        const pos = {};
        if (item.top) pos.top = item.top;
        if (item.left) pos.left = item.left;
        if (item.right) pos.right = item.right;
        return (
          <Float key={i} duration={item.dur} delay={item.delay} amplitude={item.amp} style={pos}>
            {item.type === "butterfly" && <Butterfly color={item.color} size={item.size || 26} />}
            {item.type === "petal" && <Petal color={item.color || "#f9a8d4"} />}
            {item.type === "flower" && <Flower color={item.color} size={item.size || 28} />}
            {item.type === "star" && <Star color={item.color || C.pinkLight} size={item.size || 14} />}
          </Float>
        );
      })}
    </div>
  );
}
