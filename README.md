# Summary

This repo make ReactNative project set up with haul and typescript and some handy libraries.

- eslint
- detox
- ts-jest
- react-navigation
- react-native-localize
- redux
- redux-persist
- redux-saga
- storybook (with react native web)

and so on. There is possibility to be more added. 

# how to run

```shell
# terminal 1
npx haul start 
# terminal 2
npx react-native (run-ios or run-android)
```
# test

## unit test

```shell
npx jest 
# or
yarn test
```

## e2e test

### prepared

```shell
brew tap wix/brew
brew install applesimutils
```

### run

```shell
npx detox build; 
npx detox text; 
```
