import tselint from "typescript-eslint";
import eslintJs from "./src/eslint.mjs";
import typescript from "./src/typescript.mjs";

export default tselint.config(eslintJs, typescript);
