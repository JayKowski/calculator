import operate from './operate';

const calculate = ({ total, next, operation }, btnName) => {
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const ops = ['/', '+', '-', 'X', '%'];

  if (ops.includes(btnName)) {
    return { total: next, next: '', operation: btnName };
  }

  if (nums.includes(btnName)) {
    return {
      total,
      next: ((next && next.match(/[a-z]/i) ? '' : next) || '') + btnName,
      operation,
    };
  }

  switch (btnName) {
    case 'AC':
      return { total: '0', next: '0', operation: null };
    case '.':
      return {
        total,
        next: next.split('').includes('.') ? next : `${(next || 0).toString()}.`,
        operation,
      };
    case '+/-':
      return {
        total: (total * -1).toString(),
        next: (next * -1).toString(),
        operation,
      };
    case '=':
      return {
        total: '0',
        next: operate(Number(total), Number(next), operation),
        operation: null,
      };
    default:
      return { total, next, operation };
  }
};
export default calculate;
