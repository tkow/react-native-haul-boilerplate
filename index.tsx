import {AppRegistry} from 'react-native';
import App from './src/App';
import json from './app.json';

AppRegistry.registerComponent(json.appName, () => App);
