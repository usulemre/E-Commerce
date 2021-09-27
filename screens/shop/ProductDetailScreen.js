import React from "react";
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useSelector,useDispatch } from "react-redux";
import Color from "../../constants/Color.js";
import * as cart from '../../store/actions/cart'
const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProduct.find((prod) => prod.id === productId)
  );
  const distpatch = useDispatch()
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.action}>
        <Button color={Color.primary} title="Add Cart" onPress={() => {
          distpatch(cart.addCart(selectedProduct))
        }}/>
      </View>
      <Text style={styles.price}>{selectedProduct.price.toFixed(2)}TL</Text>
      <Text style={styles.descraption}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  action: {
    alignItems: "center",
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  descraption: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
});

ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
  };
};

export default ProductDetailScreen;
