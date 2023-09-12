import { getCartItem, state } from "../state";
import { findProductById } from "../components/itemcard/itemcard";
import { renderTotalBlock } from "../components/total/total";
import { renderCartAccordion } from "../components/accordion/accordion";
import { renderMobilNavbar, renderNavigation, setMenuToggler } from "../components/navigation/navigation";
import { setModals } from "../common/functions";
import { renderCartPopup } from "../components/popups/popupcards";
import { renderDeliveryPopup } from "../components/popups/popupdelivery";
import { renderPaymantBlock } from "../components/paymants/paymants";

export function addCartItem(product) {
    const cartItem = getCartItem(product.id)
    if (cartItem.count < product.quantity) {
        cartItem.count++;
        calculate();
    }
}

export function removeCartItem(product) {
    const cartItem = getCartItem(product.id)
    if (cartItem.count > 0) {
        cartItem.count--;
        calculate();
    }
}

export function changeCartItemCount(product, count) {
    const cartItem = getCartItem(product.id)
    cartItem.count = count > product.quantity ? product.quantity : count;
    if (cartItem.count < 0) {
        cartItem.count = 0;
    }
    calculate();
}

export function toggleCartItem(product) {
    let cartItem = getCartItem(product.id)
    if (cartItem === undefined) {
        cartItem = {id: product.id, count: 0, enabled: true};
        state.cart.push(cartItem);
    }
    cartItem.enabled = !cartItem.enabled;
    state.checkAll = state.cart.filter(cartItem => cartItem.enabled).length === state.cart.length;
    
    calculate();
}

export function calculate() {
    state.totalCount = 0;
    state.totalPriceNoSale = 0;
    state.totalSale = 0;
    state.cart.forEach(cartItem => {
        if (cartItem.enabled) {
            const product = findProductById(cartItem.id);
            state.totalCount += parseInt(cartItem.count);
            state.totalPriceNoSale += parseInt(product.price) * parseInt(cartItem.count);
            state.totalSale += (parseInt(product.sale) + parseInt(product.castomsale)) * parseInt(cartItem.count);
        }
    });
    state.totalPrice = state.totalPriceNoSale - state.totalSale;
    renderTotalBlock();
    renderCartAccordion();
    renderNavigation();
    renderMobilNavbar();
    renderDeliveryPopup();
    renderPaymantBlock();
    renderCartPopup();
    setModals();
    setMenuToggler();
}