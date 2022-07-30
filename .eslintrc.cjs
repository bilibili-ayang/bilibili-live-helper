module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "vue-global-api", // 自动引入插件
    "plugin:vue/vue3-strongly-recommended",
    "standard",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    semi: [2, "always"],
    quotes: [2, "double"],
    "no-tabs": 0,
    camelcase: "off",
    "vue/multi-word-component-names": "off",
    "no-trailing-spaces ": "off",
    "comma-dangle": ["error", "always-multiline"],
  },
};
