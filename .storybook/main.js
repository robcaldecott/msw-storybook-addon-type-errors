const path = require("path");
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  addons: [
    "@storybook/preset-create-react-app",
    {
      name: "@storybook/addon-essentials",
      options: { backgrounds: false },
    },
    "storybook-dark-mode",
  ],
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
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
