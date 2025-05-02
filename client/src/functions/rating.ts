export const getRatingValue = (number:number) => {
    const wholePart = Math.floor(number)
    
    const fractionalPart = number - wholePart
    
    const resultArray = new Array(wholePart).fill(1)
    
    if(fractionalPart === 0.5) {
        resultArray.push(0.5)
    }
    
    return resultArray
}