module.exports.cardValidator = cardValidator;

function numbersValidators(cardNum) {
  return !isNaN(parseFloat(cardNum)) && isFinite(cardNum);
}

function sumNumbers(cardNum){
const dig = cardNum.split('')
const stringNumber = dig.map(num => parseInt(num))
const indLuhn = stringNumber.map((num,ind) => ((ind%2 === 0) === true)? num*2:num)
const sumNumber = indLuhn.map((num) => num > 9 ? (num % 10) + 1 :num)
const sumTotal = sumNumber.reduce((accum,num) => accum += num)
return sumTotal
}

function cardValidator(cardNum){
if(numbersValidators(cardNum) === false || cardNum.length !== 16){
return false
}if(sumNumbers(cardNum)%10 === 0){
return true
}
}