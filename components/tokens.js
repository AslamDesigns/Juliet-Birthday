// ── Design tokens ──────────────────────────────────────────
export const C = {
  bg:        "#080810",
  surface:   "rgba(255,255,255,0.04)",
  glass:     "rgba(255,255,255,0.07)",
  border:    "rgba(255,255,255,0.10)",
  pink:      "#f472b6",
  pinkDark:  "#db2777",
  pinkLight: "#fbcfe8",
  sky:       "#7dd3fc",
  blue:      "#3b82f6",
  lavender:  "#c084fc",
  white:     "#f8fafc",
  muted:     "#94a3b8",
  pale:      "#fce7f3",
};

export const glow = (color, px = 24) =>
  `0 0 ${px}px ${color}44, 0 0 ${px * 2}px ${color}22`;
