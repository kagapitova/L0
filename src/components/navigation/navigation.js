import styles from './navigation.style.css'
import { state } from "../../state";
export function renderNavigation(){
	let navHTML = `
		<div class="menu">
			<button class="menu-close__btn">
				<img src="images/svg/close.svg" alt="close">
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
		<div class="burger-header__container">
			<button class="burger-logo__container">
					<div class="burger__container">
						<span class="burger__span"></span>
						<span class="burger__span"></span>
						<span class="burger__span"></span>
						</div>
			</button>
			<div class="logo__text">
				<p class="logo__container">ТОВАРЫ И ТОЧКА</p>
			</div>
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
	<div class="search__aside">
		<button class="search-close__btn">
				<img src="images/svg/close.svg" alt="close">
		</button>
		<input class="search-input__aside" type="text" placeholder="Я ищу...">
		<img class="search__img3" src="images/svg/Search.svg" alt="search">
	</div>
	<div class="profile-cart__container">
		<div class="profile__container">
      <img class="profile__img" src="images/svg/Exclude.svg" alt="profile">
      <p class="profile__text">Профиль</p>
		</div>
		<div class="cart-logo__container">
		  <img class="cart-logo__img" src="images/svg/Cart.svg" alt="cart">
      <p class="cart-logo__text">Корзина</p>
      <div class="cart__item">${state.cart.length}</div>
		</div>
	</div>
	`;
	const navigation = document.querySelector('nav');
	navigation.innerHTML = navHTML;
}

export function setMenuToggler(){
	const body = document.querySelector('body');
	const btn = document.querySelector('.burger__container');
	const menu = document.querySelector('.menu');
	const closer = document.querySelector('.menu-close__btn');
	const search = document.querySelector('.search-mini__btn');
	const searchAside = document.querySelector('.search__aside');
	const searchCloser = document.querySelector('.search-close__btn');
	
	btn.addEventListener('click', () => {
		console.log(btn)
		console.log('test click')
		menu.classList.toggle('is-open');
		body.setAttribute("style", "overflow: hidden");
	});
	closer.addEventListener('click', () => {
		menu.classList.remove('is-open')
		body.removeAttribute("style");
	});
	search.addEventListener('click', () => {
		searchAside.classList.toggle('is-open');
		body.setAttribute("style", "overflow: hidden");
	});
	searchCloser.addEventListener('click', () => {
		searchAside.classList.remove('is-open')
		body.removeAttribute("style");
	});
}

export function renderMobilNavbar() {
	const nav = `
	<div class="mobil__navigation">
		<div class="mobil-svg__navigation">
			<img class="mobil__svg" src="images/svg/Union.svg">
		</div>
		<div class="mobil-svg__navigation">
			<img class="mobil__svg" src="images/svg/catalog.svg">
		</div>
		<div class="mobil-svg__navigation cart-logo">
			<img class="mobil__svg" src="images/svg/cart2.svg">
			<div class="cart__item22">${state.cart.length}</div>
		</div>
		<div class="mobil-svg__navigation">
			<img class="mobil__svg" src="images/svg/favorites.svg">
		</div>
		<div class="mobil-svg__navigation">
			<img class="mobil__svg" src="images/svg/profile.svg">
		</div>
	</div>`;
	
	const mainCont = document.querySelector('.footer__mobile_nav');
	mainCont.innerHTML = nav;
}
