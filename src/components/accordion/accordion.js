import style from './accordion.style.css'
import {itemArr, renderCartItem, renderUnCartItem} from "../itemcard/itemcard";
export function renderCartAccordion(){
const carthtml = renderCartItem(itemArr);
const cartUnhtml = renderUnCartItem(itemArr);
const accHTML = `
<div class="checkbox-accordion-cart__container">
		<label for="all__items" class="label-all-items__container checkbox style-a">
		  <input type="checkbox" id="all__items" name="all__items" checked/>
		  <div class="checkbox__checkmark"></div>
		  <div class="checkbox__body header-select-all">Выбрать все</div>
		</label>
	<button class="accordion"><img class="accordion__arrov" src="images/svg/arrov.svg" alt="arrov"></button>
</div>
<div class="accordion-cart__content">
	${carthtml}
</div>
<div class="checkbox-accordion-cart__container checkbox-accordion-cart__container-unabel">
		<label for="all__items" class="label-all-items__container checkbox style-a unable">
		  <div class="unable unable__accordion">Отсутствуют · 3 товара</div>
		</label>
	<button class="accordion-unable"><img class="accordion__arrov-unable" src="images/svg/arrov.svg" alt="arrov"></button>
</div>
<div class="accordion-cart__content-unable">
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
	accordionBtns.forEach((accordion) => {
		accordion.onclick = function () {
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
}