module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
  },
  extends: "airbnb-base",
  globals: {
    __static: true,
  },
  plugins: ["html"],
  rules: {
    "global-require": 0,
    "import/no-unresolved": 0,
    "no-param-reassign": 0,
    "no-shadow": 0,
    "import/extensions": 0,
    "import/newline-after-import": 0,
    "no-multi-assign": 0,
    quotes: "off",
    "no-console": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "arrow-parens": "off",
    "comma-dangle": "off",
    "object-curly-newline": "off",
    "no-undef": "off",
    'eol-last':"off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
  },
};
