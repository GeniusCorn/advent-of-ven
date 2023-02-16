module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    './.eslintrc-auto-import.json',
    'plugin:vue/vue3-recommender',
    'standard-with-typescript',
    'prettier'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        './.eslintrc-auto-import.json',
        'standard-with-typescript',
        'prettier'
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json'
      }
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: ['*.d.ts', '*.config.ts'],
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
