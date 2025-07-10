import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

const baseExtends = [
  js.configs.recommended,
  tseslint.configs.recommended,
];

const baseLanguageOptions = {
  ecmaVersion: 2020,
};

export default tseslint.config([
  globalIgnores(['dist', 'coverage', 'node_modules']),
  {
    files: ['client/**/*.{ts,tsx,js,jsx}'],
    rules: {},
    extends: [
      ...baseExtends,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ...baseLanguageOptions,
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    files: ['server/**/*.{ts,js}'],
    extends: [...baseExtends],
    languageOptions: {
      ...baseLanguageOptions,
      globals: globals.node,
    },
  },
]);
