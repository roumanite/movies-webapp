module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended" // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  "globals": {
    "process": true,
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "semi": "error",
    "quotes": ["error", "single"],
    "no-trailing-spaces": "error",
    "@typescript-eslint/camelcase": ["error", {properties: "never"}],
    "comma-dangle": ["error", "always-multiline"]
  },
};