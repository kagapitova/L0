import styles from './total.style.css'
import { state } from "../../state";
import { renderPrice } from "../../common/functions";
import { checkFormInputs } from "../../components/recipient/recipient";
export function renderTotalBlock() {
	let result = `
<div class="total__card">
 	<div class="total__header">
 		<h2 class="total__header-h2">Итого</h2>
    <div class="total__header-sum">${renderPrice(state.totalPrice)} сом</div>
 	</div>
 	<div class="total__text">
 		<div class="total__text-amount to-text">
	    	<div class="total__text-amount-left">${renderPrice(state.totalCount)} товара</div>
	    	<div class="total__text-amount-right">${renderPrice(state.totalPriceNoSale)} сом</div>
		</div>
		<div class="total__text-sale to-text">
	    	<div class="total__text-sale-left">Скидка</div>
	    	<div class="total__text-sale-right">- ${renderPrice(state.totalSale)} сом</div>
		</div>
		<div class="total__text-delivery to-text">
	    	<div class="total__text-delivery-left">Доставка</div>
	    	<div class="total__text-delivery-right">Бесплатно</div>
		</div>
	</div>
 	<div class="total__delivery">
	  <div class="to-text">
	    <div class="total__delivery-header">Доставка в пункт выдачи</div>
	    <button class="total__delivery-reset-btn"><img src="images/svg/reset.svg" alt="reset"></button>
		</div>
		<div>
			<div class="total__delivery-adress">Бишкек, улица Ахматбека Суюмбаева, 12/1</div>
			<div class="total__delivery-date">5–8 фев</div>
			<div class="total__delivery-decline">
	       <div class="delivery__note-total"><img class="green-simbol" src="images/svg/shipping.svg" alt="shipping">
	       <p class="delivery__note-text-total">Обратная доставка товаров на&nbsp;склад при отказе&nbsp;—<a class="delivery__green-text-total">бесплатно</a>
	       </p><div class="note__tooltip-total">Если товары вам не подойдут, мы вернем их&nbsp;обратно на склад — это бесплатно</div>
	       <p></p>
	       </div>
		  </div>
		</div>
 	</div>
  <div class="total__payment">
   <div class="total__delivery-header" style="letter-spacing: -0.03em">Оплата картой <button class="total__cart-reset-btn"><img src="images/svg/reset.svg" alt="reset"></button></div>
   <div class="bank-cart__info-total">
		<img src="images/svg/bankcard.svg" alt="cart">
		<div class="cart-number">1234 56•• •••• 1234</div>
		</div>
		<div class="total__delivery-decline">
			<label for="total__items" class="label-total-items__container checkbox style-a total">
      <input type="checkbox" id="total__items" name="total__items" checked="">
	     <div class="checkbox__checkmark-total"></div>
	      <div class="checkbox__body-total header-pay-all">Списать оплату сразу</div>
	    </label>
	    <div class="total__pay-info">Спишем оплату с карты при получении</div>
  	</div>
  <button class="total__btn">Заказать</button>
  <div class="total__accept-info">
	  <img class="total__accept-img" src="images/svg/accept.svg" alt="accept">
	  <div class="total__accept">Соглашаюсь с правилами  <a class="total__accept" href="https://www.wildberries.ru/services/pravila-polzovaniya-torgovoy-ploshchadkoy">пользования торговой площадкой </a> и  <a class="total__accept" href="https://www.wildberries.ru/services/vozvrat-tovara">возврата</a></div>
	</div>
  </div>
	`;
	
	const totalContainer = document.querySelector('.total__container');
	totalContainer.innerHTML = result;
	
	const nofee = document.querySelector('.delivery__green-text-total');
	const tooltip = document.querySelector('.note__tooltip-total');
	
	nofee.addEventListener('mouseover',()=>{
		tooltip.classList.add('note__tooltip-open-total')
	})
	
	nofee.addEventListener('mouseout',()=>{
		tooltip.classList.remove('note__tooltip-open-total')
	})
	
	const orderBtn = document.querySelector('.total__btn');
	orderBtn.addEventListener('click', () => {
		checkFormInputs();
	})
}