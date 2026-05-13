import typescriptEslintParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      "import": importPlugin,
    },
    settings: {
      "import/resolver": {
        "typescript": {
          "alwaysTryTypes": true,
          "project": "./tsconfig.json",
        },
      },
    },
    rules: {
      // Tus reglas aquí
    },
  },
];