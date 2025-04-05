module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-empty": [2, "never"],
    "type-enum": [2, "always", ["ci", "feat", "init", "docs", "fix", "test", "refactor", "revert", "style"]],
  },
};
