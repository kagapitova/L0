import style from './accordion.style.css'
import {itemArr, renderCartItem} from "../itemcard/itemcard";
export function renderCartAccordion(){
const carthtml = renderCartItem(itemArr);
const accHTML = `
<div class="checkbox-accordion-cart__container">
		<label for="all__items" class="label-all-items__container checkbox style-a">
		  <input type="checkbox" id="all__items" name="all__items" checked/>
		  <div class="checkbox__checkmark"></div>
		  <div class="checkbox__body">Выбрать все</div>
		</label>
	<button class="accordion"><img class="accordion__arrov" src="images/svg/arrov.svg" alt="arrov"></button>
</div>
<div class="accordion-cart__content">
	${carthtml}
</div>
`
	const cartAccPlace = document.querySelector('.cart');
	cartAccPlace.innerHTML = accHTML;
	const accordionBtns = document.querySelectorAll(".accordion");
	const accArrov = document.querySelector('.accordion__arrov');
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
}