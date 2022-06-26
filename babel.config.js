module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          regenerator: true,
        },
      ],
      [
        "@babel/plugin-transform-react-jsx",
        {
          runtime: "automatic",
          importSource: "theme-ui",
          throwIfNamespace: false,
        },
      ],
    ],
    sourceType: "unambiguous",
  };
};
