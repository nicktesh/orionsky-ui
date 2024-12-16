import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/js/orionsky.js",
  output: {
    file: "dist/orionsky.min.js",
    format: "iife",
    name: "OrionSky",
  },
  plugins: [resolve(), terser()],
};
