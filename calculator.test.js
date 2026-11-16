import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Calculator } from './calculator.js';

const calc = new Calculator();

test('add sums two numbers', () => {
  assert.equal(calc.add(1, 2), 3);
});

test('subtract subtracts the second number from the first', () => {
  assert.equal(calc.subtract(5, 3), 2);
});

test('multiply multiplies two numbers', () => {
  assert.equal(calc.multiply(4, 3), 12);
});

test('divide divides the first number by the second', () => {
  assert.equal(calc.divide(10, 4), 2.5);
});

test('divide throws when dividing by zero', () => {
  assert.throws(() => calc.divide(1, 0), { name: 'Error', message: 'Cannot divide by zero' });
});
