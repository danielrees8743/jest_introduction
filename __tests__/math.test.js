const { multiplyNums, sumTwoNums } = require('../math');

test('sumTwoNums function adds two numbers', () => {
  expect(sumTwoNums(1, 3)).toEqual(4);
});

describe('Muliplies numbers', () => {
  test('multiplyNums function multiplies two numbers', () => {
    expect(multiplyNums(2, 3)).toEqual(6);
  });
  it('This function multiplys three numbers', () => {
    expect(multiplyNums(2, 3, 4)).toEqual(24);
  });
});

it('This function multiplies two numbers', () => {
  expect(multiplyNums(2, 3)).toEqual(6);
});
