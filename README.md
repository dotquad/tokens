# @dotquad/tokens

Signal, Dotquad's design tokens: colors for light and dark, type, motion, radii and the signal-node icons. Every Dotquad surface takes its look from here, so the website, the extensions and the apps match.

## Install

```sh
npm install @dotquad/tokens
```

Not on npm yet. Until the first release, install it from GitHub:

```sh
npm install github:dotquad/tokens
```

## CSS

```css
@import "@dotquad/tokens/tokens.css";

body {
  background: var(--paper);
  color: var(--text);
  font-family: var(--font-text);
}
a {
  color: var(--signal);
}
```

Dark applies when `<html>` has `data-theme="dark"`, or when the system is dark and the page hasn't set `data-theme="light"`. The colors keep their names in both themes; only the values change.

| Token                                                               | Use                                           |
| ------------------------------------------------------------------- | --------------------------------------------- |
| `--paper`, `--surface`, `--border`                                  | Page background, cards, every 1px border      |
| `--text`, `--quiet`, `--nav`                                        | Body text, secondary text, header links       |
| `--signal`, `--signal-hover`, `--signal-tint`, `--signal-tint-text` | The one accent: links, good results, focus    |
| `--flag`, `--flag-tint`                                             | Warnings: VPN, proxy, listed. There is no red |
| `--muted-bg`, `--hover-bg`                                          | Neutral fills and hover                       |
| `--button`, `--button-text`                                         | The primary button                            |
| `--panel`, `--panel-code`, `--panel-border`                         | Dark code panels, dark in both themes         |
| `--focus`, `--shadow`, `--map-*`                                    | Focus ring, hover shadow, maps                |
| `--font-display`, `--font-text`, `--font-mono`                      | Space Grotesk, Inter, JetBrains Mono          |
| `--ease`, `--spring`                                                | Standard and overshoot easings                |

The fonts are open source. Load them yourself; the tokens only name them.

## JavaScript

```ts
import { colors, fonts, motion, radius, ICONS } from "@dotquad/tokens";

colors.light.signal; // "#0f766e"
colors.dark.signal; // "#2dd4bf"
motion.copied; // 1600 (ms "Copied" shows)
radius.card; // 20

// Icons are the inner markup of a 24 × 24 SVG with a 1.75 stroke.
const svg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">${ICONS.search}</svg>`;
```

Each Dotquad icon has one signal node (`class="node"`); fill it with `var(--ipm-node)`. The marks of other companies (`github`, `youtube`, `reddit`, `instagram`) have none.

## License

MIT.
