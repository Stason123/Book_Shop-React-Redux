export const addToCart = obj => ({
    type: 'ADD_CART',
    payload: obj
});

export const removeFromCart = id => ({
    type: 'REMOVE_FROM_CART',
    payload: id
});