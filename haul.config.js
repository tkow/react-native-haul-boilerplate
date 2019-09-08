import * as path from 'path';
import { makeConfig, withPolyfills } from '@haul-bundler/preset-0.60';
import { smart } from 'webpack-merge'

var detoxFlg = process.env.APP_ENV === 'detox_tests';
var detoxExtension = detoxFlg ? ['.mock.behaviour.js'] : [];

export const webpackConfig = ({ config, env }) => {
  const { platform } = env;
  const addConfig = {
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
};

export default makeConfig({
  bundles: {
    index: {
      entry: withPolyfills('./index.tsx'),
      transform: webpackConfig
    }
  }
});
