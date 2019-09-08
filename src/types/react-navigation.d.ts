declare module 'react-navigation' {
  import { Routes } from '~/screens/routes';
  export * from 'react-navigation';
  export type RouteName = Routes;

  export namespace NavigationActions {
    function navigate<T>(options: {
      routeName: T;
      params?: NavigationParams;
      action?: NavigationNavigateAction;
      key?: string;
    }): NavigationNavigateAction;
  }

  export type TSRouteConfigMap = Partial<
    { [routeName in RouteName]: NavigationRouteConfig }
  >;

  export function createMaterialTopTabNavigator(
    routeConfigMap: TSRouteConfigMap,
    drawConfig?: TabNavigatorConfig
  ): NavigationContainer;
  export function createBottomTabNavigator(
    routeConfigMap: TSRouteConfigMap,
    drawConfig?: BottomTabNavigatorConfig
  ): NavigationContainer;

  export function createDrawerNavigator(
    routeConfigMap: TSRouteConfigMap,
    drawerConfig?: DrawerNavigatorConfig
  ): NavigationContainer;

  export function createSwitchNavigator(
    routeConfigMap: TSRouteConfigMap,
    switchConfig?: SwitchNavigatorConfig
  ): NavigationContainer;

  export function createStackNavigator(
    routeConfigMap: TSRouteConfigMap,
    stackConfig?: StackNavigatorConfig
  ): NavigationContainer;

  export interface NavigationScreenProp<S, P = NavigationParams> {
    navigate<T extends RouteName>(options: {
      routeName: T;
      params?: NavigationParams;
      action?: NavigationAction;
      key?: string;
    }): boolean;
    navigate<T extends RouteName>(
      routeNameOrOptions: T,
      params?: NavigationParams,
      action?: NavigationAction
    ): boolean;
  }
}
