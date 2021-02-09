import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings202599Navigator from '../features/Settings202599/navigator';
import Settings202584Navigator from '../features/Settings202584/navigator';
import NotificationList202583Navigator from '../features/NotificationList202583/navigator';
import Maps202582Navigator from '../features/Maps202582/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings202599: { screen: Settings202599Navigator },
Settings202584: { screen: Settings202584Navigator },
NotificationList202583: { screen: NotificationList202583Navigator },
Maps202582: { screen: Maps202582Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
