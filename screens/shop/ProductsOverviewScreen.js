import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";

const ProductsOverviewScreen = (props) => {
  const product = useSelector((state) => state.products.availableProduct);
  return (
    <FlatList
      data={product}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
    headerTitle :'All Product',
}

export default ProductsOverviewScreen;
