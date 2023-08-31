function renderNavigation(){
	let navHTML = `
 <div class="burger-logo__container">
	    <div class="burger__container">
	    	<img src="src/images/svg/Vector.svg" alt="burger">
			</div>
			<div>
			<p class="logo__container">ТОВАРЫ</p>
			<pre class="logo__container logo__container2">И ТОЧКА</pre>
			</div>
	</div>
	<div class="input__container">
			<input class="search__input" type="text" placeholder="Я ищу...">
			<img class="search__img" src="src/images/svg/Search.svg" alt="search">
	</div>
	<div class="profile-cart__container">
		<div class="profile__container">
      <img class="profile__img" src="src/images/svg/Exclude.svg" alt="profile">
      <p class="profile__text">Профиль</p>
		</div>
		<div class="cart__container">
		  <img class="cart__img" src="src/images/svg/Cart.svg" alt="cart">
      <p class="cart__text">Корзина</p>
      <div class="cart__item">3</div>
		</div>
	</div>
	`;
	const navigation = document.querySelector('nav');
	navigation.innerHTML = navHTML;
}