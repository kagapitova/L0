import style from './delivery.style.css'
export function renderDeliveryBlock(){
	let result = `
<div class="delivery__main-header">Способ доставки <button class="delivery__reset-btn">Изменить</button></div>
<div class="delivery__main-container">
	<div class="delivery__info-block">
		<div class="delivery__headers">
			<div class="point__header">Пункт выдачи</div>
			<div class="delivery-cost__header">Стоимость доставки</div>
			<div class="date-delivery__header1">5—6 февраля</div>
			<div class="date-delivery__header2">7—8 февраля</div>
		</div>
		<div class="delivery__info">
			<div class="adress__container">
					<div class="adress">Бишкек, улица Ахматбека Суюмбаева, 12/1</div>
					<div class="working-hours"><img src="images/svg/star.svg" alt="star"><p style="padding-left: 4px;">4.99</p><p style="padding-left: 8px;">Ежедневно с 10 до 21</p></div>
			</div>
			<div class="cost__container">Бесплатно</div>
		  <div class="item-img__container1">
		    <img class='delivery__img' src='images/png/tshort.png' alt="tshort">
		    <img class='delivery__img' src='images/png/phonecase.png' alt="phonecase">
		    <div class="cart__item1 cart__item">184</div>
		    <img class='delivery__img' src='images/png/pencils.png' alt="pencils">
		    <div class="cart__item2 cart__item">2</div>
			</div>
			<div class="item-img__container2">
		    <img class='delivery__img' src='images/png/phonecase.png' alt="phonecase"><div class="cart__item3 cart__item">16</div>
			</div>
		</div>
	</div>
	<div class="delivery__note"><img src="images/svg/shipping.svg" alt="shipping"><p class="delivery__note-text">Обратная доставка товаров на склад при отказе —<p class="delivery__green-text">бесплатно</p><div class="note__tooltip">Если товары вам не подойдут, мы вернем их обратно на склад — это бесплатно</div></p></div>
</div>
`;
	
	const deliveryContainer = document.querySelector('.delivery__container');
	deliveryContainer.innerHTML = result
	
	const nofee = document.querySelector('.delivery__green-text');
	const tooltip = document.querySelector('.note__tooltip');

	nofee.addEventListener('mouseover',()=>{
			tooltip.classList.add('note__tooltip-open')
		})
	
		nofee.addEventListener('mouseout',()=>{
			tooltip.classList.remove('note__tooltip-open')
		})
}