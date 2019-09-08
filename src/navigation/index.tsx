import React, { Fragment } from 'react';
import {
  NavigationActions,
  NavigationContainerComponent,
  NavigationNavigateAction,
  NavigationParams,
  RouteName
} from 'react-navigation';
import RootNavigator from "./root";


interface AuthListenerProps {
  // loading: boolean | string;
  // listenAuthChange: typeof authActions['listenAuthChange'];
  // logout: typeof authActions['logout'];
}

export default class Navigator extends React.Component<AuthListenerProps> {
  private navigator: NavigationContainerComponent | null = null;
  public componentDidMount() {
  }
  public render = () => {
    return (
      <Fragment>
        <RootNavigator
          ref={nav => {
            this.navigator = nav;
          }}
        />
      </Fragment>
    );
  };
  private navigate = (options: {
    routeName: RouteName;
    params?: NavigationParams | undefined;
    action?: NavigationNavigateAction | undefined;
    key?: string | undefined;
  }) => {
    if (this.navigator) {
      this.navigator.dispatch(NavigationActions.navigate<RouteName>(options));
    }
  };
}