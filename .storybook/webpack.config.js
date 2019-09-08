const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve("ts-loader")
      }
    ]
  });
  config.module.rules.push({
    test: /\.jsx?$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: ["module:metro-react-native-babel-preset"]
        }
      }
    ]
  });
  config.resolve = {
    ...config.resolve,
    alias: {
      '~/': path.join('../', 'app/'),
      'react-native$': 'react-native-web'
    },
    extensions: [
      ...config.resolve.extensions,
      `.storybook.tsx`,
      `.storybook.ts`,
      `.storybook.jsx`,
      `.storybook.js`,
      `.ios.tsx`,
      `.ios.ts`,
      `.ios.jsx`,
      `.ios.js`,
      `.android.tsx`,
      `.android.ts`,
      `.android.jsx`,
      `.android.js`,
      '.native.tsx',
      '.native.ts',
      '.native.jsx',
      '.native.js',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
    ]
  }
  config.plugins.push(
    new webpack.DefinePlugin({
      __DEV__: false
    })
  );
  return config;
};
