const noUnknown = [
    true,
    {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
    },
];

const baseExtends = ['stylelint-config-standard', 'stylelint-config-idiomatic-order'];

/** @type {import('stylelint').Config} */
module.exports = {
    ignoreFiles: ['/dist/**/*', '/node_modules/**/*', '**/*.{jsx,js,tsx,ts,json,md,yml,yaml}'],
    extends: baseExtends,
    plugins: ['stylelint-order'],
    overrides: [
        {
            files: ['**/*.styl', '**/*.vue'],
            extends: baseExtends.concat('stylelint-stylus/standard'),
            rules: {
                'stylus/at-rule-no-unknown': noUnknown,
            },
        },
        // 由于stylelint无法解析vue文件，使用postcss-html帮助stylelint识别vue文件里的style块
        {
            files: ['**/*.vue'],
            customSyntax: 'postcss-html',
        },
    ],
    rules: {
        'at-rule-no-unknown': noUnknown,
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep'],
            },
        ],
    },
};
