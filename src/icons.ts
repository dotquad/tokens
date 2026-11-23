/**
 * The "signal node" icon set from the design canvas: 24 px grid, 1.75 stroke,
 * one node per glyph (class "node", filled with --ipm-node). Static, trusted markup:
 * each value is the inner SVG of a 24 × 24 viewBox with a 1.75 stroke.
 */
const NODE = (cx: number, cy: number, r: number) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" stroke="none" class="node"></circle>`;

export const ICONS = {
  search: `<circle cx="10.5" cy="10.5" r="6.75"></circle><path d="M15.5 15.5l5 5"></path><path d="M10.5 5.75v1.6M10.5 13.65v1.6M5.75 10.5h1.6M13.65 10.5h1.6"></path>${NODE(10.5, 10.5, 1.7)}`,
  copy: `<rect x="8.5" y="8.5" width="12" height="12" rx="3"></rect><path d="M15.5 8.5V6.5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h2"></path>${NODE(14.5, 14.5, 1.6)}`,
  api: `<path d="M8.5 4.5c-2.25 0-3 1-3 2.75v2c0 1.25-.75 2.25-2 2.75 1.25.5 2 1.5 2 2.75v2c0 1.75.75 2.75 3 2.75M15.5 4.5c2.25 0 3 1 3 2.75v2c0 1.25.75 2.25 2 2.75-1.25.5-2 1.5-2 2.75v2c0 1.75-.75 2.75-3 2.75"></path>${NODE(12, 12, 2.1)}`,
  vpn: `<path d="M12 2.75l7.75 3v5.75c0 4.75-3.3 8.2-7.75 9.75-4.45-1.55-7.75-5-7.75-9.75V5.75z"></path><circle cx="12" cy="11.75" r="3.25"></circle>${NODE(12, 11.75, 1.3)}`,
  dns: `<rect x="3.5" y="3.75" width="17" height="6.5" rx="2.25"></rect><rect x="3.5" y="13.75" width="17" height="6.5" rx="2.25"></rect><path d="M12 10.25v3.5"></path><path d="M10.5 7h6.5M10.5 17h6.5"></path>${NODE(7, 7, 1.5)}<circle cx="7" cy="17" r="1.2" fill="currentColor" stroke="none"></circle>`,
  asn: `<path d="M12 2.75l8 4.6v9.3l-8 4.6-8-4.6v-9.3z"></path><path d="M12 7.5V12l-3.75 2.25M12 12l3.75 2.25"></path><circle cx="12" cy="7.5" r="1.3" fill="currentColor" stroke="none"></circle><circle cx="8.25" cy="14.25" r="1.3" fill="currentColor" stroke="none"></circle><circle cx="15.75" cy="14.25" r="1.3" fill="currentColor" stroke="none"></circle>${NODE(12, 12, 1.9)}`,
  rdns: `<path d="M5 8.25h11.5M13.5 5l3.25 3.25-3.25 3.25M19 15.75H7.5M10.5 12.5l-3.25 3.25L10.5 19"></path>${NODE(19, 8.25, 1.6)}`,
  whois: `<path d="M3.5 12.25V5A1.5 1.5 0 0 1 5 3.5h7.25l8.25 8.25-8.75 8.75z"></path><path d="M11.5 14.5l3-3"></path>${NODE(8, 8, 1.9)}`,
  subnet: `<rect x="3.5" y="3.5" width="17" height="17" rx="3.5"></rect><path d="M12 3.5v17M3.5 12h17"></path>${NODE(16.25, 16.25, 2.1)}`,
  // TLS check: a padlock, the node in the keyhole.
  lock: `<rect x="4.5" y="10.25" width="15" height="10.25" rx="2.75"></rect><path d="M8 10.25V7.5a4 4 0 0 1 8 0v2.75"></path>${NODE(12, 15.4, 1.7)}`,
  // Domain report card: a clipboard with lines, the node closing the last line.
  report: `<rect x="5" y="4.5" width="14" height="16.5" rx="2.75"></rect><path d="M9 4.5V3.25h6V4.5"></path><path d="M8.75 10h6.5M8.75 13.5h6.5M8.75 17h3.5"></path>${NODE(15.5, 17, 1.7)}`,
  // Email check: an envelope, the node where the flap closes, like a seal.
  mail: `<rect x="3.5" y="5.5" width="17" height="13" rx="2.75"></rect><path d="M4.25 7l7.75 6 7.75-6"></path>${NODE(12, 13, 1.7)}`,
  check: `<path d="M5 12.5l4.5 4.5L19 7.5"></path>`,
  close: `<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"></path>`,
  back: `<path d="M19 12H5M11 6l-6 6 6 6"></path>`,
  // "Is this link safe?": two chain links, the node where they join.
  link: `<path d="M10.25 13.75a3.75 3.75 0 0 0 5.3 0l3-3a3.75 3.75 0 0 0-5.3-5.3l-1.25 1.25"></path><path d="M13.75 10.25a3.75 3.75 0 0 0-5.3 0l-3 3a3.75 3.75 0 0 0 5.3 5.3l1.25-1.25"></path>${NODE(12, 12, 1.5)}`,
  // "What does this mean?": the node is the i's dot.
  info: `<circle cx="12" cy="12" r="8.75"></circle><path d="M12 11v5.5"></path>${NODE(12, 7.75, 1.3)}`,
} as const;

export type IconName = keyof typeof ICONS;
