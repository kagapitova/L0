import style from './popup.style.css'
import { state } from "../../state";
import { renderPaymantBlock } from "../../components/paymants/paymants";
import { setModals } from "../../common/functions";
import { renderTotalBlock } from "../../components/total/total";

const bankCards = [
	{
		id: 1,
		img: 'images/svg/bankcard.svg',
		number: '1234 56•• •••• 1234',
		date: '01/27'
	},
	{
		id: 2,
		img: 'images/svg/visa.svg',
		number: '1234 56•• •••• 1235',
		date: '01/28'
	},
	{
		id: 3,
		img: 'images/svg/master.svg',
		number: '1234 56•• •••• 1236',
		date: '01/29'
	},
	{
		id: 4,
		img: 'images/svg/maestro.svg',
		number: '1234 56•• •••• 1237',
		date: '01/30'
	},
];

export function getBankCardById(id) {
	return bankCards.filter(card => card.id === parseInt(id)).shift();
}

function getBankCardHtml(bankCard) {
	const checked = state.bankCardId === bankCard.id ? 'checked' : '';
	return `
	<div class="popup-cart__container">
		<input type="radio" class="adress-radio__btn radio__input" data-id="${bankCard.id}" id="cart_0${bankCard.id}" name="bankCard" ${checked} >
		<label for="cart_0${bankCard.id}" class="radio__label"></label>
		<div class="cart-description">
			<img src="${bankCard.img}" alt="cart">
			<div class="cart-number__popup">${bankCard.number}</div>
		</div>
	</div>
	`
}

function setCardBtnListener() {
	const btn = document.querySelector('.submit__bankcard');
	btn.addEventListener('click', () => {
		const bankCards = document.getElementsByName('bankCard');
		bankCards.forEach(card => {
			if (card.checked) {
				state.bankCardId = parseInt(card.dataset.id);
			}
		})
		const popupContainerCart = document.querySelector('.popup__container-cart');
		popupContainerCart.style.removeProperty("display");
		renderTotalBlock();
		renderPaymantBlock();
		renderCartPopup();
		setModals();
	})
}
export function renderCartPopup() {
	let cards = '';
	bankCards.forEach(bankCard => cards += getBankCardHtml(bankCard));
	
	const result = `
	<div class="popup__modal-cart">
		<div>
			<div class="delivery__main-header-popup">Способ оплаты<img class="cart__main-closer" src="images/svg/close.svg" alt="close"></div>
			<div class="cart-number__container">
				${cards}
			</div>
		</div>
		<button class="submit__adress submit__bankcard">Выбрать</button>
	</div>
`
	const popup = document.querySelector('.popup__container-cart');
	popup.innerHTML = result;

	setCardBtnListener();
}