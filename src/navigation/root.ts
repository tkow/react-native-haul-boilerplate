import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Example from '../screens/Example';

const TopPage = createSwitchNavigator(
  {
    Example,
  },
  {
    initialRouteName: 'Example'
  }
);

export default createAppContainer(TopPage);
