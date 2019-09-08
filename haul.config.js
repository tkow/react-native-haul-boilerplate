import * as path from 'path';
import { makeConfig, withPolyfills } from '@haul-bundler/preset-0.60';
import { smart } from 'webpack-merge'

var detoxFlg = process.env.APP_ENV === 'detox_tests';
var detoxExtension = detoxFlg ? ['.mock.behaviour.js'] : [];

export const webpackConfig = ({ config, env }) => {
  const { platform } = env;
  const addConfig = {
    // module: {
    //   rules: [
    //     {
    //       test: /\.jsx?$/,
    //       include: [
    //         path.join(__dirname, 'app/'),
    //       ],
    //       use: {
    //         loader: 'babel-loader',
    //         options: {
    //           presets: ['module:metro-react-native-babel-preset']
    //         }
    //       }
    //     },
    //     {
    //       test: /\.tsx?$/,
    //       include: [
    //         path.join(__dirname, 'app/'),
    //         path.join(__dirname, 'vender/ts_modules')
    //       ],
    //       use: [
    //         {
    //           loader: 'babel-loader',
    //           options: {
    //             presets: ['module:metro-react-native-babel-preset']
    //           }
    //         },
    //         {
    //           loader: 'ts-loader'
    //         }
    //       ]
    //     }
    //   ]
    // },
    resolve: {
      alias: {
        '~': path.join(__dirname, 'src/')
      },
      extensions: [
        `.${platform}.tsx`,
        `.${platform}.ts`,
        `.${platform}.jsx`,
        `.${platform}.js`,
        '.native.tsx',
        '.native.ts',
        '.native.jsx',
        '.native.js',
        ...detoxExtension,
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
      ]
    }
  };
  return smart(config,addConfig); 
  // config.resolve.extensions = config.resolve.extensions.concat(
  //   addConfig.resolve.extensions
  // );
  // config.resolve.alias = config.resolve.alias || {};
  // Object.keys(addConfig.resolve.alias).forEach(key => {
  //   config.resolve.alias[key] = addConfig.resolve.alias[key];
  // });
  // config.resolve.modules = config.resolve.modules
  //   ? config.resolve.modules.concat(addConfig.resolve.modules)
  //   : addConfig.resolve.modules;
  // config.module.rules = config.module.rules.concat(addConfig.module.rules);
  // config.resolveLoader = addConfig.resolveLoader;
};

export default makeConfig({
  bundles: {
    index: {
      entry: withPolyfills('./index.tsx'),
      transform: webpackConfig
    }
  }
});