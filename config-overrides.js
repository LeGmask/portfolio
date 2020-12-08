const images = require("remark-images");
const emoji = require("remark-emoji");

const { getBabelLoader } = require("customize-cra");
module.exports = (config, env) => {
  const babelLoader = getBabelLoader(config);
  config.module.rules.map((rule) => {
    if (typeof rule.test !== "undefined" || typeof rule.oneOf === "undefined") {
      return rule;
    }

    rule.oneOf.unshift({
      test: /\.mdx$/,
      use: [
        {
          loader: babelLoader.loader,
          options: babelLoader.options,
        },
        {
          loader: "@mdx-js/loader",
          options: {
            remarkPlugins: [images, emoji],
          },
        },
      ],
    });

    return rule;
  });
  return config;
};
