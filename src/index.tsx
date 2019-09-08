import React from 'react';
import { AppState, AppStateStatus } from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { END } from 'redux-saga';
import Navigator from './navigation';
import { persistor, store } from './redux/store';

export default class App extends React.Component {
  public componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    // SplashScreen.hide();
  }
  public componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
    // analytics.close();
    store.dispatch(END);
  }
  public render = () => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
  private _handleAppStateChange = async (appState: AppStateStatus) => {
    if (appState === 'active') {
    }
  };
}
