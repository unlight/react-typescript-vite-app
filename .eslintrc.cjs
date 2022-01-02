module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:unicorn/recommended',
        'plugin:etc/recommended',
        'plugin:testing-library/dom',
        'plugin:testing-library/react',
        'plugin:prettier/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        project: 'tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: false,
    },
    plugins: [
        'react',
        'unicorn',
        '@typescript-eslint',
        'prettier',
        'simple-import-sort',
        'etc',
        'testing-library',
        '@kyleshevlin',
        'only-warn',
    ],
    ignorePatterns: ['@generated/**', '*.config.js', '.*rc.js'],
    settings: {
        react: {
            createClass: 'createReactClass', // Regex for Component Factory to use,
            // default to "createReactClass"
            pragma: 'React', // Pragma to use, default to "React"
            fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
            version: 'detect', // React version. "detect" automatically picks the version you have installed.
        },
    },
    rules: {
        // core
        'consistent-return': [1, { treatUndefinedAsUnspecified: true }],
        quotes: [1, 'single', { allowTemplateLiterals: true, avoidEscape: true }],
        semi: [1, 'always'],
        'max-lines': [1, { max: 300 }],
        'max-params': [1, { max: 5 }],
        'no-unneeded-ternary': [1],
        // unicorn
        'unicorn/prefer-spread': 0,
        'unicorn/catch-error-name': 0,
        'unicorn/prevent-abbreviations': [
            1,
            {
                replacements: {
                    args: false,
                    err: false,
                    prod: false,
                    ref: false,
                    params: false,
                },
            },
        ],
        'unicorn/filename-case': [
            1,
            {
                cases: {
                    kebabCase: true,
                    pascalCase: true,
                },
            },
        ],
        // simple-import-sort with recomended settings
        'simple-import-sort/imports': 1,
        'simple-import-sort/exports': 1,
        'sort-imports': 0,
        // typescript-eslint
        '@typescript-eslint/no-floating-promises': 1,
        '@typescript-eslint/no-unnecessary-condition': 1,
        // @kyleshevlin
        '@kyleshevlin/prefer-custom-hooks': 1,
    },
    overrides: [
        {
            files: ['*.spec.ts', '**/testing/**/*.ts'],
            rules: {
                'consistent-return': 0,
                'max-lines': 0,
                '@typescript-eslint/no-explicit-any': 0,
                '@typescript-eslint/no-floating-promises': 0,
                '@typescript-eslint/no-non-null-assertion': 0,
                '@typescript-eslint/camelcase': 0,
                'import/max-dependencies': 0,
            },
        },
    ],
};
