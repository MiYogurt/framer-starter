import commonjs from "rollup-plugin-commonjs";
import coffee from "rollup-plugin-coffee-script";
import nodeResolve from "rollup-plugin-node-resolve";
import * as pkg from "./package.json";

export default {
  input: pkg.main,
  output: {
    file: "static/app.js",
    format: "iife"
  },
  plugins: [
    coffee(),
    nodeResolve({ extensions: [".js", ".coffee"] }),
    commonjs({ extensions: [".js", ".coffee"] })
  ]
};
