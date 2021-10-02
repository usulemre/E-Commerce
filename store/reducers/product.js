import PRODUCTS from "../../data/dummy-data.js";
import { DELETE_PRODUCT } from "../actions/product.js";

const initialState = {
  availableProduct: PRODUCTS,
  userProduct: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        availableProduct: state.availableProduct.filter(
          (product) => product.id !== action.pid
        ),
        userProduct: state.userProduct.filter(
          (product) => product.id !== action.pid
        ),
      };
  }
  return state;
};
