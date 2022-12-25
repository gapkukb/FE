/* eslint-env node */
const deepmerge = require('deepmerge');
const plugin = require('tailwindcss/plugin');
// html根字体大小
const rootFontSize = 14;
/** @type {import('tailwindcss').Config} */
module.exports = function define(override, mergeOption) {
  return deepmerge(
    {
      content: ['./src/**/*.{tsx,vue,ts,jsx,js,html}'],
      plugins: [
        plugin(({ addBase }) => {
          addBase({
            html: {
              fontSize: rootFontSize,
            },
          });
        }),
      ],
      theme: {
        extend: {},
        spacing: {
          ...range(0, 66, 2, (i) => i + 'px'),
          xxs: '4px',
          xs: '8px',
          sm: '16px',
          md: '24px',
          lg: '32px',
          xl: '40px',
          xxl: '48px',
        },
        fontSize: {
          ...range(0, 12, 1, (i) => (i / rootFontSize).toFixed(3) + 'rem'),
          ...range(12, 66, 2, (i) => i + 'px'),
        },
      },
    },
    override,
    mergeOption
  );
};

function range(min, max, step, formater) {
  return Array.from({ length: Math.floor((max - min) / step) }, (_, i) => min + i * step).reduce(
    (acc, i) => ({
      ...acc,
      [i]: formater(i),
    }),
    {}
  );
}
