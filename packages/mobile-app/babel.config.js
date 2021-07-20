module.exports = function (api) {
  api.cache(true)
  return {
    plugins: [
      'react-require',
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '~': './src',
          },
          extensions: ['.js', '.ts', '.tsx'],
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  }
}
