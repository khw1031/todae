// @ts-check

import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config({
  files: ["**/*.{ts,tsx,js,jsx}"],
  plugins: {
    react,
    "react-hooks": reactHooks,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    ...react.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
});
