import React from "react";
import { FlatList, Button } from "react-native";
import ProductItem from "../../components/ProductItem";
import { useSelector } from "react-redux";
import HeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Color from "../../constants/Color";
import { useDispatch } from "react-redux";
import * as actionProduct from "../../store/actions/product";
const UserProductScreen = (props) => {
  const userProduct = useSelector((state) => state.products.userProduct);
  const distpach = useDispatch();

  const editProductHandler = (id) =>{
      props.navigation.navigate('userEdit',{
        productId : id
      })
  }

  return (
    <FlatList
      data={userProduct}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          title={itemData.item.title}
          price={itemData.item.price}
          image={itemData.item.imageUrl}
          onSelected={() => {editProductHandler(itemData.item.id)}}
        >
          <Button color={Color.primary} title="Edit" onPress={() => {editProductHandler(itemData.item.id)}} />
          <Button
            color={Color.primary}
            title="Delete"
            onPress={() => {
              distpach(actionProduct.deleteHandler(itemData.item.id));
            }}
          />
        </ProductItem>
      )}
    />
  );
};
UserProductScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "User Product",
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
    headerRight:(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={"add-circle"}
          onPress={() => {
            navData.navigation.navigate('userEdit');
          }}
        />
      </HeaderButtons>
    )
  };
};

export default UserProductScreen;
