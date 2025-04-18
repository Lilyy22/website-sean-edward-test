import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import typescriptParser from "@typescript-eslint/parser"; // Import the parser directly

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for compatibility with .eslintrc-style configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Export the ESLint configuration
export default [
  ...compat.extends("next/core-web-vitals"), // Extend Next.js defaults
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Include all relevant file types
    languageOptions: {
      parser: typescriptParser, // Use the imported parser
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },
    plugins: {
      "@typescript-eslint": {}, // Define plugins as objects in flat config
    },
    rules: {
      // Add custom rules here if needed
    },
  },
];
