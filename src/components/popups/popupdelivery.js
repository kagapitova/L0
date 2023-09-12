import style from './popup.style.css'
import { state } from "../../state";
import { renderTotalBlock } from "../../components/total/total";
import { renderDeliveryBlock } from "../../components/delivery/delivery";
import { setModals } from "../../common/functions";

const addresses = [
	{
		id: 1,
		address: 'Бишкек, улица Ахматбека Суюмбаева, 12/1',
		rating: '4.99',
		workTime: 'Ежедневно с 10 до 21',
		deliveryDate: '5–8 фев',
		isHome: false
	},
	{
		id: 2,
		address: 'Бишкек, улица Ахматбека Суюмбаева, 45',
		rating: '4.99',
		workTime: 'Ежедневно с 10 до 21',
		deliveryDate: '5–8 фев',
		isHome: false
	},
	{
		id: 3,
		address: 'Бишкек, улица Ахунбаева Исы, 24',
		rating: '4.99',
		workTime: 'Ежедневно с 10 до 21',
		deliveryDate: '5–8 фев',
		isHome: false
	},
	{
		id: 4,
		address: 'Бишкек, улица Ахматбека Суюмбаева, 12/1',
		deliveryDate: '5–8 фев',
		isHome: true
	},
	{
		id: 5,
		address: 'Бишкек, улица Ахматбека Суюмбаева, 45',
		deliveryDate: '5–8 фев',
		isHome: true
	},
	{
		id: 6,
		address: 'Бишкек, улица Ахунбаева Исы, 25',
		deliveryDate: '5–8 фев',
		isHome: true
	}
];

export function getAddressById(id) {
	return addresses.filter(address => address.id === parseInt(id)).shift();
}

function getPickPointAddress(address) {
	const checked = state.addressId === address.id ? 'checked' : '';
	return `
	<div class="adress__container-pop">
		<div style="display:flex;">
			<input type="radio" class="adress-radio__btn radio__input" data-id="${address.id}" id="adress_0${address.id}" name="adress" ${checked}>
			<label for="adress_0${address.id}" class="radio__label"></label>
			<div class="adress-description">
				<div class="adress">${address.address}</div>
				<div class="working-hours"><img src="images/svg/star.svg" alt="star"><p style="padding-left: 2px;">${address.rating}</p><p style="padding-left: 8px;">${address.workTime}</p></div>
			</div>
		</div>
		<img class="tag delete" src="images/svg/red.svg" alt="delete">
	</div>
	`
}

function getHomeAddress(homeAddress) {
	const checked = state.addressId === homeAddress.id ? 'checked' : '';
	return `
	<div class="adress__container-pop">
		<div style="display:flex;">
			<input type="radio" class="adress-radio__btn radio__input" data-id="${homeAddress.id}" id="point_0${homeAddress.id}" name="adress" ${checked}>
			<label for="point_0${homeAddress.id}" class="radio__label"></label>
			<div class="adress-description">
				<div class="adress">${homeAddress.address}</div>
			</div>
		</div>
		<img class="tag delete" src="images/svg/red.svg" alt="delete">
	</div>
	`
}

export function renderDeliveryPopup() {
	let pickPointAddressesHtml = '';
	addresses.filter(address => !address.isHome).forEach(address => pickPointAddressesHtml += getPickPointAddress(address));
	let homeAddressesHtml = '';
	addresses.filter(address => address.isHome).forEach(address => homeAddressesHtml += getHomeAddress(address));
	const result = `
	<div class="popup__modal">
		<div>
			<div class="delivery__main-header-popup">Способ доставки<img class="delivery__main-closer" src="images/svg/close.svg" alt="close"></div>
			<div class="adress__togler">
				<button class="popup__btn-point  popup__btn active__btn">В пункт выдачи</button>
				<button class="popup__btn-adress popup__btn">Курьером</button>
			</div>
			<div class="popup-adress__header">Мои адреса</div>
		</div>
		<div class="popup-adress__container">
			<div class="point-adress  visible">
				${pickPointAddressesHtml}
			</div>
			<div class="home-adress">
				${homeAddressesHtml}
			</div>
		</div>
		<button class="submit__adress set_address">Выбрать</button>
	</div>
`
	const popup = document.querySelector('.popup__container');
	popup.innerHTML = result;
	
	const btnPoint = document.querySelector('.popup__btn-point');
	const btnAdress = document.querySelector('.popup__btn-adress');
	const pointBlock = document.querySelector('.point-adress');
	const adressBlock = document.querySelector('.home-adress');
	const setAddressBtn = document.querySelector('.set_address');
	
	btnPoint.addEventListener('click', ()=>{
		btnPoint.classList.add('active__btn')
		btnAdress.classList.remove('active__btn')
		pointBlock.style.setProperty("display",'flex');
		adressBlock.style.setProperty("display",'none');
	})
	
	btnAdress.addEventListener('click', ()=>{
		btnPoint.classList.remove('active__btn')
		btnAdress.classList.add('active__btn')
		pointBlock.style.setProperty("display",'none');
		adressBlock.style.setProperty("display",'flex');
	})
	
	setAddressBtn.addEventListener('click', () => {
		const addressesItems = document.getElementsByName('adress');
		addressesItems.forEach(address => {
			if (address.checked) {
				state.addressId = parseInt(address.dataset.id);
			}
		})
		const popupContainer = document.querySelector('.popup__container');
		popupContainer.classList.remove('popup__open');
		renderTotalBlock();
		renderDeliveryBlock();
		renderDeliveryPopup();
		setModals();
	})
}