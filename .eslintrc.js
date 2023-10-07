module.exports = {
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "@nkzw",
    "plugin:react/recommended",
  ],
  plugins: ["unused-imports"],
  rules: {
    "object-curly-spacing": ["error", "always"],
    "react/destructuring-assignment": "off",
    "react/function-component-definition": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".tsx"] }],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-max-depth": ["off"],
    "react/jsx-newline": "off",
    "react/no-multi-comp": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "unused-imports/no-unused-imports": "error",
  }
}
