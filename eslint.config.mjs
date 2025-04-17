// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [...compat.extends("next/core-web-vitals")];

// export default eslintConfig;
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Include all relevant file types
    languageOptions: {
      parser: "@typescript-eslint/parser", // Use TypeScript parser for JSX support
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },
    plugins: ["@typescript-eslint"],
    extends: ["next/core-web-vitals"], // Extend Next.js defaults
    rules: {
      // Add custom rules here if needed
    },
  },
];
