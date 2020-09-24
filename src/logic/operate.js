/* eslint-disable */
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let res = 0;
  if (operation === '+') {
    res = Big(numberOne + numberTwo).toString();
  } else if (operation === '-') {
    res = Big(numberOne - numberTwo).toString();
  } else if (operation === 'X') {
    res = Big(numberOne * numberTwo).toString();
  } else if (operation === '/') {
    res = Big(numberOne / numberTwo).toString();
  } else if (operation === '%') {
    res = Big((numberOne / numberTwo) * 100).toString();
  }
  return res;
};

export default operate;
