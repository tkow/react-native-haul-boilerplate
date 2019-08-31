const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  "verbose": true,
  "preset": "react-native",
  "moduleNameMapper": {
    "^~/(redux.*firestore.*)$": "<rootDir>/app/$1.native",
    "^~(.*)$": "<rootDir>/app$1",
  },
  "testMatch":null,
  "transform": {
    ...tsjPreset.transform,
    "^.+\\.jsx?$": '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "testPathIgnorePatterns": ["vender", "/node_modules/", "/react-native-i18n-ts/"],
  "moduleFileExtensions": [
    ".native.ts",
    ".native.tsx",
    ".ios.ts",
    ".ios.tsx",
    ".android.ts",
    ".android.tsx",
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "globals": {
    "ts-jest": {
      "babelConfig": true
    }
  },
  "setupFiles": [
  ],
  cacheDirectory: '.jest/cache',
}