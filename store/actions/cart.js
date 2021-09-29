export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";
export const addCart = (product) => {
  return { type: ADD_CART, product: product };
};

export const removeCart = (productId) => {
  return { type: DELETE_CART, pid: productId };
};
