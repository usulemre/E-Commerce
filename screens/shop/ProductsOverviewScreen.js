import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";

const ProductsOverviewScreen = (props) => {
  const product = useSelector((state) => state.products.availableProduct);
  return (
    <FlatList
      data={product}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          title={itemData.item.title}
          price={itemData.item.price}
          image={itemData.item.imageUrl}
          onViewDetail={() =>{}}
          onAddToCart={() =>{}}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: "All Product",
};

export default ProductsOverviewScreen;
