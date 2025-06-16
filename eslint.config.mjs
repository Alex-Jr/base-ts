// @ts-check

import eslint from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default tseslint.config(
  globalIgnores(["out/*"]),
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  perfectionist.configs["recommended-natural"],
  eslintPluginPrettierRecommended,
);
