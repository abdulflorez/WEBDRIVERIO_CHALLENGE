import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import * as wdioPlugin from 'eslint-plugin-wdio';

export default tseslint.config(
    {
        ignores: ['**/node_modules/**', '**/dist/**', '**/allure/**', '**/reports/**'],
        languageOptions: {
            globals: {
                browser: 'readonly',
                driver: 'readonly',
                $: 'readonly',
                $$: 'readonly',
            },
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            wdio: wdioPlugin,
        },
        rules: {
            ...wdioPlugin.configs.recommended.rules,
            'no-duplicate-imports': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'warn',
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            '@typescript-eslint/naming-convention': [
                'warn',
                {
                    selector: 'variableLike',
                    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                },
            ],
        },
    },
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
);
