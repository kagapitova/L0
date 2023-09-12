export const state = {
    totalPrice: 0,
    totalCount: 0,
    totalPriceNoSale: 0,
    totalSale: 0,
    cart: [
        {id: 1, count: 1},
        {id: 2, count: 1},
        {id: 3, count: 1},
    ],
    isAccordionOpen: false,
    isUnAccordionOpen: false
}

export const getCartItem = id => state.cart.filter(cartItem => cartItem.id === parseInt(id)).shift()