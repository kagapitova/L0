import style from './popup.style.css'
export function renderDeliveryPopup(){
const result = `
<div class="popup__modal">
	<div class="delivery__main-header-popup">Способ доставки<img src="images/svg/close.svg" alt="close"></div>
	<div class="adress__togler">
		<button class="popup__btn active__btn">В пункт выдачи</button>
		<button class="popup__btn">Курьером</button>
	</div>
	<div class="popup-adress__container">
		<div class="popup-adress__header">Мои адреса</div>
		<div class="point-adress">
		<div class="adress__container-pop">
		<div style="display:flex;">
			<input type="radio" class="adress-radio__btn radio__input" id="adress_01" name="adress" checked="">
			<label for="adress_01" class="radio__label"></label>
			<div class="adress-description">
				<div class="adress">Бишкек, улица Ахматбека Суюмбаева, 12/1</div>
				<div class="working-hours"><img src="images/svg/star.svg" alt="star"><p style="padding-left: 2px;">4.99</p><p style="padding-left: 8px;">Ежедневно с 10 до 21</p></div>
			</div>
		</div>
			<img class="tag delete" src="images/svg/red.svg" alt="delete">
		</div>
		<div class="adress__container-pop">
		<div style="display:flex;">
				<input type="radio" class="adress-radio__btn radio__input" id="adress_02" name="adress" checked="">
				<label for="adress_02" class="radio__label"></label>
				<div class="adress-description">
					<div class="adress">Бишкек, улица Ахматбека Суюмбаева, 45</div>
					<div class="working-hours"><img src="images/svg/star.svg" alt="star"><p style="padding-left: 2px;">4.99</p><p style="padding-left: 8px;">Ежедневно с 10 до 21</p></div>
				</div>
		</div>
				<img class="tag delete" src="images/svg/red.svg" alt="delete">
		</div>
		<div class="adress__container-pop">
		<div style="display:flex;">
		<input type="radio" class="adress-radio__btn radio__input" id="adress_03" name="adress" checked="">
			<label for="adress_03" class="radio__label"></label>
				<div class="adress-description">
						<div class="adress">Бишкек, улица Ахунбаева Исы, 24</div>
						<div class="working-hours"><img src="images/svg/star.svg" alt="star"><p style="padding-left: 2px;">4.99</p><p style="padding-left: 8px;">Ежедневно с 10 до 21</p></div>
				</div>
		</div>
			<img class="tag delete" src="images/svg/red.svg" alt="delete">
		</div>
		</div>
		<div class="home-adress">
					<div class="adress__container-pop">
		<div style="display:flex;">
			<input type="radio" class="adress-radio__btn radio__input" id="adress_01" name="adress" checked="">
			<label for="adress_01" class="radio__label"></label>
			<div class="adress-description">
				<div class="adress">Бишкек, улица Ахматбека Суюмбаева, 12/1</div>
			</div>
		</div>
			<img class="tag delete" src="images/svg/red.svg" alt="delete">
		</div>
		<div class="adress__container-pop">
		<div style="display:flex;">
				<input type="radio" class="adress-radio__btn radio__input" id="adress_02" name="adress" checked="">
				<label for="adress_02" class="radio__label"></label>
				<div class="adress-description">
					<div class="adress">Бишкек, улица Ахматбека Суюмбаева, 45</div>
				</div>
		</div>
				<img class="tag delete" src="images/svg/red.svg" alt="delete">
		</div>
		<div class="adress__container-pop">
		<div style="display:flex;">
		<input type="radio" class="adress-radio__btn radio__input" id="adress_03" name="adress" checked="">
			<label for="adress_03" class="radio__label"></label>
				<div class="adress-description">
						<div class="adress">Бишкек, улица Ахунбаева Исы, 24</div>
				</div>
		</div>
			<img class="tag delete" src="images/svg/red.svg" alt="delete">
		</div>
		</div>
	</div>
	<button class="submit__adress">Выбрать</button>
</div>
`
	const popup = document.querySelector('.popup__container');
	popup.innerHTML = result;
}