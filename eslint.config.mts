import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: ['**/node_modules/**', '**/dist/**', '**/allure/**', '**/reports/**'],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
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
