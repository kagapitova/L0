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

export function setModalAdress(){
const resetBtn = document.querySelector('.delivery__reset-btn');
const resetPensil = document.querySelector('.total__delivery-reset-btn');

const popupModal = document.querySelector('.popup__modal');
const popupContainer = document.querySelector('.popup__container');
const closer = document.querySelector('.delivery__main-closer');
const pointBlock = document.querySelector('.point-adress');

    
    closer.addEventListener('click', ()=>{
        popupContainer.classList.remove('popup__open');
    })
    
    resetBtn.addEventListener('click',()=>{
        popupContainer.classList.add('popup__open');
        pointBlock.style.setProperty("display",'flex');
    
    })
    
    resetPensil.addEventListener('click',()=>{
        popupContainer.classList.add('popup__open');
        pointBlock.style.setProperty("display",'flex');
    
    })


}