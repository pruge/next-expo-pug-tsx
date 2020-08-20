// @generated: @expo/next-adapter@2.1.9
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require('@expo/next-adapter');
const withPlugins = require('next-compose-plugins');
// const withTM = require('next-transpile-modules')([
//   // Add the name of your package here...
//   '@ui-kitten/components',
// ]);

const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        'babel-loader',
        {
          loader: 'webpack-preprocessor-pug-tsx',
          options: {
            start: ['gql`', '\\{`'],
          },
        },
      ],
    });
    return config;
  },
};

module.exports = withPlugins(
  [[withExpo, { projectRoot: __dirname }]],
  nextConfig,
);
