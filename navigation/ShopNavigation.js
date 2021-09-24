import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Color from "../constants/Color";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverwiev: ProductsOverviewScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(ProductsNavigator);
