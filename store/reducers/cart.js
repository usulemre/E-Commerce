import Cart from "../../model/cart";
import { ADD_CART, DELETE_CART } from "../actions/cart";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const addProduct = action.product;
      const prodPrice = addProduct.price;
      const prodTitle = addProduct.title;
      let updatedOrNewCartItem;
      if (state.items[addProduct.id]) {
        updatedOrNewCartItem = new Cart(
          state.items[addProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addProduct.id].sum + prodPrice
        );
      } else {
        updatedOrNewCartItem = new Cart(1, prodPrice, prodTitle, prodPrice);
      }
      return {
        ...state,
        items: { ...state.items, [addProduct.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + prodPrice,
      };
      case DELETE_CART:
        const selectedCartItem = state.items[action.pid];
        const currentQty = selectedCartItem.quantity;
        let updateCart;
         if(currentQty > 1){
           const updateCartItem = new Cart(
            selectedCartItem.quantity - 1,
            selectedCartItem.price,
            selectedCartItem.title,
            selectedCartItem.img,
            selectedCartItem.sum - selectedCartItem.price
           );
           updateCart = {...state.items,[action.pid]:updateCartItem}
         }else{
          updateCart = {...state.items};
          delete updateCart[action.pid];
         }
        return{
          ...state,
          items:updateCart,
          totalAmount:state.totalAmount - selectedCartItem.price
        }
  }

  return state;
};
