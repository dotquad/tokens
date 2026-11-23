import { describe, expect, it } from "vitest";
import { colors, ICONS, tokensCss } from "../src";

describe("colors", () => {
  it("only redefines, for dark, colors that light defines", () => {
    for (const name of Object.keys(colors.dark)) expect(Object.keys(colors.light)).toContain(name);
  });

  it("keeps the one accent at Signal teal", () => {
    expect(colors.light.signal).toBe("#0f766e");
    expect(colors.dark.signal).toBe("#2dd4bf");
  });
});

describe("tokensCss", () => {
  const css = tokensCss();

  it("sets every light color on :root and every dark one under both dark selectors", () => {
    for (const [name, value] of Object.entries(colors.light))
      expect(css).toContain(`  --${name}: ${value};`);
    expect(css.match(/--paper: #0b1220;/g)).toHaveLength(2);
    expect(css).toContain(':root[data-theme="dark"] {');
    expect(css).toContain(
      '@media (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {',
    );
  });

  it("names the fonts and easings", () => {
    expect(css).toContain('--font-mono: "JetBrains Mono Variable"');
    expect(css).toContain("--ease: cubic-bezier(0.2, 0.8, 0.2, 1);");
  });
});

describe("ICONS", () => {
  it("has at most one signal node per icon", () => {
    for (const [name, svg] of Object.entries(ICONS))
      expect(svg.match(/class="node"/g)?.length ?? 0, name).toBeLessThanOrEqual(1);
  });

  it("holds only the extensions' icons, not the website's", () => {
    for (const name of ["trace", "rss", "github", "light", "frame"])
      expect(ICONS).not.toHaveProperty(name);
  });
});
