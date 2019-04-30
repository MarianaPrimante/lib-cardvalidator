const isNumberValid = (cardNum) => !isNaN(parseFloat(cardNum)) && isFinite(cardNum);

const sumNumbers = (cardNum) => {
  const dig = cardNum.toString().split("");
  const stringNumber = dig.map(num => parseInt(num));
  const indLuhn = stringNumber.map((num, ind) => ((ind % 2 === 0) === true) ? num * 2 : num);
  const sumNumber = indLuhn.map((num) => num > 9 ? (num % 10) + 1 : num);
  const sumTotal = sumNumber.reduce((accum, num) => accum += num);
  return sumTotal;
};

const cardValidator = (cardNum) => {
  const cardNumString = cardNum.toString();
  return (cardNumString.length === 16) && isNumberValid(cardNumString) && (sumNumbers(cardNum) % 10 === 0);
};

module.exports.cardValidator = cardValidator;