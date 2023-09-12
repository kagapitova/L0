import style from './popup.style.css'
export function renderCartPopup(){
	const result = `
<div class="popup__modal-cart">
<div>
	<div class="delivery__main-header-popup">Способ оплаты<img class="cart__main-closer" src="images/svg/close.svg" alt="close"></div>
	<div class="cart-number__container">
	<div class="popup-cart__container">
			<input type="radio" class="adress-radio__btn radio__input" id="cart_01" name="cart" checked="">
			<label for="cart_01" class="radio__label"></label>
			<div class="cart-description">
				<img src="images/svg/bankcard.svg" alt="cart">
				<div class="cart-number__popup">1234 56•• •••• 1234</div>
			</div>
		</div>
	<div class="popup-cart__container">
			<input type="radio" class="adress-radio__btn radio__input" id="cart_02" name="cart" checked="">
			<label for="cart_02" class="radio__label"></label>
			<div class="cart-description">
				<img src="images/svg/visa.svg" alt="delete">
				<div class="cart-number__popup">1234 56•• •••• 1234</div>
			</div>
		</div>
	<div class="popup-cart__container">
			<input type="radio" class="adress-radio__btn radio__input" id="cart_03" name="cart" checked="">
			<label for="cart_03" class="radio__label"></label>
			<div class="cart-description">
				<img src="images/svg/master.svg" alt="delete">
				<div class="cart-number__popup">1234 56•• •••• 1234</div>
			</div>
		</div>
		<div class="popup-cart__container">
			<input type="radio" class="adress-radio__btn radio__input" id="cart_04" name="cart" checked="">
			<label for="cart_04" class="radio__label"></label>
			<div class="cart-description">
				<img src="images/svg/maestro.svg" alt="delete">
				<div class="cart-number__popup">1234 56•• •••• 1234</div>
			</div>
		</div>
		</div>
		</div>
		<button class="submit__adress">Выбрать</button>
		</div>
		</div>
`
	const popup = document.querySelector('.popup__container-cart');
	popup.innerHTML = result;
}