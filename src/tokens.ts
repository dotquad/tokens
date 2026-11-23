/**
 * Signal, Dotquad's design tokens: the one source for the colors, type, motion and
 * radii every Dotquad surface uses. Light first; `dark` redefines only what changes.
 * `tokens.css` (built from these) sets them as CSS custom properties.
 */

/** Colors as CSS values, by custom-property name without the leading `--`. */
export const colors = {
  light: {
    ink: "#0b1220",
    paper: "#f7f8fa",
    surface: "#ffffff",
    border: "#e5e8ec",
    "muted-bg": "#f2f4f6",
    "hover-bg": "#eef0f3",
    text: "#0b1220",
    quiet: "#4b5563",
    nav: "#374151",
    signal: "#0f766e",
    "signal-hover": "#115e59",
    "signal-tint": "#e6f4f2",
    "signal-tint-text": "#115e59",
    flag: "#b45309",
    /** Amber fill for flagged results; follows --flag in dark mode. Text on it uses --flag. */
    "flag-tint": "color-mix(in srgb, var(--flag) 14%, transparent)",
    focus: "#2dd4bf",
    button: "#0b1220",
    "button-text": "#ffffff",
    panel: "#0b1220",
    "panel-code": "#131c2e",
    "panel-border": "#22304a",
    "map-water": "#dcebea",
    "map-land": "#f7f8fa",
    "map-line": "rgba(75, 85, 99, 0.18)",
    /** MapLibre's control group stays white in both themes, so these never change for dark. */
    "map-ctrl-ink": "#333333",
    "map-ctrl-node": "#0f766e",
    shadow: "rgba(11, 18, 32, 0.35)",
    /** The icons' signal node. */
    "ipm-node": "var(--signal)",
  },
  dark: {
    paper: "#0b1220",
    surface: "#131c2e",
    border: "#22304a",
    "muted-bg": "#1c2638",
    "hover-bg": "#1c2638",
    text: "#f7f8fa",
    quiet: "#94a3b8",
    nav: "#cbd5e1",
    signal: "#2dd4bf",
    "signal-hover": "#5eead4",
    "signal-tint": "rgba(45, 212, 191, 0.14)",
    "signal-tint-text": "#5eead4",
    flag: "#f59e0b",
    button: "#f7f8fa",
    "button-text": "#0b1220",
    panel: "#131c2e",
    "panel-code": "#0b1220",
    "map-water": "#0e1b2e",
    "map-land": "#1c2638",
    "map-line": "rgba(247, 248, 250, 0.12)",
    shadow: "rgba(0, 0, 0, 0.6)",
  },
} as const;

export type ColorName = keyof typeof colors.light;

/**
 * Text on the dark code panel (`--panel`), the same in both themes: body, comments and
 * prompts, emphasis, and strings.
 */
export const panelText = {
  body: "#cbd5e1",
  muted: "#94a3b8",
  strong: "#ffffff",
  string: "#5eead4",
} as const;

/** Type families. Load the fonts yourself (they're open source); these name them with fallbacks. */
export const fonts = {
  /** Space Grotesk 600 for display. */
  display: '"Space Grotesk Variable", "Space Grotesk", system-ui, sans-serif',
  /** Inter for text. */
  text: '"Inter Variable", Inter, system-ui, sans-serif',
  /** JetBrains Mono, with tabular numbers, for all data. */
  mono: '"JetBrains Mono Variable", "JetBrains Mono", ui-monospace, monospace',
} as const;

export const easing = {
  /** Standard: 240 ms. */
  standard: "cubic-bezier(0.2, 0.8, 0.2, 1)",
  /** Slight overshoot, for pin drops and toggles. */
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;

/** The motion language's named durations, in milliseconds. Every motion means something. */
export const motion = {
  /** A button press: scale 0.96. */
  press: 120,
  standard: 240,
  /** Reveal stagger between items (they rise 14 px). */
  revealStagger: 60,
  /** The live pulse, an ease-out loop. */
  pulse: 2400,
  /** A new IP decodes, locking left to right. */
  decode: 900,
  /** Each hop of a route drawing. */
  routeDraw: 500,
  /** How long "Copied" shows. */
  copied: 1600,
  /** The Mac menu bar panel scaling from its status item. */
  menuBarPanel: 320,
} as const;

/** Corner radii in pixels. */
export const radius = {
  pill: 999,
  card: 20,
  search: 16,
  table: 14,
  button: 12,
  badge: 6,
} as const;
