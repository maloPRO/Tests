const capitalize = require('./capitalize');
const sum = require('./sum');
const reverseString = require('./reverse');

test('Is first letter capitalized', () => {
  expect(capitalize('string')).toBe('String')
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('is string reversed', () => {
  expect(reverseString('string')).toBe('gnirts')
});