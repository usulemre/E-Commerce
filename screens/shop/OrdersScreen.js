import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import HeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import OrderItems from "../../components/OrderItems";
const OrdersScreen = (props) => {
  const OrderItem = useSelector((state) => state.order.orders);
  return (
    <FlatList
      data={OrderItem}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <OrderItems
          date={itemData.item.readableDate}
          amount={itemData.item.totalAmount}
          item = {itemData.item.item}
        />
      )}
    />
  );
};

OrdersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Order",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName={"md-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default OrdersScreen;
