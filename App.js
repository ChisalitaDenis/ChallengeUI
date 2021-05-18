import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import ApartmentScreen from "./src/screens/ApartmentsScreen/ApartmentScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Apartment: ApartmentScreen
  },
  {
    initialRouteName: "Apartment",
    defaultNavigationOptions: {
      headerShown:false
    },
  }
);

export default createAppContainer(navigator);
