import styles from './itemcard.style.css'
import { addCartItem, calculate, changeCartItemCount, removeCartItem, toggleCartItem } from "../../common/calculator";
import { getCartItem, state } from "../../state";
export let itemArr = [
	{
		id: 1,
		image: 'images/png/tshort.png',
		alt: 'tshort',
		name: 'Футболка UZcotton мужская',
		color: 'белый',
		size: 56,
		stock: 'Коледино WB',
		provider: 'OOO Вайлдберриз',
		price: 1051,
		sale: 264.5,
		castomsale: 264.5,
		currency: ' сом',
		quantity: 2,
		tooltip: 'OOO «ВАЙЛДБЕРРИЗ»',
		ogrn: 'ОГРН: 5167746237148',
		adres: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение&nbsp;2, офис&nbsp;34',
		additionalClass: '',
		additionalSizeBox: '<div class="white-box size">56</div>'
	},
	{
		id: 2,
		image: 'images/png/phonecase.png',
		alt: 'phonecase',
		name: 'Силиконовый чехол картхолдер (отверстия)для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
		color: 'прозрачный',
		stock: 'Коледино WB',
		provider: 'OOO Мегапрофстиль',
		price: 11500,
		sale: 5250,
		castomsale: 5250,
		currency: ' сом',
		quantity: 200,
		tooltip: 'ООО «МЕГАПРОФСТИЛЬ»',
		ogrn: 'ОГРН: 5167746237148',
		adres: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение&nbsp;2, офис&nbsp;34',
		additionalClass: 'unabel-marg',
		additionalSizeBox: ''
	},
	{
		id: 3,
		image: 'images/png/pencils.png',
		alt: 'pencils',
		name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell ',
		stock: 'Коледино WB',
		provider: 'OOO Вайлдберриз',
		price: 950,
		sale: 352,
		castomsale: 352,
		currency: ' сом',
		quantity: 2,
		tooltip: 'OOO «ВАЙЛДБЕРРИЗ»',
		ogrn: 'ОГРН: 5167746237148',
		adres: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение&nbsp;2, офис&nbsp;34',
		additionalClass: 'unabel-marg2',
		additionalSizeBox: ''
	}
];

itemArr.forEach((item)=>{
	item.percentsale = (item.sale/item.price).toFixed(2)*100 + '%';
	item.percentcastomsale = (item.castomsale/item.price).toFixed(2)*100 +'%';
});

export const findProductById = id => itemArr.filter(item => item.id === parseInt(id)).shift();
function getCheckMarkSize(item) {
	if (item.hasOwnProperty('size')) {
		return `<div class="checkbox__checkmark-size">${item.size}</div>`
	}
	return '';
}

function getColorAndSize(item) {
	let colorHtml = '';
	let sizeHtml = '';
	if (item.hasOwnProperty('color') || item.hasOwnProperty('size')) {
		if (item.hasOwnProperty('color')) {
			colorHtml = `<p class="item-color">Цвет: ${item.color}</p>`;
		}
		if (item.hasOwnProperty('size')) {
			sizeHtml = `<p class="item-size">Размер: ${item.size}</p>`;
		}
		return `
			<div class="item-size-color__container">
				${colorHtml}
				${sizeHtml}
			</div>
		`
	}
	return '';
}

export function getCard(item, index) {
	const colorSizeHtml = getColorAndSize(item);
	const checkMarkSize = getCheckMarkSize(item);
	const cartItem = getCartItem(item.id)
	const checked = cartItem.enabled ? 'checked' : '';
	return `
<div class="cart-item__container">
	<label data-id="${item.id}" for="item__${index}" class="label-cart-item__container checkbox checkbox-product style-a">
		<input data-id="${item.id}" type="checkbox" id="item__${index}" name="item__${index}" ${checked}/>
		<div data-id="${item.id}" class="checkbox__checkmark item__checkmark"></div>
		${checkMarkSize}
		<div data-id="${item.id}" class="checkbox__body cart-item__img main-img"><img src=${item.image} alt="${item.alt}"></div>
	</label>
	<div class="card-text__container">
		<p class="cart-item__header">${item.name}</p>
		${colorSizeHtml}
		<div class="item-stock">${item.stock}</div>
		<div class="item-provider">
			${item.provider}
			<div class="provider-info" data-tooltip="${item.tooltip}">
			i
			 <div class="provider-info__tooltip tooltip-provider__size">
			   <div class="info__header">${item.tooltip}</div>
	         <div>${item.ogrn}</div>
	         <div>${item.adres}</div>
		   	</div>
		   </div>
		</div>
	</div>
	<div class="card-settings__container">
		<div class="items-counter">
			<button class="btn-item__minus" data-id="${item.id}">−</button>
			<input class="items-counter-input" data-id="${item.id}" type="text" min="1" max='${item.quantity}' value="${cartItem.count}">
			<button class="btn-item__plus" data-id="${item.id}">+</button>
		</div>
		<p class="available-quantity">Осталось ${item.quantity - cartItem.count} шт.</p>
		<div class="item-tags">
			<img class="tag" src="images/svg/like.svg" alt="like" class="like">
			<img class="tag delete" src="images/svg/red.svg" data-id="${item.id}" alt="delete">
		</div>
	</div>
	<div class="price-block">
		<div class="item-act-price">
			<p>${(item.price - item.sale - item.castomsale) * cartItem.count} <p class="item-act-price__currency">${item.currency}</p></p>
		</div>
		<div class="item-price">
			<p>${item.price * cartItem.count}<p class="item-price__currency">${item.currency}</p></p>
		</div>
		<div class="price-info__tooltip tooltip-sale__size">
			<div class="tooltip-sale__text">
				<p>Скидка ${item.percentsale}</p><p class="info__header">- ${item.sale * cartItem.count}</p>
			</div>
			<div class="tooltip-sale__text">
				<p>Скидка ${item.percentcastomsale}</p><p class="info__header">- ${item.castomsale * cartItem.count}</p>
			</div>
		</div>
	</div>
</div>
`
}

