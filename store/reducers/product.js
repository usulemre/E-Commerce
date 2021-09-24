import PRODUCTS from '../../data/dummy-data.js'

const initialState = {
    availableProduct :PRODUCTS,
    userProduct : PRODUCTS.filter(prod => prod.ownerId === 'u1')
}

export default (state = initialState,action) => {
  return state
}