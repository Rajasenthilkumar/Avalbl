module.exports = {
  extends: ["@commitlint/config-conventional"],
  ignores: [(commit) => commit && commit.startsWith("WIP")],
  rules: {
    "subject-case": [2, "always", "sentence-case"],
    "body-max-line-length": [0],
  },
};
