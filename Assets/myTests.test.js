const capitalize = require('./capitalize');
const sum = require('./sum');
const reverseString = require('./reverse');
const calculator = require('./calculator');

test('Is first letter capitalized', () => {
  expect(capitalize('string')).toBe('String')
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('is string reversed', () => {
  expect(reverseString('string')).toBe('gnirts')
});

test('calculator', () => {
  expect(calculator.add(2, 2)).toEqual(4);
  expect(calculator.subtract(2, 1)).toEqual(1);
  expect(calculator.multiply(2, 2)).toEqual(4);
  expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
})
