const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

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
      '~/': "../"
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

  
  // // react-native を import している箇所を react-native-web に変換
  const webpackConfig = haulConfig({ platform: 'storybook' });

  webpackConfig.resolve.alias['react-native$'] = require.resolve(
    'react-native-web'
  );
  webpackConfig.plugins = [
    new webpack.DefinePlugin({
      __DEV__: false
    })
  ];
  return webpackMerge.smart(config, webpackConfig);
};
