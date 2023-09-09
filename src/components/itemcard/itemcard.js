import styles from './itemcard.style.css'
export const itemArr = [
	{
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
		adres: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение&nbsp;2, офис&nbsp;34'
	},
	{
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
		adres: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение&nbsp;2, офис&nbsp;34'
	},
	{
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
		adres: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение&nbsp;2, офис&nbsp;34'
	}
];

itemArr.forEach((item)=>{
	item.percentsale = (item.sale/item.price).toFixed(2)*100 + '%';
	item.percentcastomsale = (item.castomsale/item.price).toFixed(2)*100 +'%';
})

export function renderCartItem(arr){
	let result = ``;
	arr.forEach((item,index)=>{
		if(item.hasOwnProperty('color') && item.hasOwnProperty('size')){
			result += `
<div class="cart-item__container">
	<label for="item__${index}" class="label-cart-item__container checkbox style-a">
		  <input type="checkbox" id="item__${index}" name="item__${index}" checked/>
		  <div class="checkbox__checkmark item__checkmark"></div>
		  <div class="checkbox__checkmark-size">56</div>
		  <div class="checkbox__body cart-item__img main-img"><img src=${item.image} alt="${item.alt}"></div>
	</label>
	<div class="card-text__container">
		<p class="cart-item__header">${item.name}</p>
		<div class="item-size-color__container">
			<p class="item-color">Цвет: ${item.color}</p>
			<p class="item-size">Размер: ${item.size}</p>
		</div>
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
		<button class="btn-item__minus">−</button>
		<input  class="items-counter-input" type="text" min="1" max='${item.quantity}' value="1">
		<button class="btn-item__plus"> +</button>
	</div>
		<p class="available-quantity">Осталось ${item.quantity} шт.</p>
		<div class="item-tags">
			<img class="tag" src="images/svg/like.svg" alt="like" class="like">
			<img  class="tag" src="images/svg/red.svg" alt="delete" class="delete">
		</div>
	</div>
	<div class="price-block">
			<div class="item-act-price"><p >${item.price - item.sale - item.castomsale} <p class="item-act-price__currency">${item.currency}</p></p></div>
			<div class="item-price"><p >${item.price}<p class="item-price__currency">${item.currency}</p></p>
			</div>
			<div class="price-info__tooltip tooltip-sale__size">
	         <div class="tooltip-sale__text"><p>Скидка ${item.percentsale}</p><p class="info__header">- ${item.sale}</p></div>
           <div class="tooltip-sale__text"><p>Скидка ${item.percentcastomsale}</p><p class="info__header">- ${item.castomsale}</p></div>
		   	</div>
	</div>
</div>
		`} else if (item.hasOwnProperty('color') && !item.hasOwnProperty('size')){
			result += `
<div class="cart-item__container">
	<label for="item__${index}" class="label-cart-item__container checkbox style-a">
		  <input type="checkbox" id="item__${index}" name="item__${index}" checked/>
		  <div class="checkbox__checkmark item__checkmark"></div>
		  <div class="checkbox__body cart-item__img main-img"><img src=${item.image} alt="${item.alt}"></div>
	</label>
	<div class="card-text__container">
		<p class="cart-item__header">${item.name}</p>
		<div class="item-size-color__container">
			<p class="item-color">Цвет: ${item.color}</p>
		</div>
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
	<div class="card-settings__container second-setcontainer">
		<div class="items-counter">
		<button class="btn-item__minus">−</button>
		<input  class="items-counter-input" type="text" min="1" max='${item.quantity}' value="1">
		<button class="btn-item__plus"> +</button>
	</div>
		<div class="item-tags item-tags-pad">
			<img class="tag" src="images/svg/like.svg" alt="like" class="like">
			<img class="tag" src="images/svg/red.svg" alt="delete" class="delete">
		</div>
	</div>
	<div class="price-block">
			<div class="item-act-price"><p >${item.price - item.sale - item.castomsale} <p class="item-act-price__currency">${item.currency}</p></p></div>
			<div class="item-price">
				<p>
					${item.price}
					<p class="item-price__currency">${item.currency}</p>
				</p>
			</div>
			<div class="price-info__tooltip tooltip-sale__size">
	         <div class="tooltip-sale__text"><p>Скидка ${item.percentsale}</p><p class="info__header">- ${item.sale}</p></div>
           <div class="tooltip-sale__text"><p>Скидка ${item.percentcastomsale}</p><p class="info__header">- ${item.castomsale}</p></div>
		   	</div>
	</div>
</div>
		`} else if (!item.hasOwnProperty('color') && !item.hasOwnProperty('size')){
			result += `
<div class="cart-item__container">
	<label for="item__${index}" class="label-cart-item__container checkbox style-a">
		  <input type="checkbox" id="item__${index}" name="item__${index}" checked/>
		  <div class="checkbox__checkmark item__checkmark"></div>
		  <div class="checkbox__body cart-item__img main-img"><img src=${item.image} alt="${item.alt}"></div>
	</label>
	<div class="card-text__container">
		<p class="cart-item__header">${item.name}</p>
		<div class="item-stock item-stock-last">${item.stock}</div>
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
	<div class="card-settings__container last-setcontainer">
		<div class="items-counter">
		<button class="btn-item__minus">−</button>
		<input  class="items-counter-input" type="text" min="1"  max='${item.quantity}' value="1">
		<button class="btn-item__plus"> +</button>
		</div>
		<p class="available-quantity available-quantity-last">Осталось ${item.quantity} шт.</p>
		<div class="item-tags last-tags">
			<img class="tag" src="images/svg/like.svg" alt="like" class="like">
			<img class="tag" src="images/svg/red.svg" alt="delete" class="delete">
		</div>
	</div>
	<div class="price-block">
			<div class="item-act-price"><p >${item.price - item.sale - item.castomsale} <p class="item-act-price__currency">${item.currency}</p></p></div>
			<div class="item-price"><p >${item.price}<p class="item-price__currency">${item.currency}</p></p></div>
			<div class="price-info__tooltip tooltip-sale__size">
	         <div class="tooltip-sale__text"><p>Скидка ${item.percentsale}</p><p class="info__header">- ${item.sale}</p></div>
           <div class="tooltip-sale__text"><p>Скидка ${item.percentcastomsale}</p><p class="info__header">- ${item.castomsale}</p></div>
		   	</div>
	</div>
</div>
		`}
		
	})
	return result;
}

