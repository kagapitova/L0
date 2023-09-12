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