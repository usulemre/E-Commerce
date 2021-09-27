export const ADD_CART = 'ADD_CART';

export const addCart = product => {
    return{type:ADD_CART, product:product}
}