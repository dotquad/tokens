# @dotquad/tokens

Signal, Dotquad's design tokens, for Dotquad's browser extension (Chrome, Edge and Firefox), VS Code extension and Raycast extension: colors for light and dark, type, motion, radii and Dotquad's icons, so the extensions look like dotquad.app. It holds only what those extensions use.

## Install

```sh
npm install @dotquad/tokens
```

Not on npm yet: the first release is coming.

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

| Token                                                               | Use                                                               |
| ------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `--paper`, `--surface`, `--border`                                  | Page background, cards, every 1px border                          |
| `--text`, `--quiet`                                                 | Body text, secondary text                                         |
| `--signal`, `--signal-hover`, `--signal-tint`, `--signal-tint-text` | The one accent: links, good results, focus                        |
| `--flag`, `--flag-tint`                                             | Warnings: VPN, proxy, listed. There is no red                     |
| `--muted-bg`, `--hover-bg`                                          | Neutral fills and hover                                           |
| `--button`, `--button-text`                                         | The primary button                                                |
| `--panel`, `--panel-code`, `--panel-border`                         | Dark code panels, dark in both themes                             |
| `--focus`, `--shadow`, `--ink`, `--ipm-node`                        | Focus ring, hover shadow, the brand's ink, the icons' signal node |
| `--font-display`, `--font-text`, `--font-mono`                      | Space Grotesk, Inter, JetBrains Mono                              |
| `--ease`, `--spring`                                                | Standard and overshoot easings                                    |

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

Most icons have one signal node (`class="node"`); fill it with `var(--ipm-node)`.

The icons are Dotquad brand artwork, not MIT licensed: they're here for Dotquad's own extensions. See [TRADEMARKS.md](TRADEMARKS.md).

## License

The code (token values, the CSS generator, build scripts) is MIT licensed. The Dotquad name, logo, app icons and the icon artwork in `ICONS` aren't: see [LICENSE](LICENSE) and [TRADEMARKS.md](TRADEMARKS.md).
