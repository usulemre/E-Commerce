import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import Color from "../constants/Color";
const ProductItem = (props) => {
  return (
    <View style={styles.product}>
      <View style={styles.imageContainer}>
        <Image style={styles.Image} source={{ uri: props.image }} />
      </View>
      <View style={styles.group}>
        <Text style={styles.Title}>{props.title}</Text>
        <Text style={styles.price}>{props.price}TL</Text>
      </View>
      <View style={styles.action}>
        <Button
          color={Color.primary}
          title="Add Detail"
          onPress={() => props.onViewDetail}
        />
        <Button
          color={Color.primary}
          title="Add to Cart"
          onPress={() => onAddToCart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    flexDirection: "column",
    justifyContent: "space-between",
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 10,
    elevation: 30,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  group: {
    alignItems: "center",
  },
  Title: {
    fontSize: 18,
    marginVertical: 3,
  },
  price: {
    fontSize: 16,
    marginVertical: 3,
    color: "#888",
  },
  action: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ProductItem;
