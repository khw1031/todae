import tselint from "typescript-eslint";
import eslintJs from "@todae/eslint-configs";
import typescript from "@todae/eslint-configs/typescript";

export default tselint.config(eslintJs, typescript);
