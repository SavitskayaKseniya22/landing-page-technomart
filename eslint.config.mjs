import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import prettier from 'eslint-config-prettier/flat';

export default defineConfig(
  globalIgnores(['dist/**', 'node_modules/**']),
  {
    files: ['**/*.{js,mjs,ts}'],
    extends: [js.configs.recommended],
  },
  {
    files: ['**/*.ts'],
    extends: [tseslint.configs.recommended],
  },
  {
    files: ['src/**/*.{js,ts}'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['*.config.{ts,mjs}'],
    languageOptions: { globals: globals.node },
  },
  prettier
);
