const createExpoWebpackConfigAsync = require('@expo/webpack-config');

// Expo CLI will await this method so you can optionally return a promise.
module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

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

  // Finally return the new config for the CLI to use.
  return config;
};
