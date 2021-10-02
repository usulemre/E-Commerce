import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Color from "../constants/Color";
const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantitiy}>{props.quantity}</Text>
        <Text style={styles.mainText}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>{props.sum}</Text>
        {props.delete && (
        <TouchableOpacity style={styles.deleteButton} onPress={props.onDelete}>
          <Ionicons name="md-trash" size={23} color="red" />
        </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantitiy: {
    width: 25,
    height: 25,
    marginRight: 10,
    backgroundColor: Color.primary,
    borderRadius: 100,
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontFamily: "open-sans",
  },
  mainText: {
    fontFamily: "opan-sans-bold",
    fontSize: 18,
    maxWidth: 150,
  },
  deleteButton: {
    marginLeft: 10,
  }
});

export default CartItem;
