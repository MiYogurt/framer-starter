import commonjs from "rollup-plugin-commonjs";
import coffee from "rollup-plugin-coffee-script";
import typescript from "rollup-plugin-typescript";
import nodeResolve from "rollup-plugin-node-resolve";
import * as pkg from "./package.json";

export default [
  {
    input: "./app.coffee",
    output: {
      file: "static/app1.js",
      format: "iife"
    },
    plugins: [
      coffee(),
      nodeResolve({ extensions: [".js", ".coffee"] }),
      commonjs({ extensions: [".js", ".coffee"] })
    ]
  },
  {
    input: "./app.ts",
    output: {
      file: "static/app2.js",
      format: "iife"
    },
    plugins: [
      typescript(),
      nodeResolve({ extensions: [".js", ".ts"] }),
      commonjs({ extensions: [".js", ".ts"] })
    ]
  }
];
