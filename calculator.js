import { add } from './math.js';

function check(...operands) {
  for (const n of operands) {
    if (typeof n !== 'number' || Number.isNaN(n)) {
      throw new TypeError('Operands must be numbers');
    }
  }
}

export class Calculator {
  add(a, b) {
    check(a, b);
    return add(a, b);
  }

  subtract(a, b) {
    check(a, b);
    return a - b;
  }

  multiply(a, b) {
    check(a, b);
    return a * b;
  }

  divide(a, b) {
    check(a, b);
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}
