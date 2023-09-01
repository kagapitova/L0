import styles from './navigation.style.css'
export function renderNavigation(){
	let navHTML = `
			<div class="menu">
				<button class="menu-close__btn">
					<img src="https://cdn-icons-png.flaticon.com/512/17/17047.png" alt="close">
				</button>
				<a href="https://www.wildberries.ru/catalog/zhenshchinam" class="menu__link">
		    	Женщинам
				</a>
				<a href="https://www.wildberries.ru/catalog/muzhchinam" class="menu__link">
		    	Мужчинам
				</a>
				<a href="https://www.wildberries.ru/catalog/detyam" class="menu__link">
		    	Детям
				</a>
				<a href="https://www.wildberries.ru/catalog/obuv" class="menu__link">
		    	Обувь
				</a>
				<a href="https://www.wildberries.ru/catalog/krasota" class="menu__link">
		    	Красота
				</a>
				<a href="https://www.wildberries.ru/catalog/dom-i-dacha" class="menu__link">
		    	Дом
				</a>
			</div>
		 <button class="burger-logo__container">
			    <div class="burger__container">
			    	<span class="burger__span"></span>
			    	<span class="burger__span"></span>
			    	<span class="burger__span"></span>
					</div>
			</button>
		<p class="logo-mini__text">ТОВАРЫ И ТОЧКА</p>
		<div class="logo__text">
			<p class="logo__container">ТОВАРЫ</p>
			<pre class="logo__container logo__container2">И ТОЧКА</pre>
		</div>
	<div class="input__container">
			<input class="search__input" type="text" placeholder="Я ищу...">
			<img class="search__img" src="images/svg/Search.svg" alt="search">
	</div>
	<div class="search-mini__container">
		<button class="search-mini__btn">
					<img class="search__img2" src="images/svg/Search.svg" alt="search">
		</button>
	</div>
	<div class="profile-cart__container">
		<div class="profile__container">
      <img class="profile__img" src="images/svg/Exclude.svg" alt="profile">
      <p class="profile__text">Профиль</p>
		</div>
		<div class="cart__container">
		  <img class="cart__img" src="images/svg/Cart.svg" alt="cart">
      <p class="cart__text">Корзина</p>
      <div class="cart__item">3</div>
		</div>
	</div>
	`;
	const navigation = document.querySelector('nav');
	navigation.innerHTML = navHTML;
}

export function setMenuToggler(){
	const btn = document.querySelector('.burger-logo__container')
	const menu = document.querySelector('.menu')
	const closer = document.querySelector('.menu-close__btn')
	
	btn.addEventListener('click', () => {
		menu.classList.toggle('is-open')
	})
	closer.addEventListener('click', () => {
		menu.classList.remove('is-open')
	})
}
