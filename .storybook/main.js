const path = require("path");
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  addons: ["@storybook/preset-create-react-app", "@storybook/addon-essentials"],
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
};
