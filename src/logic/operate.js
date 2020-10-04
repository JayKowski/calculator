// eslint-disable-next-line import/no-extraneous-dependencies
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let res = 0;
  const fNum = Big(Number(numberOne));
  const sNum = Big(Number(numberTwo));

  if (operation === '+') {
    console.log();
    res = Big(fNum).plus(sNum).toString();
  } else if (operation === '-') {
    res = (fNum - sNum).toString();
  } else if (operation === 'X') {
    res = (fNum * sNum).toString();
  } else if (operation === '/') {
    if ((fNum === 0) || (sNum === 0)) {
      res = 'error. cannot divide by zero';
    } else {
      res = (fNum / sNum).toString();
    }
  } else if (operation === '%') {
    res = ((fNum / sNum) * 100).toString();
  }
  return res;
};

export default operate;
