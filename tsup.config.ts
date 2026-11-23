import { writeFileSync } from "node:fs";
import { defineConfig } from "tsup";
import { tokensCss } from "./src/css";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  target: "node18",
  // dist/tokens.css comes from the same values as the JS, so the two can't disagree.
  onSuccess: async () => {
    writeFileSync("dist/tokens.css", tokensCss());
  },
});
