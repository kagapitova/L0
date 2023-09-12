import styles from './recipient.style.css'
export function renderRecipientForm(){
	let result = `
	<div class="recipient__container">
	<h2 class="recipient__header">Получатель</h2>

<div class="recipient__form">
<div  class="recipient__form__two-items">
	<div class="recipient-first-name__container form-item">
		<input id="input-first-name" class="recipient__input" placeholder=" " required="">
		<span class="first-name__label input__label">Имя</span>
		<span class="input-first-name__error error-text">Укажите имя</span>
	</div>
	<div class="recipient-last-name__container form-item">
		<input id="input-last-name" class="recipient__input" placeholder=" " required="">
		<span class="last-name__label input__label">Фамилия</span>
		<span class="input-last-name__error error-text">Введите фамилию</span>
	</div>
</div>
<div  class="recipient__form__three-items">
<div class="recipient-email__container form-item">
		<input id="input-email" class="recipient__input" type="text" placeholder=" " required="">
		<span class="input-email__label input__label">Электронная почта</span>
		<span class="input-email__error error-text">Проверьте адрес электронной почты</span>
  </div>
	  <div class="recipient-telephone__container form-item">
		  <input id="input-telephone" class="recipient__input" maxlength="16" type="text" placeholder=" " required="">
		  <span class="input-telephone__label input__label">Телефон</span>
		  <span class="input-telephone__error error-text">Формат: +9 999 999 99 99</span>
	  </div>
	  <div class="recipient-inn__container form-item">
		   <input id="recipient-inn" class="recipient__input" maxlength="14" placeholder="" required="">
		   <span class="recipient-inn__label input__label">ИНН</span>
		   <span class="recipient-inn__helper">Для таможенного оформления</span>
	  </div>
</div>
	</div>
</div>
	`;
	
	const recPlace = document.querySelector('.recipient-info__container');
	recPlace.innerHTML = result;

	setFieldsListeners();
}

export function setFieldsListeners() {
	const emailInput = document.querySelector('#input-email');
	emailInput.addEventListener('focusout', () => checkEmail());

	const innInput = document.querySelector('#recipient-inn');
	innInput.addEventListener('focusout', () => checkInn());

	const phoneInput = document.querySelector('#input-telephone');
	phoneInput.addEventListener('focusout', () => checkPhone());
	
	phoneInput.addEventListener('keyup', (event) => {
		if (event.key !== 'Backspace') {
			const matches = event.target.value.replace(/\D/g, '').match(/(\d)(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
			let result = `+${matches[1]}`
			for (let i = 2; i <= 5; i++) {
				if (matches[i].length > 0) {
					result += ' ' + matches[i];
				}
			}
			event.target.value = result;
		}
	});
}

export function checkPattern(value, errorEl, pattern, checkEmpty = false) {
	if (checkEmpty && value.trim().length === 0) {
		errorEl.classList.add('error-active');
		return false;
	}
	
	if (value.length === 0) {
		errorEl.classList.remove('error-active');
		return true;
	}

	const regex = new RegExp(pattern, 'g');
	if (!regex.test(value)) {
		errorEl.classList.add('error-active');
		return false;
	} 
	
	errorEl.classList.remove('error-active');
	return true;
}

function checkEmail(checkEmpty = false) {
	const emailInput = document.querySelector('#input-email');
	const emailError = document.querySelector('.input-email__error');
	checkPattern(emailInput.value, emailError, /[^@\s]+@[^@\s]+\.[^@\s]+/, checkEmpty)
}

function checkPhone(checkEmpty = false) {
	const phoneInput = document.querySelector('#input-telephone');
	const phoneError = document.querySelector('.input-telephone__error');
	checkPattern(phoneInput.value, phoneError, /\+[0-9] [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}/, checkEmpty)
}

function checkInn(checkEmpty = false) {
	const innInput = document.querySelector('#recipient-inn');
	const innError = document.querySelector('.recipient-inn__helper');
	innError.innerHTML = checkPattern(innInput.value, innError, /^\d{14}$/, checkEmpty)
		? 'Для таможенного оформления'
		: 'Проверьте ИНН'
}

function checkFullName(checkEmpty = false) {
	const nameInput = document.querySelector('#input-first-name');
	const nameError = document.querySelector('.input-first-name__error');
	checkPattern(nameInput.value, nameError, /^[a-zA-Zа-яА-Я ]+$/, checkEmpty)

	const familyInput = document.querySelector('#input-last-name');
	const familyError = document.querySelector('.input-last-name__error');
	checkPattern(familyInput.value, familyError, /^[a-zA-Zа-яА-Я ]+$/, checkEmpty)
}

export function checkFormInputs() {
	checkFullName(true);
	checkEmail(true);
	checkPhone(true);
	checkInn(true);
}