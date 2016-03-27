'use strict';

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },
    env: {
        node: true,
        es6: true,
    },
    plugins: [
        'no-empty-blocks',
        'no-use-extend-native',
        'babel',
        'import-order',
    ],
    rules: {
        'no-empty-blocks/no-empty-blocks': [2, 'allowCatch'],
        'no-use-extend-native/no-use-extend-native': 2,
        'babel/object-curly-spacing': [2, 'always'],
        'babel/arrow-parens': [2, 'as-needed'],
        'babel/generator-star-spacing': [2, 'before'],
        'import-order/import-order': 2,
        'comma-dangle': [
            2,
            'always-multiline'
        ],
        'no-cond-assign': 2,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-unreachable': 2,
        'use-isnan': 2,
        'valid-typeof': 2,
        'no-unexpected-multiline': 2,
        'accessor-pairs': 2,
        'array-callback-return': 2,
        'block-scoped-var': 2,
        'curly': 2,
        'default-case': 2,
        'dot-notation': 2,
        'dot-location': [
            2,
            'property'
        ],
        'eqeqeq': 2,
        'guard-for-in': 2,
        'no-alert': 2,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-div-regex': 2,
        'no-else-return': 2,
        'no-empty-pattern': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-label': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-implicit-coercion': 2,
        'no-implicit-globals': 2,
        'no-implied-eval': 2,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-octal-escape': 2,
        'no-octal': 2,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-return-assign': [
            2,
            'always'
        ],
        'no-script-url': 2,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 2,
        'no-unused-expressions': [
            2, { 
                allowShortCircuit: true, 
                allowTernary: true 
            }
        ],
        'no-unused-labels': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-void': 2,
        'no-warning-comments': 1,
        'no-with': 2,
        'radix': 2,
        'wrap-iife': [
            2,
            'inside'
        ],
        'yoda': 2,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-restricted-globals': [
            2,
            'event'
        ],
        'no-shadow-restricted-names': 2,
        'no-undef-init': 2,
        'no-undef': [
            2, {
                typeof: true
            }
        ],
        'no-unused-vars': 2,
        'no-use-before-define': [
            2,
            'nofunc'
        ],
        'handle-callback-err': 1,
        'no-mixed-requires': [
            2, {
                grouping: true,
                allowCall: true
            }
        ],
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-restricted-imports': [
            2,
            'domain',
            'freelist',
            'smalloc',
            'sys',
            'colors'
        ],
        'no-restricted-modules': [
            2,
            'domain',
            'freelist',
            'smalloc',
            'sys',
            'colors'
        ],
        'array-bracket-spacing': [
            2,
            'never'
        ],
        'brace-style': [
            2,
            '1tbs', {
                'allowSingleLine': false
            }
        ],
        'camelcase': [
            2, {
                properties: 'never'
            }
        ],
        'comma-spacing': [
            2, {
                before: false,
                after: true
            }
        ],
        'comma-style': [
            2,
            'last'
        ],
        'computed-property-spacing': [
            2,
            'never'
        ],
        'eol-last': 2,
        'indent': [
            2,
            4, {
                SwitchCase: 1
            }
        ],
        'jsx-quotes': 2,
        'key-spacing': [
            2, {
                beforeColon: false,
                afterColon: true
            }
        ],
        'keyword-spacing': 2,
        'linebreak-style': [
            2,
            'unix'
        ],
        'max-nested-callbacks': [
            1,
            4
        ],
        'new-cap': [
            2, {
                newIsCap: true,
                capIsNew: true
            }
        ],
        'new-parens': 2,
        'no-array-constructor': 2,
        'no-lonely-if': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [
            2, {
                max: 1
            }
        ],
        'no-nested-ternary': 1,
        'no-negated-condition': 2,
        'no-new-object': 2,
        'no-restricted-syntax': [
            2,
            'WithStatement'
        ],
        'no-whitespace-before-property': 2,
        'no-spaced-func': 2,
        'no-trailing-spaces': 2,
        'no-unneeded-ternary': 2,
        'object-curly-spacing': 0,
        'one-var': [
            2,
            'never'
        ],
        'one-var-declaration-per-line': 2,
        'operator-assignment': [
            2,
            'always'
        ],
        'operator-linebreak': [
            2,
            'after'
        ],
        'padded-blocks': [
            2,
            'never'
        ],
        'quote-props': [
            2,
            'consistent-as-needed'
        ],
        'semi-spacing': [
            2, {
                before: false,
                after: true
            }
        ],
        'semi': [
            2,
            'always'
        ],
        'space-before-blocks': [
            2,
            'always'
        ],
        'space-before-function-paren': [
            2, {
                anonymous: 'always',
                named: 'never'
            }
        ],
        'space-in-parens': [
            2,
            'never'
        ],
        'space-infix-ops': 2,
        'space-unary-ops': 2,
        'spaced-comment': [
            2,
            'always', {
                markers: [
                    '!'
                ]
            }
        ],
        'arrow-parens': 0,
        'arrow-spacing': [
            2, {
                before: true,
                after: true
            }
        ],
        'constructor-super': 2,
        'generator-star-spacing': 0,
        'no-class-assign': 2,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-new-symbol': 2,
        'no-this-before-super': 2,
        'no-useless-constructor': 2,
        'template-curly-spacing': 2,
        'yield-star-spacing': [
            2,
            'both'
        ]
    }
};
