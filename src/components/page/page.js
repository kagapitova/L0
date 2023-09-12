import styles from './page.style.css'
export function renderPage(){
	let pageHTML = `
<div class="main__container">
    <nav class="navigation"></nav>
    <section class="main">
	    <div class="cart__container">
	    <h2 class="cart__header">Корзина</h2>
	    		<div class="cart"></div>
	        <div class="no-product__container"></div>
            <div class="delivery__container"></div>
            <div class="payment__container"></div>
            <div class="recipient-info__container"></div>
			</div>
      <div class="total__container">
			</div>
			<div class="popup__container">
			</div>
			<div class="popup__container-cart">
			</div>
		</section>
    <footer class="footer__container"><div class="footer-copy">© 2022  ООО «Товары и точка»</div></footer>
		<div class="footer__mobile_nav"></div>
</div>
`;
	const body = document.querySelector('body');
	body.innerHTML = pageHTML
}