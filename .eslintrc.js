module.exports = {
  // parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   project: 'tsconfig.json',
  //   sourceType: 'module',
  // },
  plugins: [
    // '@typescript-eslint/eslint-plugin',
    'unused-imports',
    'import',
    'check-file',
    'unicorn',
  ],
  extends: [
    // '@leocode/eslint-config/node',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // indent: 'off',
    // 'unused-imports/no-unused-imports-ts': 'error',
    // 'no-multiple-empty-lines': ['error', {max: 2}],
    // 'import/newline-after-import': ['error', {count: 1}],
    // 'check-file/folder-naming-convention': [
    //   'error', {
    //     'src/!(__test__)/**/': 'KEBAB_CASE',
    //   }
    // ],
    // '@typescript-eslint/adjacent-overload-signatures': 'error',
    // '@typescript-eslint/array-type': [
    //   'error', {
    //     defaultOption: 'array',
    //   }
    // ],
    // '@typescript-eslint/await-thenable': 'error',
    // '@typescript-eslint/ban-types': [
    //   'warn', {
    //     types: {
    //       'Omit': 'Use Pick, or directly listing fields for type',
    //     }
    //   }
    // ],
    // '@typescript-eslint/consistent-generic-constructors': [
    //   'error',
    //   'constructor'
    // ],
    // '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    // '@typescript-eslint/no-duplicate-enum-values': 'error',
    // '@typescript-eslint/no-dynamic-delete': 'error',
    // '@typescript-eslint/no-misused-promises': 'error',
    // '@typescript-eslint/restrict-plus-operands': 'error',
    // '@typescript-eslint/unbound-method': [
    //   'error',
    //   {
    //     'ignoreStatic': true
    //   }
    // ],
    // '@typescript-eslint/no-array-constructor': 'error',
  },
};
