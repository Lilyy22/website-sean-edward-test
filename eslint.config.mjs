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
    files: ["**/*.ts", "**/*.tsx"], // Specify file patterns
    languageOptions: {
      parser: "@typescript-eslint/parser", // Use TypeScript parser
      ecmaVersion: "latest",
      sourceType: "module",
    },
    extends: ["next/core-web-vitals"], // Extend Next.js defaults
    rules: {
      // Add custom rules here if needed
    },
  },
];
