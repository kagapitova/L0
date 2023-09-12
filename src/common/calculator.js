import { getCartItem, state } from "../state";
import { findProductById } from "../components/itemcard/itemcard";
import { renderTotalBlock } from "../components/total/total";
import { renderCartAccordion } from "../components/accordion/accordion";
import { renderNavigation } from "../components/navigation/navigation";

export function addCartItem(item) {
    let cartItem = getCartItem(item.id)
    if (cartItem === undefined) {
        cartItem = {id: item.id, count: 0};
        state.cart.push(cartItem);
    }
    
    if (cartItem.count < item.quantity) {
        cartItem.count++;
        calculate();
    }
}

export function removeCartItem(item) {
    let cartItem = getCartItem(item.id)
    if (cartItem === undefined) {
        cartItem = {id: item.id, count: 1};
        state.cart.push(cartItem);
    }
    
    if (cartItem.count > 0) {
        cartItem.count--;
        calculate();
    }
}

export function changeCartItemCount(item, count) {
    let cartItem = getCartItem(item.id)
    if (cartItem === undefined) {
        cartItem = {id: item.id, count: 0};
        state.cart.push(cartItem);
    }

    cartItem.count = count > item.quantity ? item.quantity : count;
    calculate();
}

export function calculate() {
    state.totalCount = 0;
    state.totalPriceNoSale = 0;
    state.totalSale = 0;
    state.cart.forEach(cartItem => {
        const product = findProductById(cartItem.id);
        state.totalCount += parseInt(cartItem.count);
        state.totalPriceNoSale += parseInt(product.price) * parseInt(cartItem.count);
        state.totalSale += (parseInt(product.sale) + parseInt(product.castomsale)) * parseInt(cartItem.count);
    });
    state.totalPrice = state.totalPriceNoSale - state.totalSale;
    renderTotalBlock();
    renderCartAccordion();
    renderNavigation();
}