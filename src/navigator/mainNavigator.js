import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps175910Navigator from '../features/Maps175910/navigator';
import Additem175909Navigator from '../features/Additem175909/navigator';
import Maps175905Navigator from '../features/Maps175905/navigator';
import UserProfile175901Navigator from '../features/UserProfile175901/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps175910: { screen: Maps175910Navigator },
Additem175909: { screen: Additem175909Navigator },
Maps175905: { screen: Maps175905Navigator },
UserProfile175901: { screen: UserProfile175901Navigator },

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
