import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import HeadComp from "./src/Components/HeadComp";
import ChipsComponents from "./src/Components/ChipsComponents";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
