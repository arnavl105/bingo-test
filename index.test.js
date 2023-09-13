const main = require('./index.js');

test('Test case 1', () => {
  const input = `
    7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1
    22 13 17 11 0
    8 2 23 4 24
    21 9 14 16 7
    6 10 3 18 5
    1 12 20 15 19
  `;
  expect(main(input)).toBe(true);  // Adjust the expected output accordingly
});

test('Test case 2', () => {
  const input = `
    22,2,14,18,19
    22 13 17 11 0
    8 2 23 4 24
    21 9 14 16 7
    6 10 3 18 5
    1 12 20 15 19
  `;
  expect(main(input)).toBe(false); // Adjust the expected output accordingly
});

// ... (add more test cases following the same structure)

