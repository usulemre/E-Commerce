import React from "react";
import { FlatList,Text } from "react-native";
import { useSelector } from "react-redux";
import HeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const OrdersScreen = (props) => {
  const OrderItem = useSelector((state) => state.order.orders);
  return (
    <FlatList
      data={OrderItem}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) =><Text>{itemData.item.totalAmount.toFixed(2)}</Text>}
    />
  );
};

OrdersScreen.navigationOptions = navData =>{
    return{
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
    }
}

export default OrdersScreen;
