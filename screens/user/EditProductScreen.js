import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import HeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
const EditProductScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const availbleProdct = useSelector((state) =>
    state.products.userProduct.find((prod) => prod.id === productId)
  );
  const [title, settitle] = useState(
    availbleProdct ? availbleProdct.title : ""
  );
  const [img, setimg] = useState(availbleProdct ? availbleProdct.imageUrl : "");
  const [price, setprice] = useState(
    availbleProdct ? availbleProdct.price : ""
  );
  const [descraption, setdescraption] = useState(
    availbleProdct ? availbleProdct.description : ""
  );

  const submitHandler = useCallback(() => {
    console.log("submit");
  }, []);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => settitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={img}
            onChangeText={(text) => setimg(text)}
          />
        </View>
        {availbleProdct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={(text) => setprice(text)}
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Descraption</Text>
          <TextInput
            style={styles.input}
            value={descraption}
            onChangeText={(text) => setdescraption(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

EditProductScreen.navigationOptions = (navData) => {
  const submitFn = navData.navigation.getParam("submit");
  return {
    headerTitle: navData.navigation.getParam("productId")
      ? "Edit Product"
      : "Add Product",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Save" iconName={"md-checkmark"} onPress={submitFn} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: "100%",
  },
  label: {
    fontFamily: "opan-sans-bold",
    marginVertical: 8,
  },
  input: {
    marginHorizontal: 5,
    marginVertical: 5,
    borderColor: "#ccc",
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default EditProductScreen;
