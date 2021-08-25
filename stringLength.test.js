const stringLength = require('./stringLength.js');

it('EmptyString', () => {
  expect(stringLength("T")).toBeGreaterThan(0);
});

it('String Length 4', () => {
  expect(stringLength("Test")).toBe(4);
});

it('MaxCharacters', () => {
  expect(stringLength("This string is to long for the app")).toBeLessThan(10);
});