export const state = {
    totalPrice: 0,
    totalCount: 0,
    totalPriceNoSale: 0,
    totalSale: 0,
    cart: [
        {id: 1, count: 1, enabled: true},
        {id: 2, count: 1, enabled: true},
        {id: 3, count: 1, enabled: true},
    ],
    isAccordionOpen: false,
    isUnAccordionOpen: false,
    checkAll: true,
}

export const getCartItem = id => state.cart.filter(cartItem => cartItem.id === parseInt(id)).shift()