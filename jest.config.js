const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  "verbose": true,
  "preset": "react-native",
  "moduleNameMapper": {
    "^~(.*)$": "<rootDir>/src$1",
  },
  "testMatch":null,
  "transform": {
    ...tsjPreset.transform,
    "^.+\\.jsx?$": '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "cacheDirectory": ".jest/cache",
  "testPathIgnorePatterns": ["<rootDir>/e2e/", "<rootDir>/node_modules/"],
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
      "babelConfig": true,
      "tsConfig": "tsconfig.jest.json"
    }
  },
  "setupFiles": [
  ],
  "cacheDirectory": '.jest/cache',
}