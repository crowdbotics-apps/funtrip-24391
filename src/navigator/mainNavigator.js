import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile202640Navigator from '../features/UserProfile202640/navigator';
import Maps202621Navigator from '../features/Maps202621/navigator';
import Settings202599Navigator from '../features/Settings202599/navigator';
import Settings202584Navigator from '../features/Settings202584/navigator';
import NotificationList202583Navigator from '../features/NotificationList202583/navigator';
import Maps202582Navigator from '../features/Maps202582/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile202640: { screen: UserProfile202640Navigator },
Maps202621: { screen: Maps202621Navigator },
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
