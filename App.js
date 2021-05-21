import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import ApartmentScreen from "./src/screens/ApartmentsScreen/ApartmentScreen";
import Profile from "./src/screens/ProfileScreens/Profile";
import HolderProfile from "./src/screens/ProfileScreens/HolderProfile";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Apartment: ApartmentScreen,
    MyProfile: Profile,
    HolderProfile: HolderProfile
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerShown:false
    },
  }
);

export default createAppContainer(navigator);
