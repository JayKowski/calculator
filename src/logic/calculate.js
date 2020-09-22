/* eslint-disable */

import operate from './operate';

const calculate = (calcObj, btnName) => {

  if (btnName === '+/-') {
    calcObj.total = (calcObj.total * -1).toString();
  } else {
    calcObj.total = operate(calcObj.total, calcObj.next, btnName);
  }
  return calcObj;
}

export default calculate;