

module.exports = {
    stories: ['../node_modules/storybook-addon-customize-antd-theme/dist/esm/stories/index.js'],
    addons: [
        'storybook-addon-customize-antd-theme'],
        "framework": "@storybook/react",
        "core": {
          "builder": "@storybook/builder-webpack5"
        }
  };