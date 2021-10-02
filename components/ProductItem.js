import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ProductItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelected} activeOpacity={0.8}>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image style={styles.Image} source={{ uri: props.image }} />
        </View>
        <View style={styles.group}>
          <Text style={styles.Title}>{props.title}</Text>
          <Text style={styles.price}>{props.price}TL</Text>
        </View>
        <View style={styles.action}>
         {props.children}
        </View>
      </View>
    </TouchableOpacity>
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
    fontFamily:'opan-sans-bold',
    fontSize: 18,
    marginVertical: 3,
  },
  price: {
    fontFamily:'open-sans',
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
