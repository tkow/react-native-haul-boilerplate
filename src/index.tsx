import React from 'react';
import { AppState, AppStateStatus } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { END } from 'redux-saga';
import Navigator from '~/navigation';
// import { actions as cloudMessaging } from '~/redux/CloudMessaging';
// import * as analytics from './advertise';
import { persistor, store } from './redux/store';

export default class App extends React.Component {
  public componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    // analytics.initialize();
    // SplashScreen.hide();
    // store.dispatch(cloudMessaging.runNotification());
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
      // const badgeNumber = await firebase.notifications().getBadge();
      // if (badgeNumber > 0) {
      //   firebase.notifications().setBadge(0);
      // }
    }
  };
}
