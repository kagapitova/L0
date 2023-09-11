import styles from './recipient.style.css'
export function renderRecipientForm(){
	let result = `
	<div class="recipient__container">
	<h2 class="recipient__header">Получатель</h2>

<div class="recipient__form">
<div  class="recipient__form__two-items">
	<div class="recipient-first-name__container form-item">
		<input id="input-first-name" class="recipient__input" pattern="^[a-zA-Z]+$" placeholder=" " required="">
		<span class="first-name__label input__label">Имя</span>
		<span class="input-first-name__error error-text">Укажите имя</span>
	</div>
	<div class="recipient-last-name__container form-item">
		<input id="input-last-name" class="recipient__input" pattern="^[a-zA-Z]+$" placeholder=" " required="">
		<span class="last-name__label input__label">Фамилия</span>
		<span class="input-last-name__error error-text">Введите фамилию</span>
	</div>
</div>
<div  class="recipient__form__three-items">
<div class="recipient-email__container form-item">
		<input id="input-email" class="recipient__input" type="email" pattern="[^@\\s]+@[^@\\s]+\\.[^@\\s]+" placeholder=" " required="">
		<span class="input-email__label input__label">Электронная почта</span>
		<span class="input-email__error error-text">Проверьте адрес электронной почты</span>
  </div>
	  <div class="recipient-telephone__container form-item">
		  <input id="input-telephone" class="recipient__input" type="tel" placeholder=" " pattern="\\+[0-9] [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}" required="">
		  <span class="input-telephone__label input__label">Телефон</span>
		  <span class="input-telephone__error error-text">Формат: +9 999 999 99 99</span>
	  </div>
	  <div class="recipient-inn__container form-item">
	   <input id="recipient-inn" class="recipient__input" minlength="14" maxlength="14" pattern="^[0-9]+$" placeholder="" required="">
	   <span class="recipient-inn__label input__label">ИНН</span>
	   <span class="recipient-inn__helper">Для таможенного оформления</span>
	  </div>
</div>
	</div>
</div>
	`;
	
	const recPlace = document.querySelector('.recipient-info__container');
	recPlace.innerHTML = result;
}