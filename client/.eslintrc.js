module.exports = {
  extends: [
    "wesbos",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard",
    "prettier/unicorn",
    "prettier/vue",
  ],
  rules: {
    "no-console": 4,
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: true,
        printWidth: 120,
        tabWidth: 4,
      },
    ],
  },
};
