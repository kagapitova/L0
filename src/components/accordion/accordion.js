import style from './accordion.style.css'
import {itemArr, renderCartItem, renderUnCartItem, cardSetListenner} from "../itemcard/itemcard";
import { state } from "../../state";
import { calculate } from "../../common/calculator";
export function renderCartAccordion() {
	const carthtml = renderCartItem(itemArr);
	const cartUnhtml = renderUnCartItem(itemArr);
	const accordionOpenClass = state.isAccordionOpen ? 'is-open' : '';
	const unAccordionOpenClass = state.isUnAccordionOpen ? 'is-open' : '';
	const checkAllState = state.checkAll ? 'checked' : '';
	const accHTML = `
	<div class="checkbox-accordion-cart__container">
		<label for="all__items" class="label-all-items__container checkbox checkbox-all style-a">
			<input type="checkbox" id="all__items" name="all__items" ${checkAllState}/>
			<div class="checkbox__checkmark check_all"></div>
			<div class="checkbox__body header-select-all">Выбрать все</div>
		</label>
		<button class="accordion"><img class="accordion__arrov" src="images/svg/arrov.svg" alt="arrov"></button>
	</div>
	<div class="accordion-cart__content ${accordionOpenClass}">
		${carthtml}
	</div>
	<div class="checkbox-accordion-cart__container checkbox-accordion-cart__container-unabel">
		<label for="all__items" class="label-all-items__container checkbox style-a unable">
			<div class="unable unable__accordion">Отсутствуют · ${state.cart.length} товара</div>
		</label>
		<button class="accordion-unable"><img class="accordion__arrov-unable" src="images/svg/arrov.svg" alt="arrov"></button>
	</div>
	<div class="accordion-cart__content-unable ${unAccordionOpenClass}">
		${cartUnhtml}
	</div>
`
	const cartAccPlace = document.querySelector('.cart');
	cartAccPlace.innerHTML = accHTML;
	const accordionBtns = document.querySelectorAll(".accordion");
	const accUnBtn = document.querySelectorAll('.accordion-unable');
	const accArrov = document.querySelector('.accordion__arrov');
	const accUnArrov = document.querySelector('.accordion__arrov-unable');
	const cartUnContent = document.querySelector('.accordion-cart__content-unable');
	const cartContent = document.querySelector('.accordion-cart__content');
	const checkAll = document.querySelector('.checkbox-all');
	accordionBtns.forEach((accordion) => {
		accordion.onclick = function () {
			state.isAccordionOpen = !state.isAccordionOpen
			cartContent.classList.toggle("is-open");
			accArrov.classList.toggle("accordion__arrov-open")
			let content = this.nextElementSibling;
			if (content.style.maxHeight) {
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
			}
		};
	});
	accUnBtn.forEach((accordion) => {
		accordion.onclick = function () {
			state.isUnAccordionOpen = !state.isUnAccordionOpen
			cartUnContent.classList.toggle("is-open");
			accUnArrov.classList.toggle("accordion__arrov-unable-open")
			let content = this.nextElementSibling;
			if (content.style.maxHeight) {
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
			}
		};
	});
	checkAll.addEventListener('click', (event) => {
		state.checkAll = !state.checkAll;
		state.cart.forEach(cartItem => cartItem.enabled = state.checkAll);
		calculate();
	})
	cardSetListenner();
}