import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Color from "../constants/Color";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from '../screens/shop/CartScreen';
const ProductsNavigator = createStackNavigator(
  {
    ProductsOverwiev: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart : CartScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTitleStyle:{
        fontFamily:'opan-sans-bold'
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(ProductsNavigator);