export function cardSetLictenner(){
	const like = document.querySelectorAll('.like');
	const settingsContainer = document.querySelectorAll('.card-settings__container');
	const provider = document.querySelectorAll('.item-provider');
	const price = document.querySelectorAll('.item-price');
	like.forEach(el=>{
		el.addEventListener('click',()=>{
				el.classList.toggle('like-red')
		})
	})
	settingsContainer.forEach(el=>{
		el.addEventListener('mouseover',()=>{
				el.querySelector('.item-tags').classList.add('item-tags-visible')
				el.querySelector('.available-quantity').classList.add('item-tags-visible')
			
		})
	})
	settingsContainer.forEach(el=>{
		el.addEventListener('mouseout',()=>{
			el.querySelector('.item-tags').classList.remove('item-tags-visible')
			el.querySelector('.available-quantity').classList.remove('item-tags-visible')
		})
	})
	provider.forEach(el=>{
		el.addEventListener('mouseover',()=>{
			el.querySelector('.provider-info__tooltip').classList.add('tooltip-open')
		})
	})
	provider.forEach(el=>{
		el.addEventListener('mouseout',()=>{
			el.querySelector('.provider-info__tooltip').classList.remove('tooltip-open')
		})
	})
	price.forEach(el=>{
		el.addEventListener('mouseover',()=>{
			const tooltip = el.nextElementSibling;
			tooltip.classList.add('tooltip-open')
		})
	})
	price.forEach(el=>{
		el.addEventListener('mouseout',()=>{
			const tooltip = el.nextElementSibling;
			tooltip.classList.remove('tooltip-open')
		})
	})
}


export function renderUnCartItem(arr){
		let result = ``;
	arr.forEach((item,index)=>{
		if(item.hasOwnProperty('color') && item.hasOwnProperty('size')){
			result += `
<div class="cart-item__container cart-item__container-unabel unabel-170">
	<div class="checkbox__body cart-item__img unable__img cart-item__img-unabel img-80"><img src=${item.image} alt="${item.alt}"></div>
	<div class="card-text__container card-text__container-unabel">
		<p class="cart-item__header cart-item__header-unabel">${item.name}</p>
		<div class="item-size-color__container">
			<p class="item-color">Цвет: ${item.color}</p>
			<p class="item-size">Размер: ${item.size}</p>
		</div>
	</div>
	<div class="card-settings__container card-settings__container-unabel flex-end">
	<div class="item-tags">
			<img src="images/svg/like.svg" alt="like" class="like">
			<img src="images/svg/red.svg" alt="delete" class="delete">
		</div>
	</div>
</div>
		`} else if (item.hasOwnProperty('color') && !item.hasOwnProperty('size')){
			result += `
<div class="cart-item__container cart-item__container-unabel unabel-170 unabel-marg">
	<div class="checkbox__body cart-item__img unable__img cart-item__img-unabel img-80"><img src=${item.image} alt="${item.alt}"></div>
	<div class="card-text__container card-text__container-unabel">
		<p class="cart-item__header cart-item__header-unabel">${item.name}</p>
		<div class="item-size-color__container">
			<p class="item-color">Цвет: ${item.color}</p>
		</div>
	</div>
	<div class="card-settings__container card-settings__container-unabel flex-end">
	<div class="item-tags">
			<img src="images/svg/like.svg" alt="like" class="like">
			<img src="images/svg/red.svg" alt="delete" class="delete">
		</div>
	</div>
</div>
		`} else if (!item.hasOwnProperty('color') && !item.hasOwnProperty('size')){
			result += `
<div class="cart-item__container cart-item__container-unabel unabel-170 unabel-marg2">
	<div class="checkbox__body cart-item__img unable__img cart-item__img-unabel img-80"><img src=${item.image} alt="${item.alt}"></div>
	<div class="pensil-sizes">56/54/52...</div>
	<div class="card-text__container card-text__container-unabel">
		<p class="cart-item__header cart-item__header-unabel">${item.name}</p>
	</div>
	<div class="card-settings__container card-settings__container-unabel flex-end">
	<div class="item-tags">
			<img src="images/svg/like.svg" alt="like" class="like">
			<img src="images/svg/red.svg" alt="delete" class="delete">
		</div>
	</div>
</div>
		`}
	})
return result
};