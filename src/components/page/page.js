import styles from './page.style.css'
export function renderPage(){
	let pageHTML = `
<div class="main__container">
    <nav class="navigation"></nav>
    <section class="main">
	    <div class="cart__container">
	    		<div class="cart"></div>
	        <div class="no-product__container"></div>
	        <div class="info__container">
	            <div class="delivery__container"></div>
	            <div class="payment__container"></div>
	            <div class="recipient-info__container"></div>
	        </div>
			</div>
      <div class="total__container">
	         <div class="total__card"></div>
			</div>
		</section>
    <footer class="footer__container"></footer>
		<div class="footer__mobile_nav"></div>
</div>
`;
	const body = document.querySelector('body');
	body.innerHTML = pageHTML
}