export function renderCartItem(arr){
	let result = ``;
	arr.forEach((item, index) => {
		result += getCard(item, index)
	});
	return result;
}

export function cardSetListenner(){
	const like = document.querySelectorAll('.like');
	const settingsContainer = document.querySelectorAll('.card-settings__container');
	const provider = document.querySelectorAll('.item-provider');
	const price = document.querySelectorAll('.item-price');
	const minusBtn = document.querySelectorAll('.btn-item__minus');
	const plusBtn = document.querySelectorAll('.btn-item__plus');
	const countInput = document.querySelectorAll('.items-counter-input');
	const deleteBtn = document.querySelectorAll('.delete');
	const checkBox = document.querySelectorAll('.checkbox-product');
	like.forEach(el => {
		el.addEventListener('click',()=>{
			el.classList.toggle('like-red')
		})
	})
	settingsContainer.forEach(el => {
		el.addEventListener('mouseover',()=>{
			el.querySelector('.item-tags').classList.add('item-tags-visible')
			el.querySelector('.available-quantity').classList.add('item-tags-visible')
		})
	})
	settingsContainer.forEach(el => {
		el.addEventListener('mouseout',()=>{
			el.querySelector('.item-tags').classList.remove('item-tags-visible')
			el.querySelector('.available-quantity').classList.remove('item-tags-visible')
		})
	})
	provider.forEach(el => {
		el.addEventListener('mouseover',()=>{
			el.querySelector('.provider-info__tooltip').classList.add('tooltip-open')
		})
	})
	provider.forEach(el => {
		el.addEventListener('mouseout',()=>{
			el.querySelector('.provider-info__tooltip').classList.remove('tooltip-open')
		})
	})
	price.forEach(el => {
		el.addEventListener('mouseover',()=>{
			const tooltip = el.nextElementSibling;
			tooltip.classList.add('tooltip-open')
		})
	})
	price.forEach(el => {
		el.addEventListener('mouseout',()=>{
			const tooltip = el.nextElementSibling;
			tooltip.classList.remove('tooltip-open')
		})
	})
	minusBtn.forEach(el => {
		el.addEventListener('click', (event) => {
			const product = findProductById(event.target.dataset.id)
			removeCartItem(product);
		})
	})
	plusBtn.forEach(el => {
		el.addEventListener('click', (event) => {
			const product = findProductById(event.target.dataset.id)
			addCartItem(product);
		})
	})
	countInput.forEach(el => {
		el.addEventListener('change', (event) => {
			const product = findProductById(event.target.dataset.id)
			changeCartItemCount(product, event.target.value);
		})
	})
	deleteBtn.forEach(el => {
		el.addEventListener('click', (event) => {
			const product = findProductById(event.target.dataset.id)
			removeProduct(product);
		})
	})
	checkBox.forEach(el => {
		el.addEventListener('click', (event) => {
			if (event.target.dataset !== undefined && event.target.dataset.id !== undefined) {
				const product = findProductById(event.target.dataset.id)
				toggleCartItem(product);
			}
		})
	})
}

export function getUnCard(item) {
	let sizes = '';
	const colorSizeHtml = getColorAndSize(item);
	
	if (!item.hasOwnProperty('size') && !item.hasOwnProperty('color')) {
		sizes = '<div class="pensil-sizes">56/54/52...</div><div class="white-box"></div>';
	}
	
	return `
	<div class="cart-item__container cart-item__container-unabel unabel-170 ${item.additionalClass}">
		<div class="checkbox__body cart-item__img unable__img cart-item__img-unabel img-80"><img src=${item.image} alt="${item.alt}"></div>
		${sizes}
		${item.additionalSizeBox}
		<div class="card-text__container card-text__container-unabel">
			<p class="cart-item__header cart-item__header-unabel">${item.name}</p>
			${colorSizeHtml}
		</div>
		<div class="card-settings__container card-settings__container-unabel flex-end">
			<div class="item-tags">
				<img src="images/svg/like.svg" alt="like" class="like">
				<img src="images/svg/red.svg" data-id="${item.id}" alt="delete" class="delete">
			</div>
		</div>
	</div>
`
}


export function renderUnCartItem(arr){
	let result = ``;
	arr.forEach((item) => {
		result += getUnCard(item)
	})
	return result
}

export function removeProduct(product) {
	state.cart = state.cart.filter(cartItem => cartItem.id !== product.id);
	itemArr = itemArr.filter(item => item.id !== product.id);
	calculate();
	console.log('zzz')
}