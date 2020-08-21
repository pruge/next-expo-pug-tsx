const { getDefaultConfig } = require('metro-config');
const { setOptions } = require('webpack-preprocessor-pug-tsx');

setOptions({
  start: ['gql`'],
});

module.exports = (async () => {
  const {
    resolver: { sourceExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('webpack-preprocessor-pug-tsx'),
    },
    resolver: {
      sourceExts: [...sourceExts, 'tsx'],
    },
  };
})();
