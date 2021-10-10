const path = require('path');

module.exports = {
  "stories": [
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true
        }
      }
    }
  ],
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  features: {
    postcss: false,
  },
}
