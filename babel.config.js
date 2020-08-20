// @generated: @expo/next-adapter@2.1.9
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps

module.exports = {
  presets: ['@expo/next-adapter/babel'],
  plugins: [
    'transform-react-pug',
    '@babel/transform-react-jsx',
    [
      'transform-jsx-classname-components',
      {
        objects: ['React'],
      },
    ],
  ],
};
