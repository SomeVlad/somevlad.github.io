module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'jest/globals': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {

            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react', 'jest'
    ],
    'rules': {
        'indent': [
            'error',
            4,
            {
                "MemberExpression": 1,
                SwitchCase: 1,

            }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'consistent-return': 'error',
        'default-case': 'error',
        'no-undefined': 'error',
        'no-use-before-define': 'error',
        'array-bracket-newline': ['error', { 'multiline': true }],
        'array-bracket-spacing': ["error", "always", { "singleValue": false }],
        'block-spacing': "error",
        'brace-style': ["error", "stroustrup"],
        camelcase: "error",
        'comma-dangle': ["error", "always-multiline"],
        'comma-spacing': ["error", { "before": false, "after": true }],
        'comma-style': ["error", "last"],
        'computed-property-spacing': ["error", "never"],
        'eol-last': ["error", "always"],
        'func-call-spacing': ["error", "never"],
        'implicit-arrow-linebreak': ["error", "beside"],
        'jsx-quotes': ["error", "prefer-single"],
        'key-spacing': ["error", {
            "beforeColon": false,
            "afterColon": true,
            "mode": "strict",

        }],
        'keyword-spacing': ["error", { "before": true, 'after': true }],
        'no-multiple-empty-lines': ["error", { "max": 1 }],
        'no-negated-condition': "error",
        'no-nested-ternary': "error",
        'no-unneeded-ternary': "error",
        'no-whitespace-before-property': "error",
        'prefer-const': "error",
        'rest-spread-spacing': ["error", "never"],
        'template-curly-spacing': "error",
        'object-shorthand': "error",
        'no-var': "error",
        'no-useless-constructor': "error",
        'no-useless-computed-key': "error",
        'no-duplicate-imports': "error",
        'arrow-spacing': ["error", { "before": true, "after": true }],
        'arrow-parens': ["error", "as-needed"],
        'arrow-body-style': ["error", "as-needed"],
        'spaced-comment': ["error", "always"],
        'space-in-parens': ["error", "never"],
        'space-before-blocks': "error",
        'padding-line-between-statements': [
            "error",
            { blankLine: "always", prev: "*", next: "return" },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
            { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]}
        ],
        'object-curly-spacing': ["error", "always"],
        'nonblock-statement-body-position': ["error", "beside"]
    }
}