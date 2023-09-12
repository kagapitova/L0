import styles from './paymants.style.css'
import { getBankCardById } from "../../components/popups/popupcards";
import { state } from "../../state";
export function renderPaymantBlock(){
	const bankCard = getBankCardById(state.bankCardId)
	let result = `
	<div class="paymants__container">
		<div class="paymants__header">
			<div class="delivery__main-header">Способ оплаты</div><button class="payment__reset-btn">Изменить</button>
		</div>
		<div class="bank-cart__info">
			<img src="${bankCard.img}" alt="cart">
			<div class="cart-number">${bankCard.number}</div>
			<div class="cart-expared-date">${bankCard.date}</div>
		</div>
		<div class="text__info">Спишем оплату с карты при получении</div>
	</div>
	`;
	const payments = document.querySelector('.payment__container');
	payments.innerHTML = result;
}
