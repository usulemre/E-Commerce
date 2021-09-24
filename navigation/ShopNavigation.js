import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Color from "../constants/Color";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import { StatusBar } from 'expo-status-bar';
const ProductsNavigator = createStackNavigator(
  {
    ProductsOverwiev: ProductsOverviewScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Color.primary,
      },
      itemsContainerStyle: {
        marginTop:StatusBar.currentHeight
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(ProductsNavigator);
