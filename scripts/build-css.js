// Writes dist/tokens.css from the built tokens, so the CSS and the JS can't disagree.
import { writeFileSync } from "node:fs";
import { tokensCss } from "../dist/index.js";

writeFileSync(new URL("../dist/tokens.css", import.meta.url), tokensCss());
console.log("dist/tokens.css written");
