// eslint-disable-next-line import/no-extraneous-dependencies
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const fNum = Big(numberOne);
  const sNum = Big(numberTwo);

  let res = 0;
  if (operation === '+') {
    res = (fNum + sNum).toString();
  } else if (operation === '-') {
    res = (fNum - sNum).toString();
  } else if (operation === 'X') {
    res = (fNum * sNum).toString();
  } else if (operation === '/') {
    res = (fNum / sNum).toString();
  } else if (operation === '%') {
    res = ((fNum / sNum) * 100).toString();
  }
  return res;
};

export default operate;
