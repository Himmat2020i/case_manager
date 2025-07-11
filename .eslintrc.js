module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/react",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "import", "unused-imports"],
  rules: {
    "react/react-in-jsx-scope": "off", // Not needed in React 17+
    "no-unused-vars": "warn",
    "unused-imports/no-unused-imports": "error",
    "react/prop-types": "off", // turn on if you use PropTypes
    "import/order": [
      "warn",
      {
        groups: [["builtin", "external", "internal"]],
        "newlines-between": "always"
      }
    ]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
