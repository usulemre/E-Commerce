import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import Color from "../../constants/Color";
import CartItem from "../../components/CartItem";
import * as cart from '../../store/actions/cart';
import * as order from '../../store/actions/order';
const CartScreen = (props) => {
  const cartTotal = useSelector((state) => state.cart.totalAmount);
  const cartItem = useSelector((state) => {
    const transformedCart = [];
    for (const key in state.cart.items) {
      transformedCart.push({
        productId: key,
        productTitle: state.cart.items[key].title,
        productPrice: state.cart.items[key].price,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCart;
  });
  const distpach = useDispatch();
  return (
    <View style={styles.screen}>
      <View style={styles.Summary}>
        <Text style={styles.SummaryText}>
          Total : <Text style={styles.amount}>{Math.round(cartTotal.toFixed(2)) * 100 / 100}TL</Text>
        </Text>
        <Button
          title="Order now"
          disabled={cartItem.length === 0}
          color={Color.primary}
          onPress={() => {
            distpach(order.addOrder(cartItem,cartTotal))
          }}
        />
      </View>
      <FlatList
        data={cartItem}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <CartItem
            title={itemData.item.productTitle}
            quantity={itemData.item.quantity}
            price={itemData.item.productPrice}
            sum={itemData.item.sum}
            delete
            onDelete={() => {
              distpach(cart.removeCart(itemData.item.productId));
            }}
          /> 
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  Summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 10,
    elevation: 30,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 20,
    marginBottom: 10,
  },
  SummaryText: {
    fontFamily: "opan-sans-bold",
    fontSize: 18,
  },
  amount: {
    color: Color.primary,
  },
});

export default CartScreen;
