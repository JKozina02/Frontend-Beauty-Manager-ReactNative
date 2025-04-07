module.exports = {
  extends: "expo",
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", { singleQuote: false }],
    "no-undef": "off",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
