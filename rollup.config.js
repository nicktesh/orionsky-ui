import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import { readFileSync } from "fs";

// Read package.json manually instead of importing it
const pkg = JSON.parse(readFileSync("./package.json", "utf8"));

const banner = `/*!
 * OrionSky UI v${pkg.version}
 * A modern, open-source CSS/JavaScript library inspired by constellations and cosmic themes.
 * ${pkg.homepage}
 * 
 * Copyright (c) ${new Date().getFullYear()} OrionSky UI Team
 * Licensed under MIT
 */`;

export default [
  // UMD build (for browsers)
  {
    input: "src/js/orionsky-ui.js",
    output: [
      {
        file: "dist/orionsky-ui.js",
        format: "umd",
        name: "OrionSky",
        banner,
      },
      {
        file: "dist/orionsky-ui.min.js",
        format: "umd",
        name: "OrionSky",
        plugins: [terser()],
        banner,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
    ],
  },

  // ESM build (for bundlers)
  {
    input: "src/js/orionsky-ui.js",
    output: {
      file: "dist/orionsky-ui.esm.js",
      format: "es",
      banner,
    },
    plugins: [resolve(), commonjs()],
  },
];
