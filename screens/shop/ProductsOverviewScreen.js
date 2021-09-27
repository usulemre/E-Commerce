import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/ProductItem";
import * as cart from "../../store/actions/cart";
import HeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
const ProductsOverviewScreen = (props) => {
  const product = useSelector((state) => state.products.availableProduct);
  const distpatch = useDispatch();
  return (
    <FlatList
      data={product}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          title={itemData.item.title}
          price={itemData.item.price.toFixed(2)}
          image={itemData.item.imageUrl}
          onViewDetail={() => {
            props.navigation.navigate("ProductDetail", {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            });
          }}
          onAddToCart={() => {
            distpatch(cart.addCart(itemData.item));
          }}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: "All Product",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="cart" iconName={"md-cart"} onPress={() => {}} />
    </HeaderButtons>
  ),
};

export default ProductsOverviewScreen;
