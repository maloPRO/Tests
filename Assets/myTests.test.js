const capitalize = require('./capitalize');
const reverseString = require('./reverse');
const calculator = require('./calculator');
const arrayAnalyzer = require('./analyzer');

test('Is first letter capitalized', () => {
  expect(capitalize('string')).toBe('String');
  expect(capitalize('word')).toBe('Word');
  expect(capitalize('me')).toBe('Me');
})

test('is string reversed', () => {
  expect(reverseString('string')).toBe('gnirts');
  expect(reverseString('good')).toBe('doog');
  expect(reverseString('good day sir')).toBe('ris yad doog');
});

test('calculator', () => {
  expect(calculator.add(2, 2)).toEqual(4);
  expect(calculator.add(4, 1)).toEqual(5);

  expect(calculator.subtract(2, 1)).toEqual(1);
  expect(calculator.subtract(1, 3)).toEqual(-2);

  expect(calculator.multiply(2, 2)).toEqual(4);
  expect(calculator.multiply(1.5, 1.1)).toBeCloseTo(1.65);
  
  expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
  expect(calculator.divide(10, 3)).toBeCloseTo(3.33);
})

test('array analysis', () => {
  expect(arrayAnalyzer([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
  expect(arrayAnalyzer([2,1,6])).toEqual({average: 3, min: 1, max: 6, length: 3});
})