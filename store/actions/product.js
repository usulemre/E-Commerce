export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const deleteHandler = productId =>{
    return{type:DELETE_PRODUCT,pid:productId}
}