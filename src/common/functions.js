export const renderPrice = (price) => {
    let result = ''
    let priceArr = price.toString().split('');
    let charCount = 0;
    priceArr.reverse().forEach(char => {
        result = char + result;
        charCount++;
        
        if (charCount === 3) {
            result = ' ' + result;
            charCount = 0;
        }
    })
    
    return result;
}

export function setModals(){
const resetBtn = document.querySelector('.delivery__reset-btn');
const resetPensil = document.querySelector('.total__delivery-reset-btn');
const resetBtncart = document.querySelector('.payment__reset-btn');
const resetPensilcart = document.querySelector('.total__cart-reset-btn');
const popupContainer = document.querySelector('.popup__container');
const popupContainerCart = document.querySelector('.popup__container-cart');
const closer = document.querySelector('.delivery__main-closer');
const closerCart = document.querySelector('.cart__main-closer')
const pointBlock = document.querySelector('.point-adress');

    
    closer.addEventListener('click', ()=>{
        popupContainer.classList.remove('popup__open');
    })
    
    closerCart.addEventListener('click', ()=>{
        popupContainerCart.style.removeProperty("display");
    })
    
    resetBtn.addEventListener('click',()=>{
        popupContainer.classList.add('popup__open');
        pointBlock.style.setProperty("display",'flex');
    
    })
    
    resetPensil.addEventListener('click',()=>{
        popupContainer.classList.add('popup__open');
        pointBlock.style.setProperty("display",'flex');
    
    })
    
    
    resetBtncart.addEventListener('click',()=>{
        popupContainerCart.style.setProperty("display",'flex');
    })
    
    resetPensilcart.addEventListener('click',()=>{
        popupContainerCart.style.setProperty("display",'flex');
    })


}