import { colors, easing, fonts } from "./tokens";

const decl = (vars: Record<string, string>, indent: string) =>
  Object.entries(vars)
    .map(([name, value]) => `${indent}--${name}: ${value};`)
    .join("\n");

/**
 * `tokens.css`: the tokens as custom properties on :root. Dark applies when the page
 * sets `data-theme="dark"` on <html>, or when the system is dark and the page hasn't
 * set `data-theme="light"`.
 */
export function tokensCss(): string {
  const dark = decl(colors.dark, "    ");
  return `/* Signal design tokens from @dotquad/tokens. Generated: edit src/tokens.ts, not this file. */
:root {
${decl(colors.light, "  ")}

  --font-display: ${fonts.display};
  --font-text: ${fonts.text};
  --font-mono: ${fonts.mono};
  --ease: ${easing.standard};
  --spring: ${easing.spring};

  color-scheme: light dark;
}

:root[data-theme="dark"] {
${decl(colors.dark, "  ")}
  color-scheme: dark;
}
:root[data-theme="light"] {
  color-scheme: light;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
${dark}
  }
}
`;
}
