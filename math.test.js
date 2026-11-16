import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add } from './math.js';

test('add sums two numbers', () => {
  assert.equal(add(1, 2), 3);
});
