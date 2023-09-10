import styles from './paymants.style.css'
export function renderPaymantBlock(){
	let result = `
<div class="paymants__container">
	<div class="paymants__header">
		<div  class="delivery__main-header">Способ оплаты</div><button class="payment__reset-btn">Изменить</button>
	</div>
	<div class="bank-cart__info">
		<img src="images/svg/bankcard.svg" alt="cart">
		<div class="cart-number">1234 56•• •••• 1234</div>
		<div class="cart-expared-date">01/30</div>
	</div>
	<div class="text__info">Спишем оплату с карты при получении</div>
</div>
	`;
	const payments = document.querySelector('.payment__container');
	payments.innerHTML = result;
}
