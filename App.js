import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux'

import productsReducer from './store/reducers/product'
import ShopNavigation from './navigation/ShopNavigation';

const rootReducer = combineReducers({
  products : productsReducer,
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar hidden />
     <ShopNavigation />
    </Provider>
  );
}

