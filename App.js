import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import ShopNavigation from "./navigation/ShopNavigation";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./store/reducers/product";
import cartReducer from './store/reducers/cart'
import orderReducer from './store/reducers/order';
const rootReducer = combineReducers({
  products: productsReducer,
  cart : cartReducer,
  order:orderReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default function App() {
  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "opan-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <StatusBar hidden />
        <ShopNavigation />
      </Provider>
    );
  }
}
