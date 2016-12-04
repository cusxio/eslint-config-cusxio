'use strict';

module.exports = {
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.json'],
            },
        },
        'import/extensions': ['node_modules'],
    },
    env: {
        node: true,
        es6: true,
    },
    plugins: ['import'],
    rules: {
        'import/export': 2,
        'import/default': 0,
        'import/extensions': [0, 'never'],
        'import/named': 0,
        'import/namespace': 0,
        'import/no-extraneous-dependencies': [
            0, {
                devDependencies: false,
            },
        ],
        'import/no-unresolved': [
            2, {
                commonjs: true,
            },
        ],
        'import/no-named-as-default': 2,
        'import/no-commonjs': 0,
        'import/no-amd': 0,
        'import/first': [2, 'absolute-first'],
        'import/no-duplicates': 2,
        'import/no-deprecated': 0,
        'import/no-namespace': 0,
        'import/no-named-as-default-member': 0,
        'import/no-nodejs-modules': 0,
        'import/order': [
            2, {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                ],
            },
        ],
        // Possible Errors
        'no-cond-assign': 2,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-empty': [
            2, {
                allowEmptyCatch: true,
            },
        ],
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': 0,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-obj-calls': 2,
        'no-prototype-builtins': 2,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-template-curly-in-string': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'no-unsafe-negation': 2,
        'use-isnan': 2,
        'valid-typeof': 2,

        // Best Practices
        'accessor-pairs': 2,
        'array-callback-return': 2,
        'block-scoped-var': 2,
        'class-methods-use-this': [
            2, {
                exceptMethods: [],
            },
        ],
        'complexity': 0,
        'consistent-return': 2,
        'curly': 2,
        'default-case': 2,
        'dot-notation': 2,
        'dot-location': [2, 'property'],
        'eqeqeq': 2,
        'guard-for-in': 2,
        'no-alert': 2,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-div-regex': 2,
        'no-else-return': 2,
        'no-empty-function': [
            2, {
                allow: ['arrowFunctions', 'functions', 'methods'],
            },
        ],
        'no-empty-pattern': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-label': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-global-assign': [
            2, {
                exceptions: [],
            },
        ],
        'no-implicit-coercion': 2,
        'no-implicit-globals': 2,
        'no-implied-eval': 2,
        'no-invalid-this': 0,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-magic-numbers': 0,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-octal-escape': 2,
        'no-octal': 2,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-restricted-properties': [
            2, {
                object: 'arguments',
                property: 'callee',
                message: 'arguments.callee is deprecated',
            }, {
                property: '__defineGetter__',
                message: 'Please use Object.defineProperty instead.',
            }, {
                property: '__defineSetter__',
                message: 'Please use Object.defineProperty instead.',
            },
        ],
        'no-return-assign': [2, 'except-parens'],
        'no-return-await': 2,
        'no-script-url': 2,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 2,
        'no-unused-expressions': [
            2, {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        'no-unused-labels': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-useless-escape': 2,
        'no-useless-return': 2,
        'no-void': 2,
        'no-warning-comments': 1,
        'no-with': 2,
        'radix': 2,
        'require-await': 2,
        'vars-on-top': 2,
        'wrap-iife': [2, 'inside'],
        'yoda': 2,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-restricted-globals': [2, 'event'],
        'no-shadow-restricted-names': 2,
        'no-undef-init': 2,
        'no-undef': [
            2, {
                typeof: true,
            },
        ],
        'no-unused-vars': 2,
        'no-use-before-define': [2, 'nofunc'],

        // Node.js and CommonJS
        'callback-return': 0,
        'global-require': 2,
        'handle-callback-err': 1,
        'no-mixed-requires': [
            2, {
                grouping: true,
                allowCall: true,
            },
        ],
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-env': 0,
        'no-process-exit': 0,
        'no-restricted-modules': [
            2,
            'domain',
            'freelist',
            'smalloc',
            'sys',
            'colors',
        ],
        'no-sync': 0,

        // Stylistic Issues
        'array-bracket-spacing': [2, 'never'],
        'block-spacing': [2, 'always'],
        'brace-style': [
            2,
            '1tbs', {
                allowSingleLine: false,
            },
        ],
        'camelcase': [
            2, {
                properties: 'never',
            },
        ],
        'comma-dangle': [2, 'always-multiline'],
        'comma-spacing': [
            2, {
                before: false,
                after: true,
            },
        ],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': 0,
        'eol-last': 2,
        'func-call-spacing': [
            2, 'never',
        ],
        'func-name-matching': [
            2,
            'always', {
                includeCommonJSModuleExports: false,
            },
        ],
        'func-names': 1,
        'func-style': [
            0, 'expression',
        ],
        'id-blacklist': 0,
        'id-length': 0,
        'id-match': 0,
        'indent': [
            2,
            4, {
                SwitchCase: 1,
            },
        ],
        'jsx-quotes': 2,
        'key-spacing': [
            2, {
                beforeColon: false,
                afterColon: true,
            },
        ],
        'keyword-spacing': 2,
        'line-comment-position': [
            0, {
                position: 'above',
                ignorePattern: '',
                applyDefaultPatterns: true,
            },
        ],
        'linebreak-style': [2, 'unix'],
        'lines-around-comment': 0,
        'lines-around-directive': [
            2, {
                before: 'always',
                after: 'always',
            },
        ],
        'max-depth': [0, 4],
        'max-len': [
            0,
            100,
            2, {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'max-lines': [
            0, {
                max: 300,
                skipBlankLines: true,
                skipComments: true,
            },
        ],
        'max-nested-callbacks': [1, 4],
        'new-cap': [
            2, {
                newIsCap: true,
                capIsNew: true,
            },
        ],
        'new-parens': 2,
        'newline-after-var': 0,
        'newline-before-return': 0,
        'newline-per-chained-call': [
            2, {
                ignoreChainWithDepth: 4,
            },
        ],
        'no-array-constructor': 2,
        'no-bitwise': 2,
        'no-continue': 2,
        'no-inline-comments': 0,
        'no-lonely-if': 2,
        'no-mixed-operators': [2, {
            groups: [
                ['+', '-', '*', '/', '%', '**'],
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||'],
                ['in', 'instanceof'],
            ],
            allowSamePrecedence: false,
        }],
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [
            2, {
                max: 1,
            },
        ],
        'no-nested-ternary': 1,
        'no-negated-condition': 2,
        'no-new-object': 2,
        'no-plusplus': 0,
        'no-restricted-syntax': [2, 'WithStatement'],
        'no-tabs': 2,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': [
            2, {
                allowAfterThis: false,
            },
        ],
        'no-unneeded-ternary': [
            2, {
                defaultAssignment: false,
            },
        ],
        'no-whitespace-before-property': 2,
        'object-curly-newline': 0,
        'object-curly-spacing': [2, 'always'],
        'object-property-newline': [
            2, {
                allowMultiplePropertiesPerLine: true,
            },
        ],
        'one-var-declaration-per-line': 2,
        'one-var': [2, 'never'],
        'operator-assignment': [2, 'always'],
        'operator-linebreak': [2, 'after'],
        'padded-blocks': [2, 'never'],
        'quote-props': [2, 'consistent-as-needed'],
        'quotes': [
            'error',
            'single', {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        'require-jsdoc': 0,
        'semi-spacing': [
            2, {
                before: false,
                after: true,
            },
        ],
        'semi': [2, 'always'],
        'sort-keys': [
            0,
            'asc', {
                caseSensitive: false,
                natural: true,
            },
        ],
        'sort-vars': 0,
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [
            2, {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': 2,
        'spaced-comment': [
            2,
            'always', {
                line: {
                    exceptions: ['-'],
                },
                block: {
                    markers: ['!'],
                    balanced: true,
                },
            },
        ],
        'unicode-bom': [2, 'never'],
        'wrap-regex': 0,

        // ES6
        'arrow-body-style': [
            2,
            'as-needed', {
                requireReturnForObjectLiteral: false,
            },
        ],
        'arrow-parens': [2, 'always'],
        'arrow-spacing': [
            2, {
                before: true,
                after: true,
            },
        ],
        'constructor-super': 2,
        'generator-star-spacing': [2, 'before'],
        'no-class-assign': 2,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-new-symbol': 2,
        'no-restricted-imports': 0,
        'no-this-before-super': 2,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-useless-rename': [
            2, {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false,
            },
        ],
        'no-var': 2,
        'object-shorthand': [
            2,
            'always', {
                ignoreConstructors: false,
                avoidQuotes: true,
            },
        ],
        'prefer-arrow-callback': [
            2, {
                allowNamedFunctions: false,
                allowUnboundThis: true,
            },
        ],
        'prefer-const': [
            2, {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],
        'prefer-numeric-literals': 2,
        'prefer-reflect': 0,
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        // https://github.com/eslint/eslint/issues/6572
        'prefer-template': 0,
        'require-yield': 2,
        'rest-spread-spacing': [
            2, 'never',
        ],
        'sort-imports': [
            0, {
                ignoreCase: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],
        'symbol-description': 2,
        'template-curly-spacing': 2,
        'yield-star-spacing': [2, 'after'],
    },
};
